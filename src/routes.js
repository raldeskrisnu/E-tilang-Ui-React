import React from 'react';
import Loadable from 'react-loadable'
import Layout from './containers/Layout';

function Loading() {
    return <div>Loading...</div>;
}

const users = Loadable({
    loader: () => import('./views/users/Users'),
    loading: Loading,
  });

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: Layout },
    { path: '/users', name: 'Users', component: users }
];

export default routes;