import React, { Component } from "react";
import { Formik, Form, FastField } from "formik";
import TextFields from "./TextFields";
import { Button } from "react-bootstrap";
import FormikApi from "../../API/FormikApi";
import FormB from "react-bootstrap/Form";
export default class MyForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          file: null,
        }}
        onSubmit={(values) => {
          alert(values.file.name);

          const formData = new FormData();
          formData.append("name",values.name);
          formData.append("email",values.email);
          formData.append("image", values.file);
          console.log();
          const data = {
            name: values.name,
            email: values.email,
            image: formData,
          };
          
          FormikApi.saveFormik(formData)
        }}
      >
        {(formik) => (
          <Form>
            <h1 style={{ color: "black" }}>Test Formik</h1>
            <FastField
              name="name"
              component={TextFields}
              label="Name: "
              placeholder="Enter your name"
            />
            <FastField
              name="email"
              component={TextFields}
              label="Email: "
              placeholder="Enter your email"
            />
            <FormB.Group controlId="formBasicEmail">
              <FormB.Label>Image: </FormB.Label>
              <FormB.Control
                name="file"
                type="file"
                onChange={(event) => {
                  formik.setFieldValue(
                    "file",
                    event.currentTarget.files[0]
                  );
                }}
              />
            </FormB.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}
