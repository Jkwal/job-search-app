import {IVacancy} from "types";
import {fetchData, VACANCIES} from "utils";


export const getVacancy = async (id: string): Promise<IVacancy> => {

	const url = `${VACANCIES}/${id}/`;

	return fetchData(url, 'GET');
};
