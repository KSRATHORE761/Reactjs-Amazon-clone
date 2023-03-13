import  React, {useEffect}  from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Checkout from "./component/checkout/Checkout";
import Login from "./component/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './component/payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./component/orders/Orders";

const promise = loadStripe("pk_test_51MkWNwSHpDwxdEfD12X3bLmY8tqulwsLf4pB3zsqKk5N2wcdogqb9f92wEmipYWyn5nxe8u4sAmkeoMoajJzAzO700Z1AYPTwF");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
       {/* Header */}
       
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                {/* Home */}
                <Header></Header>
                <Home></Home>
              </React.Fragment>
            }
          />
          <Route
          path="/login"
          element={
            <React.Fragment>
             <Login></Login>
            </React.Fragment>
          }
          />
          <Route
          path="/checkout"
          element={
            <React.Fragment>
              <Header></Header>
              <Checkout></Checkout>
            </React.Fragment>
          }
          />
          <Route
          path="/payment"
          element={
            <React.Fragment>
              <Header></Header>
              <Elements stripe={promise}>
              <Payment></Payment>
              </Elements>
            </React.Fragment>
          }
          />
          <Route
          path="/orders"
          element={
            <React.Fragment>
              <Header></Header>
              <Orders></Orders>
            </React.Fragment>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
