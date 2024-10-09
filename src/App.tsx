import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import queryString from "query-string";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { Home } from "./pages";
import { PagesRoutes } from "./pages/PagesRoutes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <QueryParamProvider
          adapter={ReactRouter6Adapter}
          options={{
            searchStringToObject: queryString.parse,
            objectToSearchString: queryString.stringify,
          }}
        >
          <Routes>
            <Route
              path={PagesRoutes.default}
              element={<Navigate to={PagesRoutes.home} />}
            />
            <Route path={PagesRoutes.home} element={<Home />} />
            <Route path="*" element={<Navigate to={PagesRoutes.home} />} />
          </Routes>
        </QueryParamProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
