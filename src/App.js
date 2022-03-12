import Prenavbar from './components/Prenavbar';
import "./App.css"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import data from "./data/data.json";
import Headingline from './components/Heading_line';
import Starproduct from './components/Starproduct'
import HotAccesMenu from './components/HotAccesMenu.js';
import HotAccesories from './components/HotAccesories.js';
import NavRoute from './components/NavRoute.js';
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Inthepress from "./components/Inthepress.js";

import Fotter from "./components/Fotter.js";

function App() {


  return (
    <Router>

      <Prenavbar />
      <Navbar />

      <NavRoute home={data.home} audio={data.audio} redmi={data.redmiPhones} miphones={data.miPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Headingline text="STAR PRODUCTS" />
      <Starproduct starp={data.starProduct} />
      <Headingline text="HOT ACCESSORIES" />
      <HotAccesMenu />

      <Route exact path="/music">
        <HotAccesories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route>

      <Route exact path="/home">
        <HotAccesories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
      </Route>

      <Route exact path="/smartDevice">
        <HotAccesories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
      </Route>

      <Route exact path="/lifestyle">
        <HotAccesories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />
      </Route>

      <Route exact path="/mobileaccesories">
        <HotAccesories mobileaccesories={data.hotAccessories.mobileAccessories} mobileaccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
      </Route>

      <Headingline text="PRODUCT REVIEW" />

      <ProductReviews productReviews={data.productReviews} />

      <Headingline text="VIDEOS" />

      <Videos videos={data.videos} />

      <Headingline text="IN THE PRESS" />

      <Inthepress end={data.banner.end} />

      <Fotter footer={data.footer} />
    </Router>
  );
}

export default App;


// </> component ko import karna pdta hai or const fun ko javascript se call karna hota hai {}