import React from 'react';
import Loadable from 'react-loadable'
import Layout from './containers/Layout';

function Loading() {
    return <div>Loading...</div>;
}

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

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: Layout },
    { path: '/users', name: 'Users', component: users },
    { path: '/police', exact: true, name: 'Police', component: police },
    { path: '/police/allpolice', exact:true, name: 'Police Data', component: police },
    { path: '/police/active', exact:true, name: 'Police Data', component: activePolice },
];

export default routes;