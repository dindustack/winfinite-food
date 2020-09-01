import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import recipeDetails from "./components/recipesDetails";
import AboutPage from "./components/aboutPage";
import RecipePage from "./components/recipePage";
import ContactPage from "./components/contactPage";
import { DataProvider } from "./components/productsContext";
import { InfoProvider } from "./components/recipesContext";
import StockistPage from "./components/stockistPage";
import ShoppingCartPage from "./components/shoppingCartpage";
import CheckOutPage from "./components/checkOutpage";

export default function App() {
  return (
    <DataProvider>
      <InfoProvider>
        <Router>
          {/* --------- Navbar ------- */}
          <Navigation />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/recipes" component={RecipePage} />
            <Route exact path="/stockist" component={StockistPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/cart" component={ShoppingCartPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route exact path="/:id" component={Details} />
            <Route exact path="/recipes/:id" component={recipeDetails} />
          </Switch>

          <Footer />
        </Router>
      </InfoProvider>
    </DataProvider>
  );
}


