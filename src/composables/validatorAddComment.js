import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { markRaw } from "vue";

export default function validateComment() {
  // Define a validation schema
  const schema = markRaw(
    object({
      email: string()
        .required()
        .email().label('Email address'),
      name: string()
        .required()
        .min(1).label('Name'),
      website: string()
        .required()
        .url().label('Website URL'),
      textArea: string()
        .required()
        .min(15).label('Message'),
    })
  );

  // Create a form context with the validation schema
  useForm({
    validationSchema: schema,
  });

  // No need to define rules for fields
  const { value: email, errorMessage: emailError } = useField("email");
  const { value: name, errorMessage: nameError } = useField("name");
  const { value: textArea, errorMessage: textAreaError } = useField("textArea");
  const { value: website, errorMessage: websiteError } = useField("website");

  return {
    email,
    emailError,
    name,
    nameError,
    textArea,
    textAreaError,
    website,
    websiteError,
  };
}
