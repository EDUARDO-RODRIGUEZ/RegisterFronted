import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Steps from 'rc-steps';
import '../../assets/rc-steps/index.css';
import '../../assets/rc-steps/icon.css';

import RenderStep from './RenderStep';

const RegisterPage = () => {

  const [step, setstep] = useState<number>(0);
  const [code, setcode] = useState<string>('');

  return (
    <Container className={'p-4'}>
      <Row>
        <Col md={5} className={'mx-auto'}>
          <Card>
            <Card.Header>
              <Steps labelPlacement="vertical" current={step}>
                <Steps.Step stepIndex={0} title="registro" />
                <Steps.Step stepIndex={1} title="verificacion" />
              </Steps>
            </Card.Header>
            <Card.Body>
              <RenderStep step={step} setstep={setstep} code={code} setcode={setcode} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage