import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MatchAnalysis from './pages/match-analysis/index'
import PlayerAnalysis from './pages/player-analysis/index'
import SearchService from './pages/search-service/index'
import SmallMatch from './pages/small-match/index'
import About from './pages/about/index'

function App() {
return (
	<BrowserRouter >
		<div className="AppContainer">
			<Switch>
				<Route exact path="/match" component={MatchAnalysis}/>
				<Route path="/player" component={PlayerAnalysis}/>
				<Route path="/search" component={SearchService}/>
				<Route path="/small-match" component={SmallMatch}/>
				<Route path="/" component={About}/>
			</Switch>
		</div>
	</BrowserRouter>
);
}

export default App;
