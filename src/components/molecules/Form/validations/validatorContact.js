import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { markRaw } from "vue";

export default function validateContact() {
  // Define a validation schema
  const schema = markRaw(
    object({
      email: string()
        .required()
        .email()
        .label("Email address"),
      firstName: string()
        .required()
        .min(1)
        .label("First Name"),
      subject: string()
        .required()
        .min(3)
        .label("Subject"),
      lastName: string()
        .required()
        .min(1)
        .label("Last Name"),
      textArea: string()
        .required()
        .min(15)
        .label("Text Areaa"),
    })
  );

  // Create a form context with the validation schema
  useForm({
    validationSchema: schema,
  });

  // No need to define rules for fields
  const { value: email, errorMessage: emailError } = useField("email");
  const { value: firstName, errorMessage: firstNameError } = useField(
    "firstName"
  );
  const { value: lastName, errorMessage: lastNameError } = useField("lastName");
  const { value: textArea, errorMessage: textAreaError } = useField("textArea");
  const { value: subject, errorMessage: subjectError } = useField("subject");

  return {
    email,
    emailError,
    firstName,
    firstNameError,
    lastName,
    lastNameError,
    textArea,
    textAreaError,
    subject,
    subjectError,
  };
}
