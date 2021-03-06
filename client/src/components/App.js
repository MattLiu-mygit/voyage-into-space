import React from 'react';
import StartPage from './StartPage';
import Header from './common/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPAge from './NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Leaderboard from './Leaderboard';
import Phase1 from './Phase 1/Phase1';
import Phase2 from './Phase 2/Phase2';
import DeathScreen from './DeathScreen';
import Congrats from './Congrats';

function App() {
  return (
    <div
      style={{
        paddingBottom: '1rem',
      }}
    >
      <ToastContainer autoClose={4000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/blast-off" exact component={Phase1} />
        <Route path="/Leaderboard" exact component={Leaderboard} />
        <Route path="/en-route" exact component={Phase2} />
        <Route path="/oof" exact component={DeathScreen} />
        <Route path="/congrats" exact component={Congrats} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPAge} />
      </Switch>

      <Header />
    </div>
  );
}

export default App;
