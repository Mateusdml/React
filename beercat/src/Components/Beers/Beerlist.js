import React from 'react';
import axios from 'axios';

class Beerlist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }


    componentDidMount() {
        const url = "https://api.punkapi.com/v2/beers";

        axios.get(url).then((res) => {
            const beers = res.data;
            this.setState({beers});
        })
    }


    render() {
        return (
            <ul>
                {this.state.beers.map(beer => <li>{beer.name}</li>)}
            </ul>
        )
    }
}

export default Beerlist;


 



