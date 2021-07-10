import React, { useContext, useState, useEffect } from "react";
import Carousel, { Slider } from "./carousel";
import { NextButton, PrevButton, Counter } from "./carouselElements";
import { Row, Col, Container } from 'react-bootstrap';
import AppContext from '../../context/app/context';
import axios from "axios";
import { LOAD_SLIDER } from "../../context/app/reducer";

const Carrousel = () => {

    const { appState, appDispatch } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            try {
                let resp = await axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json");
                appDispatch({type:LOAD_SLIDER, payload: resp.data.slider})
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <Carousel>
            <Slider>
                {
                    appState.sliderReviews.map((slider,index)=>{
                        return (
                        <div key={index+"slider"} id={index+"slider"}>
                            <div className="Slider-Rectangle">
                                <Row>
                                    <Col xs="4">
                                        <p className="Slider-name-text">{slider.name}</p>
                                        <p className="Slider-position-text">{slider.position}</p>
                                    </Col>
                                    <Col xs="8">
                                        <p className="Slider-comment-text">{slider.comment}</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>)
                    })
                }
            </Slider>
            <Container>
                <Row>
                    <Col xs="8"></Col>
                    <Col xs="4">
                        <Row>
                            <Col className="Counter-Class"><Counter /></Col>
                            <Col className="Left-Class"><PrevButton><div class="arrow-left"></div></PrevButton></Col>
                            <Col className="Rigth-Class"><NextButton><div class="arrow-right"></div></NextButton></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </Carousel>
    );
}

export default Carrousel;