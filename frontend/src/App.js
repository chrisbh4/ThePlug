import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
// import { Modal } from './context/Modal';
// import { getAllShoes } from './store/shoes';
import HomePage from './components/HomePage/HomePage';
import NewShoesForm from './components/Shoes/NewShoesForm/NewShoesForm';
import ShoesDetailsPage from './components/Shoes/ShoeDetailsPage/ShoeDetailPage';
import EditShoesForm from './components/Shoes/EditShoePage/ShoeEditPage';
import NewReviewForm from './components/Reviews/NewReview/NewReviewForm';
import EditReviewForm from './components/Reviews/EditReview/EditReviewForm';
import AboutPage from './components/AboutPage/AboutPage';
import ShoppingCart from './components/Cart';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )} */}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}

          {/* <Route path='/signup'>
            <SignupFormPage />
          </Route> */}
          <Route exact path='/home'>
            <HomePage />
          </Route>

          <Route path='/shoes/new'>
            <NewShoesForm />
          </Route>

          <Route exact path='/shoes/:id'>
            <ShoesDetailsPage />
          </Route>

          <Route exact path ='/shoes/:id/edit'>
            <EditShoesForm />
          </Route>

          <Route exact path= "/shoes/:id/reviews/new">
              <NewReviewForm />
            </Route>

           <Route path = "/reviews/:id/edit">
              <EditReviewForm />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
              </Route>


            <Route path="/">
              {/* Rename to Splash Page */}
            <AboutPage />

            </Route>





          <Route>
          404 page not found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
