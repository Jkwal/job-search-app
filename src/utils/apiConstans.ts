export const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
export const API_APP_ID = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

const AUTH_TOKEN = 'Bearer v3.r.137440105.fb1855dcb0ca5d08fd835ac41812c156105d3d1b.f1947db1265383c67fdd652f03f0f5fbbb4040a3';

const headers = {
  'x-secret-key': SECRET_KEY,
  'X-Api-App-Id': API_APP_ID,
  'Authorization': AUTH_TOKEN,
};


export const fetchData = async (url: string, method: string): Promise<any> => {
  const response = await fetch(url, {
    method,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Request ${url} failed`);
  }

  return response.json();
};