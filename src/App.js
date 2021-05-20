import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './pages/landing/index'
import FirstPlace from './pages/match-analysis/first_place'
import Seed from './pages/match-analysis/seed'
import Point from './pages/match-analysis/point'
import Underdog from './pages/match-analysis/underdog'
import RankDiff from './pages/match-analysis/rank_diff'

function App() {
return (
	<BrowserRouter >
		<div className="AppContainer">
			<Switch>
				<Route exact path="/" component={Landing}/>
				<Route path="/match/first-place" component={FirstPlace}/>
				<Route path="/match/seed" component={Seed}/>
				<Route path="/match/point" component={Point}/>
				<Route path="/match/underdog" component={Underdog}/>
				<Route path="/match/rank-diff" component={RankDiff}/>
			</Switch>
		</div>
	</BrowserRouter>
);
}

export default App;
