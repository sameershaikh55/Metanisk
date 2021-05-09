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

function App() {
	return (
		<Provider store={store}>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/searchList" component={SearchList} />
			</Switch>
		</Provider>
	);
}

export default App;
