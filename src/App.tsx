import {useCallback, useContext, useEffect} from "react";

import './styles/global.scss'

import {Layout} from "./components";
import {AppContext} from "./context";
import {AppRoutes} from "./AppRoutes";
import {mockAuth, getUserFromLocalStorage} from "./utils";
import {getAccessToken, getCatalogues, getVacancies} from "./api";
import {ReactComponent as IconBalloon} from "assets/IconBalloon.svg";


function App() {

    const {
        isInit,
        filters,
        setIsInit,
        activePage,
        setIsLoading,
        setVacancies,
        setCatalogues,
        favoriteVacancies,
        setFavoriteVacancies,
    } = useContext(AppContext);

    const login = useCallback(async () => {
        const user = getUserFromLocalStorage()

        if (!user) {
            await getAccessToken(mockAuth)
        }

        setIsInit(true);

    }, [setIsInit])

    useEffect(() => {
        login().then()
    }, [login])


    useEffect(() => {
        if (isInit === false) {
            return
        }

        setIsLoading(true)

        getVacancies(filters.keyword, filters.paymentFrom, activePage, filters.paymentTo, filters.selectedCatalogue)
            .then(data => setVacancies(data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [isInit, activePage, setVacancies, setIsLoading, filters.keyword, filters.paymentTo, filters.paymentFrom, filters.selectedCatalogue]);


    useEffect(() => {
        getCatalogues().then(data => setCatalogues(data));
    }, [setCatalogues])

    useEffect(() => {
        localStorage.setItem("favoriteVacancies", JSON.stringify(favoriteVacancies));
    }, [favoriteVacancies]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteVacancies");
        if (storedFavorites) {
            setFavoriteVacancies(JSON.parse(storedFavorites));
        }
    }, [setFavoriteVacancies]);


    if (isInit === false) {
        return (
            <div className="wrapper-balloon">
                <IconBalloon/>
            </div>
        )
    }

    return (
        <Layout>
            <AppRoutes/>
        </Layout>
    );
}

export default App;
