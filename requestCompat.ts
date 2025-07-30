import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { IncomingMessage as HttpIncomingMessage } from 'http';

// Type for request options (partial, for compatibility)
export interface RequestOptions {
    method?: string;
    url?: string;
    uri?: string; // For backward compatibility
    params?: any;
    headers?: any;
    data?: any;
    form?: any;
    formData?: any;
    useQuerystring?: boolean;
    json?: boolean;
    body?: any;
    auth?: {
        username: string;
        password: string;
    };
    qs?: any;
    encoding?: any;
}

// Create a proper IncomingMessage that extends the Node.js interface
export class IncomingMessage extends HttpIncomingMessage {
    statusCode?: number;
    statusMessage?: string;
    
    constructor(res: AxiosResponse) {
        // Create a mock socket for the IncomingMessage
        const mockSocket = {
            remoteAddress: '',
            remoteFamily: '',
            remotePort: 0,
            localAddress: '',
            localPort: 0,
            bytesRead: 0,
            bytesWritten: 0,
            connecting: false,
            destroyed: false,
            readable: true,
            writable: false,
            allowHalfOpen: false,
            timeout: 0,
            setKeepAlive: () => {},
            setNoDelay: () => {},
            setTimeout: () => {},
            unref: () => {},
            ref: () => {},
            cork: () => {},
            uncork: () => {},
            destroy: () => {},
            pause: () => {},
            resume: () => {},
            write: () => false,
            end: () => {},
            on: () => {},
            once: () => {},
            emit: () => false,
            addListener: () => {},
            removeListener: () => {},
            removeAllListeners: () => {},
            setMaxListeners: () => {},
            getMaxListeners: () => 0,
            listeners: () => [],
            rawListeners: () => [],
            listenerCount: () => 0,
            prependListener: () => {},
            prependOnceListener: () => {},
            eventNames: () => [],
        } as any;

        super(mockSocket);
        
        this.statusCode = res.status;
        this.statusMessage = res.statusText;
        this.headers = res.headers as any;
        
        // Set up the response body
        const responseData = res.data;
        if (typeof responseData === 'string') {
            this.push(responseData);
        } else if (responseData) {
            this.push(JSON.stringify(responseData));
        }
        this.push(null); // End the stream
    }
}

// Main compatibility function
function request(options: RequestOptions, callback: (error: any, response: IncomingMessage, body: any) => void) {
    // Convert to axios config
    const axiosConfig: AxiosRequestConfig = {
        method: options.method?.toLowerCase() as any,
        url: options.url || options.uri,
        params: options.params || options.qs,
        headers: options.headers,
        data: options.data || options.body,
        auth: options.auth,
    };

    // Handle form/formData
    if (options.form) {
        axiosConfig.headers = axiosConfig.headers || {};
        axiosConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        axiosConfig.data = new URLSearchParams(options.form).toString();
    } else if (options.formData) {
        axiosConfig.headers = axiosConfig.headers || {};
        axiosConfig.headers['Content-Type'] = 'multipart/form-data';
        axiosConfig.data = options.formData;
    }

    // Handle json option
    if (options.json) {
        axiosConfig.headers = axiosConfig.headers || {};
        axiosConfig.headers['Content-Type'] = 'application/json';
        if (typeof axiosConfig.data === 'object' && axiosConfig.data !== null) {
            axiosConfig.data = JSON.stringify(axiosConfig.data);
        }
    }

    axios(axiosConfig)
        .then((response: AxiosResponse) => {
            const incomingMessage = new IncomingMessage(response);
            callback(null, incomingMessage, response.data);
        })
        .catch((error: AxiosError) => {
            if (error.response) {
                const incomingMessage = new IncomingMessage(error.response);
                callback(error, incomingMessage, error.response.data);
            } else {
                callback(error, null as any, null);
            }
        });
}

export default request; 