
import { useFormik } from 'formik';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: ''
    },
    onSubmit: values => {
      addContact(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Name"
      />
      <input
        type="text"
        name="number"
        onChange={formik.handleChange}
        value={formik.values.number}
        placeholder="Number"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
