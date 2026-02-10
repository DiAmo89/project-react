import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  avatar: Yup.string().required("Avatar URL is required"),
});

const fetchRegister = async (values: SignUpFormValues) => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(values),
  });
  const obj = await res.json();
  console.log(obj);
  return obj;
};

const SignUp = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">🚀 Create Your Account</h1>
        <p className="text-lg opacity-90">
          Join our community and start exploring amazing features. Registration is quick and easy!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          {submitSuccess && (
            <div className="mb-6 bg-green-100 border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">✅ Welcome aboard!</h3>
              <p className="text-green-700">
                Your account has been created successfully. You can now log in and start using our platform.
              </p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <h2 className="text-2xl font-bold">Registration Form</h2>
              <p className="text-blue-100">Fill in your details to create an account</p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                try {
                  await fetchRegister(values);
                  setSubmitSuccess(true);
                  actions.resetForm();
                  setTimeout(() => setSubmitSuccess(false), 5000);
                } catch (error) {
                  console.error("Registration failed:", error);
                }
                actions.setSubmitting(false);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="p-8 space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-3">
                      👤 Full Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.name && touched.name
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-white hover:border-blue-400"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-600 text-sm mt-2 font-semibold">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-3">
                      📧 Email Address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.email && touched.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-white hover:border-blue-400"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-600 text-sm mt-2 font-semibold">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-lg font-semibold text-gray-900 mb-3">
                      🔐 Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.password && touched.password
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-white hover:border-blue-400"
                      }`}
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-600 text-sm mt-2 font-semibold">{errors.password}</p>
                    )}
                  </div>

                  {/* Avatar Field */}
                  <div>
                    <label htmlFor="avatar" className="block text-lg font-semibold text-gray-900 mb-3">
                      🖼️ Avatar URL
                    </label>
                    <Field
                      id="avatar"
                      name="avatar"
                      placeholder="https://example.com/avatar.jpg"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.avatar && touched.avatar
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-white hover:border-blue-400"
                      }`}
                    />
                    {errors.avatar && touched.avatar && (
                      <p className="text-red-600 text-sm mt-2 font-semibold">{errors.avatar}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 text-lg"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">✨ Why Join?</h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-bold">Access Features</p>
                  <p className="text-sm">Unlock all premium features</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🌟</span>
                <div>
                  <p className="font-bold">Save Preferences</p>
                  <p className="text-sm">Keep your settings synced</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-bold">Community</p>
                  <p className="text-sm">Connect with other users</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3">🔒 Secure</h3>
            <p className="text-green-800 text-sm leading-relaxed">
              Your data is encrypted and secure. We comply with all privacy regulations.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">⚡ Quick Setup</h3>
            <p className="text-purple-800 text-sm leading-relaxed">
              Get started in minutes. No credit card required!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
