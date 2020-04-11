import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Lazy loading pages
const List = React.lazy(() => import("./pages/kudos-list"));
const Create = React.lazy(() => import("./pages/create-kudos"));
const NotFound = React.lazy(() => import("./pages/not-found"));

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
