import React, { Component } from "react";
import { Formik, Form, FastField } from "formik";
import TextFields from "./TextFields";
import { Button } from "react-bootstrap";
import BookApi from "../../API/BookApi";
import FormB from "react-bootstrap/Form";
export default class AddForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          title: "",
          price: "",
          rating: 0,
        
          file: null,
        }}
        onSubmit={(values) => {

          const formData = new FormData();

          formData.append("title",values.title);
          formData.append("rating", values.rating);
          formData.append("price", values.price);
          formData.append("image", values.file);

          BookApi.saveBook(formData)
        }}
      >
        {(formik) => (
          <Form>
            <h1 style={{ color: "black" }}>Add Product Form</h1>
            <FastField
              name="title"
              component={TextFields}
              label="Title: "
              placeholder="Enter title here ..."
            />


            <FastField
              name="price"
              component={TextFields}
              label="Price "
              placeholder="Price here ..."
            />

            <FastField
              name="rating"
              component={TextFields}
              label="Rating: "
              placeholder="Rating here ..."
              type="number"
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
