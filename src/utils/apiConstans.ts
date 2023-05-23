import {refreshAccessToken} from "../api";
import {getUserFromLocalStorage} from "./localStorage";

export const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
export const API_APP_ID = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';


const defaultHeaders = {
    'x-secret-key': SECRET_KEY,
    'X-Api-App-Id': API_APP_ID,
};


const getDefaultHeaders = (shouldTokenBeAdded = true) => {
    const headers: any = {...defaultHeaders}

    if (shouldTokenBeAdded) {
        const user = getUserFromLocalStorage()
        if (user) {
            headers.Authorization = `Bearer ${user.access_token}`
        }
    }
    return headers;
}


export const fetchData = async (url: string, method: string, count: number = 1): Promise<any> => {

    const response = await fetch(url, {
        method,
        headers: getDefaultHeaders(),
    });

    if (response.status === 410 && count <= 2) {
        const user = getUserFromLocalStorage();
        await refreshAccessToken(user.refresh_token);
        return fetchData(url, method, count + 1)
    }

    if (!response.ok) {
        throw new Error(`Request ${url} failed`);
    }

    return response.json();
};

export const fetchAuthData = async (url: string, method: string): Promise<any> => {
    const response = await fetch(url, {
        method,
        headers: getDefaultHeaders(false),
    });

    if (!response.ok) {
        throw new Error(`Request ${url} failed`);
    }

    return response.json();
};
