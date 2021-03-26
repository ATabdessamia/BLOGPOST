import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./screens/Header";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import Footer from "./screens/Footer";
import ProfileScreen from "./screens/ProfileScreen";
import SignIn from "./screens/SignIn";
import SingnUp from "./screens/SingnUp";
import SettingsProfile from "./screens/SettingsProfile";
import WelcomeScreen from "./screens/WelcomeScreen";
import ResetScreen from "./screens/ResetScreen";
import ForgotScreen from "./screens/ForgotScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WelcomeScreen} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SingnUp} />
          <Route path="/forgotPassword" exact component={ForgotScreen} />
          <Route path="/resetPassword/:token" exact component={ResetScreen} />
          <>
            <Header />
            <Route path="/home" exact component={HomeScreen} />
            <Route path="/:id/:slug" exact component={PostScreen} />
            <Route path="/profile" exact component={ProfileScreen} />
            <Route path="/settings" exact component={SettingsProfile} />
            <Footer />
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
