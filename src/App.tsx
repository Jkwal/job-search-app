import {useEffect, useState} from "react";

import './styles/global.scss'

import {Layout} from "./components";
import {AppRoutes} from "./AppRoutes";
import {getCatalogues, getVacancies} from "./api";
import {ICatalogues, IVacancies, IVacancy} from "./types";


function App() {
  const [isLoading, setIsLoading] = useState(false)

  const [keyword, setKeyword] = useState('');

  const [activePage, setPage] = useState(1);

  const [catalogues, setCatalogues] = useState<ICatalogues[]>([]);
  const [vacancies, setVacancies] = useState<IVacancies>({objects: null});
  const [favoriteVacancies, setFavoriteVacancies] = useState<IVacancy[]>([]);

  const [paymentTo, setPaymentTo] = useState('');
  const [paymentFrom, setPaymentFrom] = useState('');
  const [selectedCatalogue, setSelectedCatalogue] = useState('');

  useEffect(() => {
    setIsLoading(true)

    getVacancies(keyword, paymentFrom, activePage, paymentTo, selectedCatalogue)

      .then(data => setVacancies(data))

      .finally(() => {
        setIsLoading(false);
      });
  }, [keyword, paymentFrom, activePage, paymentTo, selectedCatalogue]);


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

  const addFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (!isFavorite) {
      setFavoriteVacancies((prevVacancies) => [...prevVacancies, vacancy]);
    }
  };

  const removeFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (isFavorite) {
      setFavoriteVacancies((prevVacancies) =>
        prevVacancies.filter((item) => item.id !== vacancy.id)
      );
    }
  };

  const handleSearch = (searchValue: string) => {
    setKeyword(searchValue)
    setPage(1)
  };

  const handleFilters = (paymentFrom: string, paymentTo: string, selectedCatalogue: string) => {
    setPaymentFrom(paymentFrom);
    setPaymentTo(paymentTo);
    setSelectedCatalogue(selectedCatalogue);
    setPage(1);
  };


  return (
    <Layout>
      <AppRoutes
        isLoading={isLoading}

        vacancies={vacancies}
        catalogues={catalogues}

        setPage={setPage}
        activePage={activePage}

        handleSearch={handleSearch}
        handleFilters={handleFilters}

        favoriteVacancies={favoriteVacancies}
        addFavoriteVacancy={addFavoriteVacancy}
        removeFavoriteVacancy={removeFavoriteVacancy}
      />
    </Layout>
  );
}

export default App;
