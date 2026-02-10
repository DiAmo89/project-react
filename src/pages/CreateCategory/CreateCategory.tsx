import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import fetchCreateCategory from "./api";
const CreateCategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string().url("Must be a valid URL").required("Required"),
});
const CreateCategory = () => (
  <div>
    <h1>Create New Category</h1>
    <Formik
      initialValues={{
        name: "",
        image: "",
      }}
      validationSchema={CreateCategorySchema}
      onSubmit={(values, actions) => {
        // same shape as initial values
        console.log(values);
        fetchCreateCategory(values, actions);
        //  https://api.escuelajs.co/api/v1/auth/login
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {/* If this field has been touched, and it contains an error, display
          it */}
          {touched.name && errors.name && <div>{errors.name}</div>}
          <Field name="image" />
          {/* If this field has been touched, and it contains an error, display it
           */}
          {touched.image && errors.image && <div>{errors.image}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default CreateCategory;
