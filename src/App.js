import React from "react";
import "./App.css";
const axios = require("axios");

class App extends React.Component{
    state = {advice : ""};
    componentDidMount(){
       this.fetchAdvice();
    }

    fetchAdvice = ()=>{
        const temp =  axios.get("https://api.adviceslip.com/advice");
        temp.then((response)=>{
            const {advice} = response.data.slip;
            this.setState({advice})
            console.log(advice);

        }).catch((error)=>{
            console.log(error);

        });
    }

    render(){

        const {advice} = this.state;

        return (
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                <button onClick={()=>{this.fetchAdvice()}} className="button">
                    <span> Give me advice !</span>
                </button>
                </div>
            </div>
        );
    }
}


export default App;