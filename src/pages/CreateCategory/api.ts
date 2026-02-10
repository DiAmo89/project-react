import type { FormikHelpers } from "formik";

async function fetchCreateCategory(
  values: { name: string; image: string },
  actions: FormikHelpers<{
    name: string;
    image: string;
  }>,
) {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      throw new Error("Failed creating category");
    }
    if (res.status === 201) {
      console.log("Success");
      actions.resetForm();
    }
  } catch (error) {
    console.error(error);
  }
}
export default fetchCreateCategory;
