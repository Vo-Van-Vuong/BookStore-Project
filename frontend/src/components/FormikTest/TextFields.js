import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default function TextFields(props) {

    const {
        field,
        form,
        type, label, placeholder, disabled
    } = props;

    const {name, value, onChange, onBlur} = field;

    return (
      <Form.Group controlId="formBasicEmail">
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
            name = {name}
            value = {value}
            onChange = {onChange}
            onBlur = {onBlur}
            type={type}
            
            placeholder = {placeholder}
         />
      </Form.Group>
    )
  
}
