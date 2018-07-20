import React, { Component } from 'react';
import Wrapper from "./components/Wrapper"
import friends from "./friends.json";
import FriendCard from "./components/FriendsCard";
import Navbar from "./components/Navbar";


class App extends Component {
  state = {
    friends,
    score: 0,
    clickedArray: []
  };

  // getId = (id) =>{
  //   console.log(id)
  //   this.setState({})
  // }

  friendShuffle(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  scoreCount = (id) => {
    console.log("ID : ",id)

    this.setState({score: this.state.score + 1})
    console.log("SCORE: ", this.state.score)
    
     

  }

  


  render() {
    var mixedFriends = this.friendShuffle(this.state.friends)
    return (
      <div>
      <Navbar 
      score={this.state.score}
      />
      <Wrapper>
        {mixedFriends.map(friend =>(
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={false}
            getId={this.getId}
            scoreCount={this.scoreCount}

          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
