import * as Yup from "yup";

export const contactSchema = Yup.object({
  companyName: Yup.string().min(2).max(50).required("Company Name is required"),
  fullName: Yup.string().min(2).max(50).required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().min(5).max(50).required("Phone number is required"),
  yourMessage: Yup.string().required("Message is required"),
});
