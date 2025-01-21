import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AuthorizationPage,
  ErrorPage,
  FavoritePage,
  MainPage,
  StructurePage,
} from "./Pages";
import { Navbar } from "./Components";
import "@ant-design/v5-patch-for-react-19";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
            <Route index element={<MainPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path=":page/:id" element={<StructurePage />} />
          </Route>
          <Route path="authorization" element={<AuthorizationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
