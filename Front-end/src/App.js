import './App.css';
import NewsPage from './pages/news';
import PageContainer from "./components/pageContainer";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

require('dotenv').config({path: '../.env'});

function App() {

  
  return (
    <Router>   
      <div className="App">  
          <Switch>
              <Route exact path="/news">
                <PageContainer>
                  <NewsPage/>
                </PageContainer>
              </Route>
              <Route exact path="/">
                <PageContainer>
                  <div className="App">
                  </div>
                </PageContainer>
              </Route>
              <Route exact path="/tours">
                <PageContainer>
                  <TourPage/>
                </PageContainer>
              </Route>
              <Route exact path="/services">
                <PageContainer>
                  <ServicesPage/>
                </PageContainer>
              </Route>
          </Switch>
      </div>
    </Router>
   
  );
}

export default App;
