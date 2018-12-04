import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [{
        name: 'Rover',
        image: 'http://petmd.com/sites/default/files/pekingese-dog.jpg',
        subtitle: 'a little info',
        description: 'A little more info'
      }, {
        name: 'Sam',
        image: 'https://www.gannett-cdn.com/-mm-/d8427785073ef3bf0463f168465a2564fdd37ce8/c=160-0-1440-1280/local/-/media/USATODAY/USATODAY/2013/11/24//1385325676002-GAN-TALKING-DOG-112413-3.jpg?width=200&height=200&fit=crop',
        subtitle: 'a little info',
        description: 'A little more info'
      }, {
        name: 'Judy',
        image: 'https://www.gannett-cdn.com/-mm-/f5e7476e511e59f9d0afe1c95bb1814272fbd5ca/c=0-80-480-560/local/-/media/2018/01/15/Phoenix/Phoenix/636516421787547649-maxthedog2.jpg?width=200&height=200&fit=crop',
        subtitle: 'a little info',
        description: 'A little more info'
      }, {
        name: 'lil Bob and Bub',
        image: 'http://www.yourcourteouscanine.com/courteous-canine/img/200/200-small-dogs-5.png',
        subtitle: 'a little info',
        description: 'A little more info'
      }]
    };
  }

  render() {
    return (
      <div className="container">
        <Row>
          {this.state.animals.map(function(animal, i) {
              return <Col className="token-card" sm="3" key={ i }>
                  <Card>
                    <CardImg top src={animal.image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{animal.name}</CardTitle>
                      <CardSubtitle>{animal.subtitle}</CardSubtitle>
                      <CardText>{animal.description}</CardText>
                      <Button className="card-donate-button">Donate</Button>
                    </CardBody>
                  </Card>
                </Col>
          })}
        </Row>
      </div>
    );
  }
}

export default App;
