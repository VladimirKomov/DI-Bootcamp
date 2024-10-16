export const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';

if (!process.env.REACT_APP_X_RAPIDAPI_KEY) {
    throw new Error("Environment variable REACT_APP_X_RAPIDAPI_KEY is missing");
}

if (!process.env.REACT_APP_X_RAPIDAPI_HOST) {
    throw new Error("Environment variable REACT_APP_X_RAPIDAPI_HOST is missing");
}

export const X_RAPIDAPI_KEY: string = process.env.REACT_APP_X_RAPIDAPI_KEY;
export const X_RAPIDAPI_HOST: string = process.env.REACT_APP_X_RAPIDAPI_HOST;