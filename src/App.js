import React, { Component } from 'react';
import {Num} from './components/index';
import './App.css';

class App extends Component {
    constructor() {
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
        super();

        this.state = {random_numbers: numbers};

    }

    
    render() {
        return (
        <div className='App'>
            <Num 
                num_1={this.state.random_numbers[0]} 
                num_2={this.state.random_numbers[1]} 
                num_3={this.state.random_numbers[2]} 
                num_4={this.state.random_numbers[3]} 
                num_5={this.state.random_numbers[4]} />
        </div>
        );
   }
}

export default App;
