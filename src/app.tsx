import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./styles/global.scss";
import { Theme } from "./styles/theme";
import "emoji-mart/css/emoji-mart.css";
import Container from "react-bootstrap/Container";

// Lazy loading pages
const List = React.lazy(() => import("./pages/kudos-list"));
const Create = React.lazy(() => import("./pages/create-kudos"));
const NotFound = React.lazy(() => import("./pages/not-found"));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Container>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route exact path="/">
                <List />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
