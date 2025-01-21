import { Button } from "antd";
import { useState } from "react";
import { TestApi } from "../Components/TestApi";
import { url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { decreasePage, increasePage, resetPage } from "../features/pageCounter";
import { Input } from "../Components";
import { resetResponse } from "../features/serverResponse";

export function MainPage() {
  const [currentURL, setCurrentURL] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [firstInput, setFirstInput] = useState({
    value: "",
    validation: false,
  });
  const [secondInput, setSecondInput] = useState({
    value: "",
    validation: false,
  });
  const pageSlice = useSelector((state) => state.page.page);
  const responseSlice = useSelector((state) => state.response.responses);
  const dispatch = useDispatch();

  function HandleClick() {
    if (
      firstInput.value !== "" &&
      firstInput.validation !== false &&
      secondInput.value !== "" &&
      secondInput.validation !== false
    ) {
      setCurrentURL(
        url.href + ` AND element_set=${firstInput.value},${secondInput.value}`
      );
      setErrorMessage(false);
      dispatch(resetPage());
      dispatch(resetResponse());
    } else {
      setErrorMessage(true);
    }
  }

  function ButtonDecreasedClick() {
    if (pageSlice === 1) {
      return;
    }
    dispatch(decreasePage());
  }

  function ButtonIncreasedClick() {
    let newUrl = responseSlice[pageSlice].links.next;
    if (newUrl === null) {
      return;
    }
    setCurrentURL(newUrl);
    dispatch(increasePage());
  }

  return (
    <div>
      <Input value={firstInput} changeValue={setFirstInput} /> +{" "}
      <Input value={secondInput} changeValue={setSecondInput} />
      <Button onClick={HandleClick}>Кликни</Button>
      {errorMessage ? <p>Введите данные корректно!</p> : null}
      <TestApi url={currentURL} />
      <div style={{ display: "flex" }}>
        <Button onClick={() => ButtonDecreasedClick()}>Уменьшить</Button>
        {pageSlice}
        <Button onClick={() => ButtonIncreasedClick()}>Увеличить</Button>
      </div>
    </div>
  );
}
