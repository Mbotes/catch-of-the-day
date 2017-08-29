import React from 'react';

import Header from './Header';
import Fish from './Fish';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);

        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish) {
        //update state
        //create copy of original state fishes

        const fishes = {...this.state.fishes};

        //add in new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state

        this.setState({ fishes });
    }

    loadSamples() {
        console.log(this);
        this.setState({ fishes: sampleFishes })
    }

    addToOrder(key) {
        //take a copy of the state
        const  order = {...this.state.order};
        //update or add the new number of fish ordered
        order[key] = order[key] + 1 || 1;
        //update state
        this.setState({ order });
    }

    render () {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;