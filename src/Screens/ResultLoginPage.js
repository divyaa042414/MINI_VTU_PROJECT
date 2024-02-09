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
                    <label>Enter Your Register Number:</label><br/>
                    <input type="text" style={{width:"60%"}} placeholder="Enter Your Register Number...        "></input><br/>
                    <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
                </Form>
            </Col>
        </Row>
        </>
    );
}
export default ResultLoginPage;