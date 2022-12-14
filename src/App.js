import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { DeleteContextProvider } from "./common/contexts/delete.context";

import { HomeScreen } from "./components";
import { useBaseHref } from "./hooks";

/**
 *
 * @returns {JSX.Element}
 */
function App() {
  const queryClient = new QueryClient();
  const baseHref = useBaseHref();
  const useHashRouter = process.env.REACT_APP_USE_HASH_ROUTER === "true";
  const Router = useHashRouter ? HashRouter : BrowserRouter;
  return (
    <QueryClientProvider client={queryClient}>
      <DeleteContextProvider>
        <Router basename={baseHref}>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </Router>
      </DeleteContextProvider>
    </QueryClientProvider>
  );
}

App.defaultProps = {
  manifests: [],
  navigate: () => {}
};

export default App;
