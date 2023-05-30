import {ICatalogues} from "types";
import {CATALOGUES, fetchData} from "utils";


export const getCatalogues = async (): Promise<ICatalogues[]> => {
	const url = `${CATALOGUES}`;

	return fetchData(url, 'GET');
};

