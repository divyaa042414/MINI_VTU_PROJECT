import React from "react";
import {Link} from 'react-router-dom';
import {Row,Col,Form,Button} from 'react-bootstrap';

const ResultLoginPage = () => {
    return(

        <>
        <Link to ='/' className="btn btn-dark" 
        style={{marginTop:'1rem'}}>
        Go Back</Link>
        
        <Row className="text-center">
            <Col>
                <h3>Check Your Results here...</h3>
            </Col>
        </Row><br/>
        <Row>
            <Col >
            </Col>
            <Col style={{ marginLeft:"-20rem"}}>
                <Form>
                    <Form.Label>Enter Your Register Number:</Form.Label><br/>
                    <Form.Control type="text" style={{width:"60%"}} placeholder="Enter Your Register Number..."></Form.Control>
                    <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
                </Form>
            </Col>
        </Row>
        </>
    );
}
export default ResultLoginPage;