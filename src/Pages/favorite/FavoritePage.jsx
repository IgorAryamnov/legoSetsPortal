import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FavoriteList } from "./components";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
`;

export default function FavoritePage() {
  let navigate = useNavigate();
  let logSlice = useSelector((state) => state.log.loginState);
  let favoriteSlice = useSelector((state) => state.favorite.favorite);

  useEffect(() => {
    if (!logSlice.loggedIn) {
      navigate("/authorization");
    }
  }, [logSlice.loggedIn, navigate]);

  return (
    <Container>
      {favoriteSlice[logSlice.user]?.length ? (
        <FavoriteList
          data={{ data: favoriteSlice[logSlice.user], user: logSlice.user }}
        />
      ) : (
        <p style={{ color: "var(--green)" }}>
          Увы, вы ничего не добавили в избранное!
        </p>
      )}
    </Container>
  );
}
