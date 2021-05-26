import { Provider } from "react-redux";
import store from "./redux/store";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";
import SearchMap from "./pages/SearchMap";
import AdDetails from "./pages/AdDetails";
import MenuProfile from "./pages/MenuProfile";
import EmplacementMap from "./components/EmplacementMap";
import Categories1 from "./pages/Categories1";
import Categories2 from "./pages/Categories2";
import Categories3 from "./pages/Categories3";
import Message from "./pages/Message";
import FavorisPage from "./pages/FavorisPage";
import NotificationsPage from "./pages/NotificationsPage";
import MesAnnoncesPage from "./pages/MesAnnoncesPage";
import MaBoutique from "./pages/MaBoutique";
import MobileSingleMessage from "./components/MobileSingleMessage";
import PosterArticlesPage from "./pages/PosterArticlesPage";
import PosterArticlesPage2 from "./pages/PosterArticlesPage2";
import SearchPrice from "./pages/SearchPrice";
import SearchProductView from "./pages/SearchProductView";

function App() {
	return (
		<Provider store={store}>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/searchList" component={SearchList} />
				<Route exact path="/searchMap" component={SearchMap} />
				<Route exact path="/adDetails" component={AdDetails} />
				<Route exact path="/profile" component={MenuProfile} />
				<Route exact path="/message" component={Message} />
				<Route exact path="/favoris" component={FavorisPage} />
				<Route exact path="/notifications" component={NotificationsPage} />
				<Route exact path="/mesAnnonces" component={MesAnnoncesPage} />
				<Route exact path="/maBoutique" component={MaBoutique} />
				<Route exact path="/singleMessage" component={MobileSingleMessage} />
				<Route exact path="/articles" component={PosterArticlesPage} />
				<Route exact path="/articles2" component={PosterArticlesPage2} />
				<Route exact path="/searchPrice" component={SearchPrice} />
				<Route exact path="/searchProductView" component={SearchProductView} />
				{/* ONLY MOBILE ROUTES START */}
				<Route exact path="/emplacement" component={EmplacementMap} />
				<Route exact path="/categories1" component={Categories1} />
				<Route exact path="/categories2" component={Categories2} />
				<Route exact path="/categories3" component={Categories3} />
				{/* ONLY MOBILE ROUTES END */}
			</Switch>
		</Provider>
	);
}

export default App;
