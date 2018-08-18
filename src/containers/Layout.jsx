import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './Header';
import {
    AppBreadcrumb,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
  } from '@coreui/react';

import Navigation from '../navigation/nav';
import Routes from '../routes';

class Layout extends Component {

    render() {
        return (
            <div className="app">
                <AppHeader fixed>
                    <Header />
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <AppSidebarNav navConfig={Navigation} {...this.props} />
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb appRoutes={Routes} />
                        <Container fluid>
                            <Switch>
                                {
                                    Routes.map((route, idx) => {
                                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                        <route.component {...props} />
                                    )} />)
                                        : (null)
                                },
                                )}
                                <Redirect from="/" to="/dashboard" />
                            </Switch>
                        </Container>
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout;