import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, SuspenseFallbackView } from "./Components";
import "@ant-design/v5-patch-for-react-19";
import { lazy, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const MainPage = lazy(() => import("./Pages/main/MainPage"));
const AuthorizationPage = lazy(() =>
  import("./Pages/authorization/AuthorizationPage")
);
const FavoritePage = lazy(() => import("./Pages/favorite/FavoritePage"));
const FavoriteProductPage = lazy(() =>
  import("./Pages/favoriteProduct/FavoriteProductPage")
);
const NotFoundPage = lazy(() => import("./Pages/notFound/NotFoundPage"));
const ProductPage = lazy(() => import("./Pages/product/ProductPage"));
const RegistrationPage = lazy(() =>
  import("./Pages/registration/RegistrationPage")
);

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
                <Suspense fallback={<SuspenseFallbackView />}>
                  <MainPage />
                </Suspense>
              }
            />
            <Route
              path="/favorite"
              element={
                <Suspense fallback={<SuspenseFallbackView />}>
                  <FavoritePage />
                </Suspense>
              }
            />
            <Route
              path="/favorite/:id"
              element={
                <Suspense fallback={<SuspenseFallbackView />}>
                  <FavoriteProductPage />
                </Suspense>
              }
            />
            <Route
              path="/:page/:id"
              element={
                <Suspense fallback={<SuspenseFallbackView />}>
                  <ProductPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            exact
            path="authorization"
            element={
              <Suspense fallback={<SuspenseFallbackView />}>
                <AuthorizationPage />
              </Suspense>
            }
          />
          <Route
            exact
            path="authorization/registration"
            element={
              <Suspense fallback={<SuspenseFallbackView />}>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<SuspenseFallbackView />}>
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
