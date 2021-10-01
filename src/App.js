import './App.css';
import NewsPage from './paginas/news.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>   
      <div className="App">  
          <Switch>
              <Route exact path="/news">
                  <NewsPage />
              </Route>
              <Route exact path="/">
                <div className="App">
                  <header className="App-header">
                  </header>
                </div>
              </Route>
          </Switch>
      </div>
      {/*<div className="App">
        <header className="App-header">
        
            <NewsPage/>
        
          
        
        </header>
      </div>*/}
    </Router>
   
  );
}

export default App;
