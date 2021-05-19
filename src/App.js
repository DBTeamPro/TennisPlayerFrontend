import './App.css';
import Navbar from "./components/navbar/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Analysis from './pages/analysis';
import Activity from './pages/activity';
import Delete from './pages/delete';
import Information from './pages/information';
import Insert from './pages/insert';
import Update from './pages/update';

function App() {
return (
	<BrowserRouter >
		<div className="AppContainer">
			<Switch>
				<Route exact path="/" component={Analysis}/>
				<Route path="/activity" component={Activity}/>
				<Route path="/delete" component={Delete}/>
				<Route path="/update" component={Update}/>
				<Route path="/information" component={Information}/>
				<Route path="/insert" component={Insert}/>
				<Route path="/update" component={Update}/>
			</Switch>
		</div>
	</BrowserRouter>
);
}

export default App;
