import React, {FC, useContext} from "react";
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {EmptyPage} from "./pages/EmptyPage/EmptyPage";
import {VacancyPage} from "./pages/VacancyPage/VacancyPage";
import {NotFoundPage} from "pages/NotFoundPage/NotFoundPage";
import {FavoritesPage} from "./pages/FavoritesPage/FavoritesPage";

import {ROUTES} from "./utils";
import {AppContext} from "context";


export const AppRoutes: FC = () => {

    const {favoriteVacancies} = useContext(AppContext);

    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage/>}/>
            <Route path={ROUTES.VACANCY} element={<VacancyPage/>}/>
            <Route path={ROUTES.FAVORITES} element={favoriteVacancies.length ? <FavoritesPage/> : <EmptyPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};