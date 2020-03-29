import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';
export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div >
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{' '}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open} >
          <div >
            <Well style={{background: "#435c8f",color: "#fff"}}>
              <Media >
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    src="https://i.ebayimg.com/images/g/ksIAAOSwsyNegBlx/s-l1600.jpg"
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body >
                  <p>
                  Used: Apple iPhone 8 Plus - 64GB - Silver Unlocked AT&T T-Mobile Verizon
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${
                        this.props.price
                      }`}</strong>
                    </Col>
                    <Col md={6}>
                      <strong>Qty: 1</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
