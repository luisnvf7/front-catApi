import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { GuardProp } from '../interfaces/Props'

/* Guard que protege las rutas en caso de que el usuario no este logeado. */
const PrivateRoute: FC<GuardProp> = ({ path, exact, component }) => {
  return Cookies.get("token") ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
