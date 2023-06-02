import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { markRaw } from "vue";

export default function validatorCheckout() {
  // Define a validation schema
  const schema = markRaw(
    object({
      firstName: string()
        .required()
        .min(2)
        .label("First Name"),
      lastName: string()
        .required()
        .min(2)
        .label("Last Name"),
      companyName: string()
        .label("Company name"),
      streetAddress: string()
        .required()
        .min(4)
        .label("Street address"),
      streetAddress2: string()
        .min(15)
        .label("House number and street name"),
      townName: string()
        .required()
        .min(1)
        .label("Town name"),
      postalCode: string()
        .required()
        .min(2)
        .label("Postal code"),
      phone: string()
        .required()
        .min(4)
        .label("Postal code"),
      emailAddress: string()
        .required()
        .email()
        .label("Email address"),
    })
  );

  // Create a form context with the validation schema
  useForm({
    validationSchema: schema,
  });

  // No need to define rules for fields
  const { value: firstName, errorMessage: firstNameError } = useField("firstName");
  const { value: lastName, errorMessage: lastNameError } = useField("lastName");
  const { value: companyName, errorMessage: companyNameError } = useField("companyName");
  const { value: streetAddress, errorMessage: streetAddressError } = useField("streetAddress");
  const { value: streetAddress2, errorMessage: streetAddress2Error } = useField("streetAddress2");
  const { value: townName, errorMessage: townNameError } = useField("townName");
  const { value: postalCode, errorMessage: postalCodeError } = useField("postalCode");
  const { value: phone, errorMessage: phoneError } = useField("phone");
  const { value: emailAddress, errorMessage: emailAddressError } = useField("emailAddress");

  return {
    firstName,
    lastName,
    companyName,
    streetAddress,
    streetAddress2,
    townName,
    postalCode,
    phone,
    emailAddress,
    firstNameError,
    lastNameError,
    companyNameError,
    streetAddressError,
    streetAddress2Error,
    townNameError,
    postalCodeError,
    phoneError,
    emailAddressError,
  };
}
