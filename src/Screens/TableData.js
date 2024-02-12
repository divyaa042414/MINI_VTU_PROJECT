import React from "react";
import {Container,Table} from 'react-bootstrap';

const TableData =() =>{
    return(
        <Container>
            <Table className="my-5" responsive bordered>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Sl No </th>
                        <th colspan={2}  >Subject
                             <th style={{padding:"0px 7rem"}}>code</th>
                             <th style={{padding:" 0px 7rem"}}>subject</th>
                        </th>
                        <th colspan={3}>Examination Marks Obtained
                            <th style={{paddingLeft:"10rem"}}>Max</th>
                            <th style={{paddingLeft:"10rem"}}>Min</th>
                            <th style={{paddingLeft:"10rem"}}>Obtained</th>
                        </th>
                        <th style={{padding:" 0px 5rem"}}>Subject Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>101</td>
                        <td>JAVA</td>
                        <td>100</td>
                        <td>35</td>
                        <td>65</td>
                        <td>PASS</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>102</td>
                        <td>JAVA</td>
                        <td>100</td>
                        <td>35</td>
                        <td>65</td>
                        <td>PASS</td>                   
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>103</td>
                        <td>JAVA</td>
                        <td>100</td>
                        <td>35</td>
                        <td>65</td>
                        <td>PASS</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>104</td>
                        <td>JAVA</td>
                        <td>100</td>
                        <td>35</td>
                        <td>65</td>
                        <td>PASS</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan={3}>Grand Total</th>
                        <td>400</td>
                        <td>140</td>
                        <td>260</td>
                        <td>PASS</td>
                    </tr>
                </thead>
            </Table>
            <p><b>Total Marks Obtained [In Words]</b>:Two Hundred and Sixty Only</p>
            <p><b>Result of Semester</b>:PASS</p>
            <p><b>Percentage</b>:65%</p>
            <p><b>Date</b>:05 DEC 2024</p>
    
        </Container>
    )
}
export default TableData;