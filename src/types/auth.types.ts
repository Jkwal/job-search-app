export interface IAuth {
  login: string,
  password: string,
  client_id: string,
  client_secret: string,
  hr: number,
}

export interface IAuthResponse {
  "access_token": string,
  "refresh_token": string,
  "ttl": number,
  "expires_in": number,
  "token_type": string,
  "reg_user_resumes_count": number,
}

