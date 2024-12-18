import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { addContact, selectContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      parsedContacts.forEach(contact => dispatch(addContact(contact)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімальна кількість символів - 3')
      .max(50, 'Максимальна кількість символів - 50')
      .required('Поле обов&apos;язкове для заповнення'),
    number: Yup.string()
      .min(3, 'Мінімальна кількість символів - 3')
      .max(50, 'Максимальна кількість символів - 50')
      .required('Поле обов&apos;язкове для заповнення'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="contact-form">
          <div>
            <label htmlFor="name">Ім&apos;я</label>
            <Field name="name" type="text" className="contact-form-input" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="number">Номер телефону</label>
            <Field name="number" type="text" className="contact-form-input" />
            <ErrorMessage name="number" component="div" className="error-message" />
          </div>
          <button type="submit">Додати контакт</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
