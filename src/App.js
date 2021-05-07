import { Provider } from "react-redux";
import store from "./redux/store";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";

function App() {
	return (
		<Provider store={store}>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Provider>
	);
}

export default App;
