import { useDispatch } from "react-redux";

import * as errorHandlerActions from "../../modules/errorHandlers/actions";
import { Button } from "../../components/Button/Button";

import "./ErrorPopup.css";

export const ErrorPopup = ({ requests }) => {
  const dispatch = useDispatch();
  const repeatRequests = () =>
    dispatch(errorHandlerActions.repeatRequests(requests));
  return (
    <div className="errorPopup">
      <div className="errorPopup__text">Произошла ошибка!</div>
      <Button onClick={repeatRequests}>Повторить запрос</Button>
    </div>
  );
};
