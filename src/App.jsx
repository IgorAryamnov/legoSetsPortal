import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, SuspenseFallback } from "./Components";
import "@ant-design/v5-patch-for-react-19";
import { lazy, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RegistrationPage } from "./Pages";

const MainPage = lazy(() => import("./Pages/MainPage"));
const AuthorizationPage = lazy(() => import("./Pages/AuthorizationPage"));
const FavoritePage = lazy(() => import("./Pages/FavoritePage"));
const FavoriteProductPage = lazy(() => import("./Pages/FavoriteProductPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));

function App() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify({}));
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              index
              element={
                <Suspense fallback={<SuspenseFallback />}>
                  <MainPage />
                </Suspense>
              }
            />
            <Route
              path="/favorite"
              element={
                <Suspense fallback={<SuspenseFallback />}>
                  <FavoritePage />
                </Suspense>
              }
            />
            <Route
              path="/favorite/:id"
              element={
                <Suspense fallback={<SuspenseFallback />}>
                  <FavoriteProductPage />
                </Suspense>
              }
            />
            <Route
              path="/:page/:id"
              element={
                <Suspense fallback={<SuspenseFallback />}>
                  <ProductPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            exact
            path="authorization"
            element={
              <Suspense fallback={<SuspenseFallback />}>
                <AuthorizationPage />
              </Suspense>
            }
          />
          <Route
            exact
            path="authorization/registration"
            element={
              <Suspense fallback={<SuspenseFallback />}>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<SuspenseFallback />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
