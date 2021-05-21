import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MatchAnalysis from './pages/match-analysis/index'
import PlayerAnalysis from './pages/player-analysis/index'

function App() {
return (
	<BrowserRouter >
		<div className="AppContainer">
			<Switch>
				<Route exact path="/" component={MatchAnalysis}/>
				<Route path="/player" component={PlayerAnalysis}/>
			</Switch>
		</div>
	</BrowserRouter>
);
}

export default App;
