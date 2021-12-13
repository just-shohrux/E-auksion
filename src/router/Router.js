import React from 'react';
import {BrowserRouter as WebRouter, Redirect, Route, Switch} from "react-router-dom";
import LayoutManager from "../layouts/LayoutManager";
import AuthLoader from "../services/auth/AuthLoader";
import IsAuth from "../services/auth/IsAuth";
import IsGuest from "../services/auth/IsGuest";
import ProfilePage from "../modules/cabinet/pages/ProfilePage";
import HomePage from "../modules/auction/pages/HomePage";
import ContactPage from "../modules/auction/pages/ContactPage";
import AboutPage from "../modules/auction/pages/AboutPage";
import HelpPage from "../modules/auction/pages/HelpPage";

const Router = () => {
    return (
        <WebRouter>
            <AuthLoader>
                <LayoutManager>
                    <IsAuth>
                        <Switch>
                            <Route path={'/profile'} exact component={ProfilePage}/>
                            <Redirect to={'/profile'}/>
                        </Switch>
                    </IsAuth>
                    <IsGuest>
                        <Switch>
                            <Route path={'/'} exact component={HomePage}/>
                            <Route path={'/contact'} exact component={ContactPage}/>
                            <Route path={'/about'} exact component={AboutPage}/>
                            <Route path={'/help'} exact component={HelpPage}/>
                            <Route path={'*'}>
                                <Redirect to={'/404'}/>
                            </Route>
                        </Switch>
                    </IsGuest>
                </LayoutManager>
            </AuthLoader>
        </WebRouter>
    );
};

export default Router;
