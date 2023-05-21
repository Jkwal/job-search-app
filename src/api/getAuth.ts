import {IAuth, IAuthResponse} from "types";
import {AUTH, SECRET_KEY, API_APP_ID} from "utils";


const authHeaders = {
  'x-secret-key': SECRET_KEY,
  'X-Api-App-Id': API_APP_ID,
};


export const getAuth = async (mockAuth: IAuth): Promise<IAuthResponse> => {

  const authParams: Record<string, string> = {
    login: mockAuth.login,
    password: mockAuth.password,
    client_id: mockAuth.client_id.toString(),
    client_secret: mockAuth.client_secret,
    hr: mockAuth.hr.toString(),
  };

  const url = `${AUTH}?${authParams}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: authHeaders,
  });

  if (!response.ok) {
    throw new Error('Failed to authorization');
  }

  return response.json();
}

//     "access_token": "v3.r.137440105.fb1855dcb0ca5d08fd835ac41812c156105d3d1b.f1947db1265383c67fdd652f03f0f5fbbb4040a3",
//     "refresh_token": "v3.r.137440105.261fd6ada0f861228f63012e3866038fe1dbbe00.bfd7b68b9bf14addd7f44bb7fff1c1866abebcfb",
//     "ttl": 1684837311,
//     "expires_in": 604800,
//     "token_type": "Bearer",
//     "reg_user_resumes_count": 1