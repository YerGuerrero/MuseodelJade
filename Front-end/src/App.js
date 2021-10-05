import {useEffect, useState} from "react";
import './App.css';
import NewsPage from './paginas/news';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

require('dotenv').config({path: '../.env'});
function App() {

  const [view, setView] = useState(2);
  const [meta, setMeta] = useState({ meta: 'aaa' });
  const host = 'localhost';
  const port = '5000';

  
  const fetchNews = () => {
    const requestOptions = {
      method: 'GET',
      header: { 'Content-Type': 'application/json'}
    };
    fetch('http://' + host + ':' + port + '/get_news')
      .then(response => response.json())
      .then(result => {
        setMeta({
          meta: result.map(item => ({
            id: item[0],
            title: item[1],
            descripcion: item[2],
            imagenURL: item[3],
          }))
        });
      });
  };

  return (
    <Router>   
      <div className="App">  
          <Switch>
              <Route exact path="/news">
                  <NewsPage fetchNew={fetchNews} meta={meta} />
              </Route>
              <Route exact path="/">
                <div className="App">
                  
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
