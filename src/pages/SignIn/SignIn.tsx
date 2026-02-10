import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const fetchLogin = async (values: { email: string; password: string }) => {
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data = await res.json();
  const { access_token } = data;
  localStorage.setItem("access_token", access_token);

  console.log("TOKEN SALVAT:", access_token);
};

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          fetchLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="email" placeholder="Email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>

            <div>
              <Field name="password" type="password" placeholder="Password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
