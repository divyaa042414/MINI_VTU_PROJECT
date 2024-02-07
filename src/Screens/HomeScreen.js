import React from "react";
import {Carousel,Row,Col,Button} from 'react-bootstrap';

const HomeScreen = () => {

    return(
      <>
       <div>
        <marquee>
            VTU Results 2024 out - Check Exam Results Here!!!
            <a href="#"> Click Here... </a>Best of Luck
        </marquee>
       </div>
       <div>
            <Carousel>
                <Carousel.Item>
                    <img height='550px'
                    className="d-block w-100"
                    src="Images/img1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height='550px'
                    className="d-block w-100"
                    src="Images/img2.jpg"
                    alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img height='550px'
                    className="d-block w-100"
                    src="Images/img3.jpg"
                    alt="Third slide"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height='550px'
                    className="d-block w-100"
                    src="Images/img4.jpg"
                    alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img height='550px'
                    className="d-block w-100"
                    src="Images/img5.jpg"
                    alt="Third slide"/>
                  </Carousel.Item>
            </Carousel><br/>

            <div>
                <Row>
                    <Col md={4} sm={12}>
                    <h3><a href="#">Vision</a></h3>
                    <p className="p-style">To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
                    <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <Button variant="warning">Read More</Button>
                    </Col>

                    <Col md={4} sm={12}>
                    <h3><a href="#">Mission</a></h3>
                    <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <Button variant="warning">Read More</Button>
                    </Col>

                    <Col md={4} sm={12}>
                    <h3><a href="#">Mandate</a></h3>
                    <p className="p-style">The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.</p>
                    <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <Button variant="warning">Read More</Button>
                    </Col>
                </Row>
            </div>
        
       </div>
      </>
    )
}
export default HomeScreen;