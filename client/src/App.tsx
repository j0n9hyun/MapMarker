import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomeLayout from './components/Home/HomeLayout';
import LoadingPage from './components/Loading/LoadingPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <Route path='/' exact component={HomeLayout} />
            </Switch>
          </Suspense>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
