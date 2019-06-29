import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Beers.css';

class Beers extends React.Component {

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
            this.setState({ beers });
        })

    }


    render() {
        return (
                <div>
                    <div>
                    {this.state.beers.map(beer =>
                        <Card bg="info" text="white" style={{ width: '18rem'}}>
                            <Card.Img className="beer-img" src={beer.image_url} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                            </Card.Body>
                        </Card>)
                    }
                    </div>
                </div>
        )
    }
}

export default Beers;

