import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {VacancyPage} from "./pages/VacancyPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {FavoritesPage} from "./pages/FavoritesPage";

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
