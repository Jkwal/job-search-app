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
      published: '1',
      count: '4',
      page: activePage.toString(),
      keyword,
      catalogues: selectedCatalogue || '',
      payment_from: paymentFrom || '',
      payment_to: paymentTo || '',
    });

    const url = `${VACANCIES}/?${queryParams.toString()}`;

    return fetchData(url, 'GET');
  };

