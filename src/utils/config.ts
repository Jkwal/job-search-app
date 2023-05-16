const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2';
const VACANCIES = `${BASE_URL}/vacancies`;



export const fetchVacancies = async (activePage: number) => {
    const response =
        await fetch(`${VACANCIES}/?page=${activePage}&count=4/&published=1`, {
            method: 'GET',
            headers: {
                'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
                'Authorization': 'Bearer v3.r.137440105.fb1855dcb0ca5d08fd835ac41812c156105d3d1b.f1947db1265383c67fdd652f03f0f5fbbb4040a3',
            },
        });

    if (!response.ok) {
        throw new Error('Failed to fetch vacancies');
    }

    return response.json();
};

// const login = 'sergei.stralenia@gmail.com';
// const password = 'paralect123';
// const client_id = 2356;
// const client_secret = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
// const hr = 0;

// export const Authorization = fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
//     },
//     body: JSON.stringify({
//         login,
//         password,
//         client_id,
//         client_secret,
//         hr,
//     }),
// }).then(response => response.json())

// "access_token": "v3.r.137440105.fb1855dcb0ca5d08fd835ac41812c156105d3d1b.f1947db1265383c67fdd652f03f0f5fbbb4040a3",
//     "refresh_token": "v3.r.137440105.261fd6ada0f861228f63012e3866038fe1dbbe00.bfd7b68b9bf14addd7f44bb7fff1c1866abebcfb",
//     "ttl": 1684837311,
//     "expires_in": 604800,
//     "token_type": "Bearer",
//     "reg_user_resumes_count": 1


