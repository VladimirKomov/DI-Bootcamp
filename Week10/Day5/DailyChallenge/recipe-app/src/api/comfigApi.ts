import {RequestOptions, RequestRandomOptions} from "../types/typesRequest.ts";
import {API_URL, X_RAPIDAPI_HOST, X_RAPIDAPI_KEY} from "./constantsApi.ts";

const createBaseOptions = (): RequestOptions => {
    return {
        method: 'GET',
        url: API_URL,
        headers: {
            'x-rapidapi-key': X_RAPIDAPI_KEY,
            'x-rapidapi-host': X_RAPIDAPI_HOST,
        },
    };
}

export const createRandomRecipeOptions = (params?: {tags?: string; number ? : string}): RequestRandomOptions => {
    const baseOptions = createBaseOptions(); // base options
    if (!params) { //default number
        params = { number: '1' };
    } else if (!params.number) {
        params.number = '1';
    }
    return {
        ...baseOptions,
        url: `${API_URL}/random`,
        params,
    };
}