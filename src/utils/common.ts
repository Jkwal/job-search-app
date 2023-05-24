import {IVacancies} from "types";


export const findCountPage = (vacancies: IVacancies): number => vacancies.total <= 500 ? (vacancies.total / 4) : ((500 / 4) - 2);