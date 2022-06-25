import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { PATHS } from "./Constants";

const Home = lazy(() => import("./Pages/Home"));
const CatsPage = lazy(() => import("./Pages/CatsPage"));

const Routing = () => {
    return (
        <Routes>
            <Route path={PATHS.home} element={
                <Suspense fallback={<Loader />}>
                    <Home />
                </Suspense>
            } />
            <Route path={PATHS.cats} element={
                <Suspense fallback={<Loader />}>
                    <CatsPage />
                </Suspense>
            } />
        </Routes>
    );
};

export default Routing;
