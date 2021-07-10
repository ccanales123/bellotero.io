import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Container, Form, InputGroup, FormControl } from 'react-bootstrap';
import AppContext from '../../context/app/context';
import Carousel from '../carousel/';


const Testimonial = () => {

    const { appState, appDispatch } = useContext(AppContext);
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <div className="Rectangle-3">
                        <div className="Text-Big3">{appState.sliderTitle}
                        </div>
                    </div>
                </Col>
                <br/>
                <br/>
                <Col xs="12">
                    <Carousel></Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Testimonial;