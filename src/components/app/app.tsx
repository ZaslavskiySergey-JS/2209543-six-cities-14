import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPages from '../../Pages/main-page/main-page';
import LoginPage from '../../Pages/login-page/login-page';
import FavoritesPage from '../../Pages/favorites-page/favorites-page';
import OfferPage from '../../Pages/offer-page/offer-page';
import ErrorMessage from '../error-message/error-message';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus, TitleDescription} from '../../const';
import type {Offers} from '../../mock/offers/offer-mocks';

type AppOfferProps = {
  CountOffers: number;
  OfferProps: Offers;
}


function App({CountOffers: countOffers, OfferProps: offers}: AppOfferProps,): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element ={<MainPages CountOffers = {countOffers} Title = {TitleDescription.MainPage} Offers = {offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element ={<LoginPage Title = {TitleDescription.LoginPage}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element ={
            <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
              <FavoritesPage Title={TitleDescription.FavoritePage}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element ={<OfferPage Title = {TitleDescription.OfferPage}/>}
        />
        <Route
          path={AppRoute.Error}
          element ={<ErrorMessage Title = {TitleDescription.ErrorPage}/>}
        />
        <Route
          path="*"
          element={<ErrorMessage Title = {TitleDescription.ErrorPage}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
