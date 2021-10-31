import './App.css';
import NewsPage from './pages/news';
import ToursPage from './pages/tours';
import ServicesPage from './pages/services'
import PageContainer from "./components/pageContainer";
import ExhibitionsPage from './pages/exhibitions';
import ExhibitionPage from './pages/exhibition';
import AllExhibitionPage from './pages/allExhibition';
import EventsPage from './pages/events';
import ArtWorkPage from './pages/artWork';
import TourPage from './pages/tour';
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
                    <h1>Pagina principal</h1>
                  </div>
                </PageContainer>
              </Route>
              <Route exact path="/tours">
                <PageContainer>
                  <ToursPage/>
                </PageContainer>
              </Route>
              <Route exact path="/services">
                <PageContainer>
                  <ServicesPage/>
                </PageContainer>
              </Route>
              <Route exact path="/exhibitions">
                <PageContainer>
                  <ExhibitionsPage/>
                </PageContainer>
              </Route>
              <Route exact path="/all_exhibition">
                <PageContainer>
                  <AllExhibitionPage/>
                </PageContainer>
              </Route>
              <Route exact path="/exhibition">
                <PageContainer>
                  <ExhibitionPage/>
                </PageContainer>
              </Route>
              <Route exact path="/art_Work">
                <PageContainer>
                  <ArtWorkPage/>
                </PageContainer>
              </Route>
              <Route exact path="/events">
                <PageContainer>
                  <EventsPage/>
                </PageContainer>
              </Route>
              <Route exact path="/tours">
                <PageContainer>
                  <ToursPage/>
                </PageContainer>
              </Route>
              <Route exact path="/tour">
                <PageContainer>
                  <TourPage/>
                </PageContainer>
              </Route>
          </Switch>
      </div>
    </Router>
   
  );
}

export default App;
