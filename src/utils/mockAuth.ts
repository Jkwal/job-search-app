import {IAuth} from "types";
import {CLIENT_ID, CLIENT_SECRET, LOGIN, PASSWORD} from "./constans";


export const mockAuth: IAuth = {
    login: LOGIN,
    password: PASSWORD,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    hr: 0,
}