import {useEffect, useState} from "react";

import './styles/global.scss'

import {Layout} from "./components";
import {AppRoutes} from "./AppRoutes";
import {notification} from "./common";
import {getAccessToken, getCatalogues, getVacancies} from "./api";
import {ICatalogues, IFilters, IVacancies, IVacancy} from "./types";
import {ReactComponent as IconBalloon} from "assets/IconBalloon.svg";
import {
  mockAuth,
  getUserFromLocalStorage,
  addFavoriteToLocalStorage,
  getFavoritesToLocalStorage,
  removeFromFavoriteToLocalStorage
} from "./utils";


function App() {
  const [isInit, setIsInit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [activePage, setPage] = useState(1);

  const [catalogues, setCatalogues] = useState<ICatalogues[]>([]);
  const [vacancies, setVacancies] = useState<IVacancies>({objects: null});
  const [favoriteVacancies, setFavoriteVacancies] = useState<IVacancy[]>(getFavoritesToLocalStorage());

  const [filters, setFilters] = useState<IFilters>({
    keyword: '',
    paymentTo: '',
    paymentFrom: '',
    selectedCatalogue: '',
  });

  const {keyword, paymentTo, selectedCatalogue, paymentFrom} = filters;


  const login = async () => {
    const user = getUserFromLocalStorage()
    if (!user) {
      await getAccessToken(mockAuth)
    }
    setIsInit(true);
  }

  useEffect(() => {
    login()
  }, [])


  useEffect(() => {
    if (isInit === false) {
      return
    }

    setIsLoading(true)

    getVacancies(keyword, paymentFrom, activePage, paymentTo, selectedCatalogue)
      .then(data => setVacancies(data))
      .finally(() => {
        setIsLoading(false);
      });

  }, [keyword, paymentFrom, activePage, paymentTo, selectedCatalogue, isInit]);


  useEffect(() => {
    getCatalogues().then(data => setCatalogues(data));
  }, [])

  useEffect(() => {
    localStorage.setItem("favoriteVacancies", JSON.stringify(favoriteVacancies));
  }, [favoriteVacancies]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteVacancies");
    if (storedFavorites) {
      setFavoriteVacancies(JSON.parse(storedFavorites));
    }
  }, []);


  if (isInit === false) {
    return <IconBalloon/>

  }

  const addFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (!isFavorite) {
      setFavoriteVacancies((prevVacancies) => [...prevVacancies, vacancy]);
      addFavoriteToLocalStorage(vacancy);
      notification("Вакансия добавлена в избранное")
    }
  };

  const removeFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (isFavorite) {
      setFavoriteVacancies((prevVacancies) =>
        prevVacancies.filter((item) => item.id !== vacancy.id)
      );
      removeFromFavoriteToLocalStorage(vacancy)
      notification("Вакансия удалена из избранного")
    }
  };

  const handleFilters = (keyword: string, paymentFrom: string, paymentTo: string, selectedCatalogue: string) => {
    setFilters(prev => ({
      ...prev,
      keyword: keyword,
      paymentTo: paymentTo,
      paymentFrom: paymentFrom,
      selectedCatalogue: selectedCatalogue
    }));
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters(prev => ({
      ...prev,
      keyword: '',
      paymentTo: '',
      paymentFrom: '',
      selectedCatalogue: ''
    }));
    setPage(1);
  }

  return (
    <Layout favoriteVacancies={favoriteVacancies}>
      <AppRoutes
        isLoading={isLoading}

        vacancies={vacancies}
        catalogues={catalogues}

        setPage={setPage}
        activePage={activePage}

        handleFilters={handleFilters}
        handleResetFilters={handleResetFilters}

        favoriteVacancies={favoriteVacancies}
        addFavoriteVacancy={addFavoriteVacancy}
        removeFavoriteVacancy={removeFavoriteVacancy}
      />
    </Layout>
  );
}

export default App;
