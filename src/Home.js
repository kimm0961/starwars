import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        people: []
    }

    componentDidMount(){
        axios.get("https://swapi.co/api/people/")
        .then(res => {
            console.log(res)
            this.setState({
                people: res.data.results.slice(0,5)
            })
        })
    }
   render() {
       const {people} = this.state;
       const peopleList = people.length ? (
           people.map(p => {
               return (
                   <div className="post card" key={p.name}>
                        <div className="card-content">
                            <span className="card-title">Name: {p.name}</span>
                            <p>Gender: {p.gender}</p>
                            <p>Height: {p.height}</p>
                        </div>
                   </div>
               )
           })
       ) : (
           <div className="center">No people yet</div>
       )
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {peopleList}
        </div>
    )
   }
}

export default Home;