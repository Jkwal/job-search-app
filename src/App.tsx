import './styles/global.scss'

import {Layout} from "./components";
import {AppRoutes} from "./AppRoutes";
import {useEffect, useState} from "react";
import {IVacancy} from "./types";


function App() {

  const [favoriteVacancies, setFavoriteVacancies] = useState<IVacancy[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteVacancies");
    if (storedFavorites) {
      setFavoriteVacancies(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteVacancies", JSON.stringify(favoriteVacancies));
  }, [favoriteVacancies]);

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

  return (
    <Layout>
      <AppRoutes
        favoriteVacancies={favoriteVacancies}
        removeFavoriteVacancy={removeFavoriteVacancy}
        addFavoriteVacancy={addFavoriteVacancy}
      />
    </Layout>
  );
}

export default App;
