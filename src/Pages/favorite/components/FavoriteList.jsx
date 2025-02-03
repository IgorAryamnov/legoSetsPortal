import { useSelector } from "react-redux";
import { FavoriteProductSearch } from "./FavoriteProductSearch";
import { Paginator } from "../../../Components/Paginator";
import { useDispatch } from "react-redux";
import {
  decreaseFavoritePage,
  increaseFavoritePage,
} from "../../../features/favoritePageCounter";
import PropTypes from "prop-types";

export function FavoriteList({ data }) {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.favoritePage.favoritePage);

  let currentArray = data.data.slice(5 * (page - 1), 5 * page);

  function leftClick() {
    if (page > 1) {
      dispatch(decreaseFavoritePage());
    }
  }
  function rightClick() {
    if (data.data.length / 5 > page) {
      dispatch(increaseFavoritePage());
    }
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        {currentArray.map((value) => {
          return (
            <FavoriteProductSearch key={value} id={value} user={data.user} />
          );
        })}
      </div>
      <div>
        <Paginator
          counter={page}
          leftCircleFunction={leftClick}
          rightCircleFunction={rightClick}
        />
      </div>
    </>
  );
}

FavoriteList.propTypes = {
  data: PropTypes.object,
};
