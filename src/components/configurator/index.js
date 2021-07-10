import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import AppContext from '../../context/app/context';
import RangeSlider from 'react-bootstrap-range-slider';
import axios from "axios";
import { LOAD_CALCULATOR } from "../../context/app/reducer";
import Calculator from '../calculator'

const Configurator = () => {

  const { appState, appDispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        let resp = await axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json");
        appDispatch({ type: LOAD_CALCULATOR, payload: resp.data.calculator })
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  return (

    <Container>
      <Row>
        <Col xs="6">
          <div className="Rectangle">
            <div className="Text-Big">{appState.calculatorTitle}
            </div>
          </div>
          <div className="Rectangle-2">
            <div className="Text-Big2">
            </div>
          </div>
          <br />
          <p className="Text-rectangle2">{appState.calculatorDescription}</p>
        </Col>
        <Calculator></Calculator>
      </Row>
    </Container>
  );
}

export default Configurator;