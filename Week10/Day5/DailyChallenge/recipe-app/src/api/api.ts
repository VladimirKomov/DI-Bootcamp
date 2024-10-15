import axios from 'axios';
import {RequestOptions} from "../types/typesRequest.ts";
import {ApiResponse} from "../types/typesResponse.ts";

export class Options implements RequestOptions {
    method: string;
    url: string;
    params?: { tags?: string; number?: string };
    headers: { 'x-rapidapi-key': string; 'x-rapidapi-host': string };

    constructor(
        method: string,
        url: string,
        headers: { 'x-rapidapi-key': string; 'x-rapidapi-host': string },
        params?: { tags?: string; number?: string }
    ) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.params = params;
    }
}

export const makeRequest = async (options: Options): Promise<ApiResponse | undefined> => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.status, error.response?.data);
        } else {
            console.error('Error loading data: ', error);
        }
        return undefined;
    }
}
