import { useState } from "react";
import "./ItemForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  quantity: Yup.string().required("Quantity is required"),
  purpose: Yup.string().required("Purpose is required"),
  terms: Yup.bool().oneOf([true], "You need to accept the terms"),
});

const INITIAL_FORM_DATA = {
  name: "",
  quantity: "",
  purpose: "",
  terms: false,
};

function ItemForm({ addNewItem }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const onChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted", values);
    addNewItem(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className="ItemForm">
          <Field
            placeholder="Name"
            name="name"
            className={errors.name ? "input-err" : ""}
          />
          <ErrorMessage name="name" component="div" className="error" />
          <Field
            placeholder="Quantity"
            name="quantity"
            type="number"
            className={errors.name ? "input-err" : ""}
          />
          <ErrorMessage name="quantity" component="div" className="error" />
          <Field
            placeholder="Purpose"
            name="purpose"
            component="textarea"
            className={errors.name ? "input-err" : ""}
          />
          <ErrorMessage name="purpose" component="div" className="error" />
          <label>
            <Field
              type="checkbox"
              placeholder="Agree"
              name="terms"
              className={errors.name ? "input-err" : ""}
            />
            Agree to Terms
            <ErrorMessage name="terms" component="div" className="error" />
          </label>
          {/*
           */}
          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ItemForm;
