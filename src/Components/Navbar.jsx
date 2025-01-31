import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/loginState";
import styled from "styled-components";
import logo from "../utils/logo.png";

const StyledHeader = styled.header`
  border: 2px solid #14a76c;
  border-left-width: 0px;
  border-right-width: 0px;
  margin-top: 50px;
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-around;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 150px;
  font-size: 20px;
  background: #ff652f;
  padding: 10px;
  outline: none;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  text-align: center;
  box-sizing: border-box;
  margin: 0px 10px 0px 0px;
  border: 2px solid #ff652f;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #14a76c;
  }
`;
const LinksContainer = styled.div`
  display: flex;
`;
const UserName = styled.p`
  color: #ffe400;
  margin: 0px 20px 0px 0px;
`;
const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserLogOutButton = styled.button`
  color: black;
  width: 150px;
  font-size: 20px;
  background: #ff652f;
  padding: 10px;
  outline: none;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  text-align: center;
  box-sizing: border-box;
  margin: 0px 10px 0px 0px;
  border: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #14a76c;
  }
`;

export function Navbar() {
  let loginSlice = useSelector((state) => state.log.loginState);
  const dispatch = useDispatch();
  function HandleClick() {
    dispatch(logOut());
  }

  if (!loginSlice) {
    return null;
  }
  return (
    <>
      <StyledHeader>
        <LinksContainer>
          <Link style={{ outline: "none", height: 50, marginRight: 10 }} to="/">
            <img height={50} src={logo} alt="logo" />
          </Link>
          <StyledLink to="/favorite">Избранное</StyledLink>
        </LinksContainer>

        <LinksContainer>
          {loginSlice.loggedIn ? (
            <UserNameContainer>
              <UserName>{loginSlice.user}</UserName>
              <UserLogOutButton
                onClick={() => {
                  HandleClick();
                }}
              >
                Выйти
              </UserLogOutButton>
            </UserNameContainer>
          ) : (
            <StyledLink to="/authorization">Войти</StyledLink>
          )}
        </LinksContainer>
      </StyledHeader>

      <Outlet />
    </>
  );
}
