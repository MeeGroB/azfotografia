import { lazy } from "react";
import { type RouteObject } from "react-router-dom";

const HomePage = lazy(()=> import('../pages/home/page'));
const PreweddingSessionPage = lazy(()=> import('../pages/services/prewedding-sesion/page'));
const WeddingPhotographyPage = lazy(()=> import('../pages/services/wedding-photography/page'));

const WeddingVideoPage = lazy(()=> import('../pages/services/wedding-video/page'));

const Pricingpage = lazy(()=> import('../pages/pricings/page'));

const AlbumDetailPage = lazy(()=>import('../pages/albums/albumDetail/page') )


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },

    {
        path: '/servicios/pre-boda',
        element: <PreweddingSessionPage />
    },

    {
        path: '/servicios/fotografia-bodas',
        element: <WeddingPhotographyPage />
    },

    {
        path: 'servicios/video-bodas',
        element: <WeddingVideoPage />
    },

    {
        path: '/precios',
        element: <Pricingpage />
    },

    {
        path: '/album/:id',
        element: <AlbumDetailPage />
    }
];

export default routes;