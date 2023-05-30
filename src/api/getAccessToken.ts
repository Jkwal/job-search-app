import {IAuth, IAuthResponse} from "types";
import {AUTH, fetchAuthData, setUserToLocalStorage} from "utils";


export const getAccessToken = async (mockAuth: IAuth): Promise<IAuthResponse> => {
	const authParams = new URLSearchParams({
		login: mockAuth.login,
		password: mockAuth.password,
		client_id: mockAuth.client_id.toString(),
		client_secret: mockAuth.client_secret,
		hr: mockAuth.hr.toString(),
	});

	const url = `${AUTH}?${authParams.toString()}`;

	const user = await fetchAuthData(url, 'POST');

	setUserToLocalStorage(user);

	return user;
}
