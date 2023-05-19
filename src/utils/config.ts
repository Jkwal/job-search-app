import {ICatalogues, IVacancies, IVacancy} from "types";

const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0';
const VACANCIES = `${BASE_URL}/oauth2/vacancies`;
const CATALOGUES = `${BASE_URL}/catalogues`;

const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
const API_APP_ID = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
const AUTH_TOKEN = 'Bearer v3.r.137440105.fb1855dcb0ca5d08fd835ac41812c156105d3d1b.f1947db1265383c67fdd652f03f0f5fbbb4040a3';


// const login = 'sergei.stralenia@gmail.com';
// const password = 'paralect123';
// const client_id = 2356;
// const client_secret = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
// const hr = 0;
//
// export const Authorization = fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
//         'X-Api-App-Id': API_APP_ID,
//     },
//     body: JSON.stringify({
//         login,
//         password,
//         client_id,
//         client_secret,
//         hr,
//     }),
// }).then(response => response.json())


export const fetchVacancies = async (activePage: number, keyword: string, paymentFrom: string, paymentTo: string, selectedCatalogue: string): Promise<IVacancies> => {

  const queryParams = new URLSearchParams({
    published: '1',
    count: '4',
    page: activePage.toString(),
    keyword: keyword || "",
    catalogues: selectedCatalogue || '',
    payment_from: paymentFrom || '',
    payment_to: paymentTo || '',
  });
  const url = `${VACANCIES}/?${queryParams.toString()}`;

  const headers = {
    'x-secret-key': SECRET_KEY,
    'X-Api-App-Id': API_APP_ID,
    'Authorization': AUTH_TOKEN,
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  if (!response.ok) {
    return {objects: [], total: 0};
  }

  return response.json();

}

export const getVacancy = async (id: string): Promise<IVacancy> => {

  const url = `${VACANCIES}/${id}`;

  const headers = {
    'x-secret-key': SECRET_KEY,
    'X-Api-App-Id': API_APP_ID,
    'Authorization': AUTH_TOKEN,
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch vacancy');
  }

  return response.json();
}

export const getCatalogues = async (): Promise<ICatalogues[]> => {
  const url = `${CATALOGUES}`;

  const headers = {
    'x-secret-key': SECRET_KEY,
    'X-Api-App-Id': API_APP_ID,
    'Authorization': AUTH_TOKEN,
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    return []
  }

  return response.json();
}


// "access_token": "v3.r.137440105.fb1855dcb0ca5d08fd835ac41812c156105d3d1b.f1947db1265383c67fdd652f03f0f5fbbb4040a3",
//     "refresh_token": "v3.r.137440105.261fd6ada0f861228f63012e3866038fe1dbbe00.bfd7b68b9bf14addd7f44bb7fff1c1866abebcfb",
//     "ttl": 1684837311,
//     "expires_in": 604800,
//     "token_type": "Bearer",
//     "reg_user_resumes_count": 1


