import {IVacancies} from "types";
import {fetchData, VACANCIES} from "utils";


export const getVacancies =
  async (
    keyword: string,
    paymentTo: string,
    activePage: number,
    paymentFrom: string,
    selectedCatalogue: string
  ): Promise<IVacancies> => {

    const queryParams = new URLSearchParams({
      count: '4',
      published: '1',
      keyword: keyword,
      no_agreement: '0',
      payment_to: paymentTo || '',
      payment_from: paymentFrom || '',
      page: activePage.toString(),
      catalogues: selectedCatalogue || '',
    });

    const url = `${VACANCIES}/?${queryParams.toString()}`;

    return fetchData(url, 'GET');
  };

