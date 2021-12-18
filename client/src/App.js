import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Route exact path="/" component={Home} />
          <Route exact path="/matchup" component={Matchup} />
          <Route exact path="/matchup/:id" component={Vote} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
