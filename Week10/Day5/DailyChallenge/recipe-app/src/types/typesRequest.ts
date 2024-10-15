export interface RequestOptions {
    method: string;
    url: string;
    params?: {
        tags?: string;
        number?: string;
    };
    headers: {
        'x-rapidapi-key': string;
        'x-rapidapi-host': string;
    };
}
