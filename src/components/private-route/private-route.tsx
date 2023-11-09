import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute ({authorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return (
    AuthorizationStatus.Auth === authorizationStatus ?
      children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
