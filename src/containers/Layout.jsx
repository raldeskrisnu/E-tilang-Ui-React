import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './Header';
import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
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
                                {Routes.map((route, idx) => {
                                    // console.log(route);
                                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                        
                                        localStorage.getItem('user') ?  <route.component {...props} />   : <Redirect from="/" to="/login" />
                                        // <route.component {...props} />
                                    )} />)
                                        : (null);
                                },
                                )}
                                {/* <Redirect from="/" to="/login" /> */}
                            </Switch>
                        </Container>
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout;