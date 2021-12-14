import React from "react";
import {
  BrowserRouter as WebRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LayoutManager from "../layouts/LayoutManager";
import AuthLoader from "../services/auth/AuthLoader";
import IsAuth from "../services/auth/IsAuth";
import IsGuest from "../services/auth/IsGuest";
import ProfilePage from "../modules/cabinet/pages/ProfilePage";
import HomePage from "../modules/auction/pages/HomePage";
import ContactPage from "../modules/auction/pages/ContactPage";
import AboutPage from "../modules/auction/pages/AboutPage";
import HelpPage from "../modules/auction/pages/HelpPage";
import LotsListPage from "../modules/auction/pages/LotsListPage";
import LoginPage from "../modules/auth/pages/LoginPage";
import RegisterPage from "../modules/auth/pages/RegisterPage";
import LotDetail from "../components/detail";
import LotDetailPage from "../modules/auction/pages/LotDetailPage";

const Router = () => {
  return (
    <WebRouter>
      <AuthLoader>
        <LayoutManager>
          <IsAuth>
            <Switch>
              <Route path={"/profile"} exact component={ProfilePage} />
              <Redirect to={"/profile"} />
            </Switch>
          </IsAuth>
          <IsGuest>
            <Switch>
              <Route path={"/"} exact component={HomePage} />
              <Route path={"/contact"} exact component={ContactPage} />
              <Route path={"/about"} exact component={AboutPage} />
              <Route path={"/help"} exact component={HelpPage} />
              <Route path={"/lots"} exact component={LotsListPage} />
              <Route path={"/lot-detail"} exact component={LotDetailPage} />
              <Route path={"/login"} exact component={LoginPage} />
              <Route path={"/register"} exact component={RegisterPage} />
              <Route path={"*"}>
                <Redirect to={"/404"} />
              </Route>
            </Switch>
          </IsGuest>
        </LayoutManager>
      </AuthLoader>
    </WebRouter>
  );
};

export default Router;
