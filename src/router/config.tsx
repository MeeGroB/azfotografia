import { lazy } from "react";
import { type RouteObject } from "react-router-dom";

const HomePage = lazy(()=> import('../pages/home/page'));
const PreweddingSessionPage = lazy(()=> import('../pages/services/prewedding-sesion/page'))


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },

    {
        path: '/servicios/pre-boda',
        element: <PreweddingSessionPage />
    }
];

export default routes;