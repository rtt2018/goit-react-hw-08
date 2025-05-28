import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';



export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    contactPhone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });

  const initValues = {
    contactName: "",
    contactPhone: ""
  };

  const dispatch = useDispatch();

  const handleSumit = (values, actions) => {
    dispatch(addContact({ name: values.contactName, number: values.contactPhone }));
    actions.resetForm();
  }

  return (
    <div className={css.container}>
      <Formik initialValues={initValues} onSubmit={handleSumit} validationSchema={FeedbackSchema}>
        <Form className={css.formContainer} >
          <label className={css.labelContact} htmlFor="nameFieldId">Name</label>
          <Field className={css.contactInput} type="text" name="contactName" id={nameFieldId} />
          <ErrorMessage name="contactName" component="span" />
          <label className={css.labelContact} htmlFor="phoneFieldId">Number</label>
          <Field className={css.contactInput} type="tel" name="contactPhone" id={phoneFieldId} />
          <ErrorMessage name="contactPhone" component="span" />
          <button className={css.buttonAddContact} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
