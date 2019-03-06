import React, { Component } from 'react';
import {Num} from './components/index';
import './App.css';

function random_num(){
    let numbers = [];   
    for (let i=0; i<5; i++) {
        let random_number = Math.floor(Math.random()*(36-5+1)+5);
        if (numbers.indexOf(random_number) === -1) {
            numbers.push(random_number);
        }
        else {
            i-=1;
            continue;
        }
    }

    numbers.sort(function(a,b){ 
        return a-b;
    });
    console.log(numbers);
    return (numbers);
};

class App extends Component {

    state = {
        numbers: random_num()
    };

    change_num = () => {
        this.setState({
            numbers: random_num()
        })
    }
    
    render() {
        return (
        <div className='App'>
            <Num 
                num_1={this.state.numbers[0]} 
                num_2={this.state.numbers[1]} 
                num_3={this.state.numbers[2]} 
                num_4={this.state.numbers[3]} 
                num_5={this.state.numbers[4]} />
                <div><button onClick={this.change_num}>Change numbers</button></div>
        </div>
        );
   }
}

export default App;
