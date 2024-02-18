import React,{useState, useEffect} from "react";
import {Container,Table} from 'react-bootstrap';
import axios from "axios";
import {Link} from 'react-router-dom';
import {ToWords} from 'to-words';

const TableData =({studentId}) =>{

    const toWords = new ToWords();

const [resultDetails, setResultDetails] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001/studentInfo')
    .then((response) => {  
        console.log("res3", response.data)
        let temp=[]
        temp = response.data.filter((d) => d.registerId === studentId )
        setResultDetails(temp)  
})
    .catch((error) => console.log("err", error))
},[studentId])

    const getTotalMarks = (value) => {
        let sum=0
        resultDetails.map((d) => {
            sum += parseInt(d[value])
        })
        return sum

    }

    const scoreHandler = () => {
        let count=0;
        resultDetails.map((d) => {
            if(d.result === 'FAIL'){
                count++
            }
        })
        if(count >= 1){
            return 'FAIL'
        }else{
            return 'PASS'
        }
    }

    const finalResult = () => {
        let sum=0;let count=1,status
        resultDetails.map((d) =>{
            sum += Number(d.obtained_marks)
            if(count >=1 && d.result ==='FAIL'){
                status ='FAIL'
            }else if(sum >=260){
                status ='DISTINCTION'
            }else if(sum < 260 && sum >= 220){
                status = 'FIRST CLASS'
            }else{
                status ='SECOND CLASS'
            }
            }
        )
        return status
    }
    
    const findPercentage = () =>{
        let obtained = getTotalMarks('obtained_marks')
        let max = getTotalMarks('max_marks')
        let x ='%',
        percent = Math.floor((obtained/max)*100)
        return [percent,x]
    }

    const totalMarksInWords =() =>{
        let a = getTotalMarks('obtained_marks')
        let text = toWords.convert(a);
        return text
    }

    return(
        <Container>
            <Table className="my-5" responsive bordered>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Sl No </th>
                        <th colspan={2} style={{padding:"0.8rem 0rem"}} >Subject
                             <th style={{padding:"0px 4.8rem"}}>code</th>
                             <th style={{padding:" 0px 8rem"}}>subject</th>
                        </th>
                        <th  colspan={3}>Examination Marks Obtained
                            <th style={{paddingLeft:"9rem"}}>Max</th>
                            <th style={{paddingLeft:"10rem"}}>Min</th>
                            <th style={{paddingLeft:"7rem"}}>Obtained</th>
                        </th>
                        <th style={{padding:" 0px 4rem"}}>Subject Result</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    resultDetails.map((data,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                    ))
                   }
                </tbody>
                <thead>
                    <tr>
                        <th colspan={3}>Grand Total</th>
                        <td>{getTotalMarks('max_marks')}</td>
                        <td>{getTotalMarks('min_marks')}</td>
                        <td>{getTotalMarks('obtained_marks')}</td>
                        <td>PASS</td>
                    </tr>
                </thead>
            </Table>
            <p><b>Total Marks Obtained [In Words]</b>:{totalMarksInWords()}</p>
            <p><b>Result of Semester</b>:{finalResult()}</p>
            <p><b>Percentage</b>:{findPercentage()}</p>
            <p><b>Date</b>:04 DEC 2024</p><br/>

            <Link to ='/results/loginPage' className="btn btn-secondary" 
        style={{margin:'1.5rem 0rem'}}>
        Go Back</Link>


    
        </Container>
    )
}
export default TableData;