import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
    return <div>Loading...</div>;
}

const dashboard = Loadable({
    loader: () => import('./views/dashboard/Dashboard'),
    loading: Loading
});

const users = Loadable({
    loader: () => import('./views/users/Users'),
    loading: Loading
});

const police = Loadable({
    loader: () => import('./views/police/Police'),
    loading: Loading
});

const activePolice = Loadable({
    loader: () => import('./views/police/ActivePolice'),
    loading: Loading
});

const trafficViolator = Loadable({
    loader: () => import('./views/trafficviolator/trafficviolator'),
    loading: Loading
});

const policeLocationMap = Loadable({
    loader: () => import('./views/gmap/gmap'),
    loading: Loading
});

const page404 = Loadable({
    loader: () => import('./views/404/Page404'),
    loading:Loading
});

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: dashboard },
    { path: '/users', name: 'Users', component: users },
    { path: '/police', exact: true, name: 'Polisi', component: police },
    { path: '/police/allpolice', exact:true, name: 'Semua Data Polisi', component: police },
    { path: '/police/active', exact:true, name: 'Data Polisi Aktif', component: activePolice },
    { path: '/police/location', exact:true, name: 'Lokasi Polisi', component: policeLocationMap },
    { path: '/pelanggar/', exact:true, name: 'Pelanggar', component: trafficViolator },
    { path: '/pelanggar/datapelanggar', exact:true, name: 'Data Pelanggar', component: trafficViolator },
    { component: page404 },
];

export default routes;