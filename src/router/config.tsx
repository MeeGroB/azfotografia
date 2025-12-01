import { lazy } from "react";
import { type RouteObject } from "react-router-dom";

const HomePage = lazy(()=> import('../pages/home/page'));


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    }
];

export default routes;