import { Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/loginState";

export function Navbar() {
  let loginSlice = useSelector((state) => state.log.loginState);
  if (typeof loginSlice === "string") {
    loginSlice = JSON.parse(loginSlice);
  }
  const dispatch = useDispatch();

  function HandleClick() {
    dispatch(logOut({ loggedIn: false, user: null }));
  }

  return (
    <>
      <header>
        <Link to="/">Логотип</Link>
        <Link to="/favorite">Избранное</Link>
        {loginSlice.loggedIn ? (
          <div>
            <p>{loginSlice.user}</p>
            <Button
              onClick={() => {
                HandleClick();
              }}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <Link to="/authorization">Войти или зарегистрироваться</Link>
        )}
      </header>
      <Outlet />
    </>
  );
}
