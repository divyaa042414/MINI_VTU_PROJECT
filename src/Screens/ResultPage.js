import React from 'react';
import {Row,Col, FormGroup,Form} from 'react-bootstrap';
import TableData from './TableData';

const ResultPage = () =>{
    return(
        <>
            <Row className='justify-content-center my-3'>
                <Col sm={12} md={6}>
                    <h4>  Visvesvaraya Technological University,Belagavi </h4>
                    <h6 style={{marginLeft:'4rem',fontSize:"15px"}}>
                        VII - Semester B.E Examination Result, Nov/Dec-2024
                    </h6>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col sm={12} md={6}>
                    <FormGroup>
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Label style={{marginLeft:"4.5rem"}}>Divya S</Form.Label><br/>
                        <Form.Label>Father's/Mother's Name:</Form.Label>
                        <Form.Label style={{marginLeft:"0.5rem"}}>Subramani</Form.Label><br/>
                        <Form.Label>College Name:</Form.Label>
                        <Form.Label style={{marginLeft:"4.5rem"}}>Brindavan College of engineering </Form.Label>
                    </FormGroup>
                </Col>

                <Col sm={12} md={6} style={{float:"right"}}>
                    <FormGroup>
                        <Form.Label  style={{float:"right"}}>Register No: 1BO19CV005</Form.Label>
                    </FormGroup>
                </Col>
            </Row>
            <TableData/>
        </>
    )
}
export default ResultPage;