//for base requests
export interface RequestOptions {
    method: string;
    url: string;
    headers: {
        'x-rapidapi-key': string;
        'x-rapidapi-host': string;
    };
}

//for random recipes
export interface RequestRandomOptions extends RequestOptions {
    params?: {
        tags?: string;
        number?: string;
    };
}
