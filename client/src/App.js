import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Route exact path="/" component={Home} />
          <Route exact path="/matchup" component={Matchup} />
          <Route exact path="/matchup/:id" component={Vote} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
