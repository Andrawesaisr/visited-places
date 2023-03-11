import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormComp(props) {

 let [newData,setData]=useState({
    placeName:'',
    mapLink:'',
    imgLink:'',
    dsc:''
 })
function changeText(event){
    event.preventDefault();
    const {name,value}=event.target;
    setData((d)=>{
        return{
            ...d,
            [name]:value
        }
    })
}

function finish(event){
    event.preventDefault();
 
  props.sendData(newData)
  setData({
    placeName:'',
  mapLink:'',
  imgLink:'',
  dsc:''})
}
  return (
    <div className='form-container'>
        <Form className="border rounded mt-4 mb-4" onSubmit={finish}>
            <Row className="mb-2 w-100">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>name</Form.Label>
          <Form.Control
            name="placeName"
            type="text"
            placeholder="place's name"
            value={newData.placeName}
            onChange={changeText}
            
            />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>maps link</Form.Label>
          <Form.Control
            name="mapLink"
            type="text"
            placeholder="the link of the place"
            value={newData.mapLink}
            onChange={changeText}
            />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>image link from google</Form.Label>
          <Form.Control
            name="imgLink"
            type="text"
            placeholder="image's link"
            value={newData.imgLink}
            onChange={changeText}
            />
        </Form.Group>
            </Row>
            <Row className='mb-2 w-100'>
            <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Form.Label>description</Form.Label>
          <Form.Control
            name="dsc"
            as="textarea"
            placeholder="add points about the most interesting things to do there"
            rows={4}
            value={newData.dsc}
            onChange={changeText}
            />
        </Form.Group>
            </Row>
        <Button className='mb-2' type="submit" >Submit form</Button>

        </Form>
    </div>
  )
}

export default FormComp