import {refreshAccessToken} from "api";
import {IHeaders} from "types";
import {getUserFromLocalStorage} from "./localStorage";
import {CLIENT_SECRET, SECRET_KEY} from "./constans";


const defaultHeaders: IHeaders = {
  'x-secret-key': SECRET_KEY,
  'X-Api-App-Id': CLIENT_SECRET,
};

const getDefaultHeaders = (shouldTokenBeAdded: boolean) => {
  const headers = {...defaultHeaders};

  if (shouldTokenBeAdded) {
    const user = getUserFromLocalStorage();
    if (user) {
      headers.Authorization = `Bearer ${user.access_token}`;
    }
  }
  return headers;
}

export const fetchData = async (url: string, method: string, count: number = 1): Promise<any> => {
  const response = await fetch(url, {
    method,
    headers: getDefaultHeaders(true),
  });

  if (response.status === 410 && count <= 2) {
    const user = getUserFromLocalStorage();
    await refreshAccessToken(user.refresh_token);
    return fetchData(url, method, count + 1);
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
