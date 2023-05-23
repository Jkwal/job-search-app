import {API_APP_ID, fetchAuthData, REFRESH, setUserToLocalStorage} from "utils";


export const refreshAccessToken = async (REFRESH_TOKEN: string) => {

    const refreshParams = new URLSearchParams ({
        refresh_token: `${REFRESH_TOKEN}`,
        client_id: '2356',
        client_secret: API_APP_ID,
    });

    const url = `${REFRESH}/?${refreshParams.toString()}`;

    const user = await fetchAuthData(url, 'GET');

    setUserToLocalStorage(user);
}