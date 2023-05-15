import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {NotFoundPage} from "./pages/NotFoundPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {FavoritesPage} from "./pages/FavoritesPage";
import {VacancyPage} from "./pages/VacancyPage/VacancyPage";

import {ROUTES} from "./utils";


export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage/>}/>
            <Route path={ROUTES.VACANCY} element={<VacancyPage/>}/>
            <Route path={ROUTES.FAVORITES} element={<FavoritesPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}
