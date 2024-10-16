import axios from 'axios';
import {RequestOptions} from "../types/typesRequest.ts";
import {ApiResponse} from "../types/typesResponse.ts";

export const makeRequest = async (options: RequestOptions): Promise<ApiResponse | undefined> => {
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
