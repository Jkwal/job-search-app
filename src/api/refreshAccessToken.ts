import {CLIENT_ID, CLIENT_SECRET, fetchAuthData, REFRESH, setUserToLocalStorage} from "utils";


    export
const refreshAccessToken = async (REFRESH_TOKEN: string) => {
    const refreshParams = new URLSearchParams({
        refresh_token: `${REFRESH_TOKEN}`,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    });

    const url = `${REFRESH}/?${refreshParams.toString()}`;

    const user = await fetchAuthData(url, 'GET');

    setUserToLocalStorage(user);
}