import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    console.log('CDM running');
    axios
      .get("https://api.github.com/users/Bmmaroni")
      .then(res => {
        this.setState({ user: res.data});
        console.log(this.state.user);
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/Bmmaroni/followers")
      .then(res => {
        this.setState({ followers: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='app-div'>
        <UserCard user={this.state.user} />
        <FollowerCard key={this.state.followers.id} followers={this.state.followers} />
      </div>
    ); 
  }
}

export default App;