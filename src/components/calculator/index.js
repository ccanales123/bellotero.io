import React, { useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

const Calculator = () => {

  const [Montlyvalue, setMontlyvalue] = useState(10);
  const [FulltimeValue, setFulltimeValue] = useState(1);
  const [EstimatedFoodCoast, setEstimatedFoodCoast] = useState(3);
  const [EstimatedAnual, setEstimatedAnual] = useState(1347);

  const handleMonthlyChange = (e) => {
    setEstimatedFoodCoast(e.target.value * 0.3);
    setEstimatedAnual((FulltimeValue * 1337) + Number(Montlyvalue));
  }

  const handleFullTimeChange = (e) => {
    setEstimatedFoodCoast((Montlyvalue * 0.3));
    setEstimatedAnual((e.target.value * 1337) + Number(Montlyvalue));
  }


  return (
    <Col xs="6">
      <Row>
        <Col sm="8">
          <p className="Monthly-ingredient-s">Monthly</p>
          <p className="Monthly-ingredient">ingredient spending</p>
        </Col>
        <Col sm="4">
          <Form.Control value={Montlyvalue} size='lg' onChange={handleMonthlyChange} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <RangeSlider
            value={Montlyvalue}
            onChange={changeEvent => setMontlyvalue(changeEvent.target.value)}
            onAfterChange={handleMonthlyChange}
            size='lg'
            min={10}
            max={100}
            tooltip={'off'}
            step={0.01}
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm="9">
          <p className="Full-time-employees">Full-time employees that</p>
          <p className="Monthly-ingredient">process invoices</p>
        </Col>
        <Col sm="3">
          <Form.Control value={FulltimeValue} size='md' />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <RangeSlider
            value={FulltimeValue}
            onChange={changeEvent => setFulltimeValue(changeEvent.target.value)}
            onAfterChange={handleFullTimeChange}
            size='lg'
            min={1}
            max={10}
            tooltip={'off'}
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm="6">
          <p className="Numbers-big"><b className="Money">$</b>{EstimatedFoodCoast.toFixed(2)}</p>
          <p className="Estimated-cost-food">Estimated cost food savings</p>
        </Col>
        <Col sm="6">
          <p className="Numbers-big"><b className="Money">$</b>{EstimatedAnual.toFixed(2)}</p>
          <p className="Your-estimated-annual">Your estimated annual savings</p>
        </Col>
      </Row>
    </Col>
  );
}

export default Calculator;