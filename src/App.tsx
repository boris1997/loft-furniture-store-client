import { Route, Switch } from "react-router-dom";

import "./App.css";
import ProductPageContainer from "./templates/ProductPage/ProductPageContainer";
import CartContainer from "templates/Cart/CartContainer";
import Header from "./templates/Header/Header";
import ProductsContainer from "templates/Products/ProductsContainer/ProductsContainer";
import PopupContainer from "templates/Authentication/AuthenticationContainer/PopupContainer";
import Account from "templates/Account/AccountContainer";
import Logout from "templates/Authentication/AuthenticationContainer/Logout";
import Main from "templates/Main/Main";
import MobileMenu from "templates/MobileMenu/MobileMenu";
import Footer from "templates/Footer/Footer";
import AppData from "AppData/AppData";
import ErrorContainer from "templates/Error/ErrorContainer";
import Sidebar from "templates/Sidebar/Sidebar";
import { useHistory } from "react-router";
import wishList from "templates/WishList/WishList";

function App() {
  return (
    <div className="App">
      <div className="">
        <AppData />
        <Header />
        <PopupContainer />
        <Switch>
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/account" component={Account} />
          <Route path="/wishList" component={wishList} />
          <Route exact path="/cart" component={CartContainer} />
          <Route
            exact
            path="/:urlName/:name"
            component={ProductPageContainer}
          />
          <Route exact path="/:urlName" component={ProductsContainer} />
          <Route path="/" component={Main} />
          <Route component={ErrorContainer} />
          {/* <Route path={`${props.location.pathname}`} render={(props) => (<Products products={products} />)}  ></Route> */}
        </Switch>
        <MobileMenu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
// render = {(props) => { <Products component={Products} /> }}
