import {IAuthResponse, IVacancy} from "types";
import {LocalStorageKeyEnum} from "./constans";


const setLocalStorage = (key: LocalStorageKeyEnum, value: object) => {
  return localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorage = (key: LocalStorageKeyEnum) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch {
    return undefined;
  }
}

export const setUserToLocalStorage = (user: IAuthResponse) => {
  setLocalStorage(LocalStorageKeyEnum.USER, user);
}

export const getUserFromLocalStorage = (): IAuthResponse => {
  return getLocalStorage(LocalStorageKeyEnum.USER);
}

export const setFavoritesToLocalStorage = (favorites: IVacancy[]) => {
  setLocalStorage(LocalStorageKeyEnum.FAVORITE_VACANCIES, favorites);
}

export const getFavoritesToLocalStorage = (): IVacancy[] => {
  return getLocalStorage(LocalStorageKeyEnum.FAVORITE_VACANCIES) || []
}

export const addFavoriteToLocalStorage = (favorite: IVacancy) => {
  const favorites = getFavoritesToLocalStorage() || [];
  favorites.push(favorite);
  setFavoritesToLocalStorage(favorites);
}

export const removeFromFavoriteToLocalStorage = (favorite: IVacancy) => {
  const favorites = getFavoritesToLocalStorage() || [];
  favorites.filter(({id}) => id !== favorite.id);
  setFavoritesToLocalStorage(favorites);
}




