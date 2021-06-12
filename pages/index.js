import LoginLayout from "../components/LoginLayout";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import AccountType from "../components/AccountType/AccountType";
import {
  ACCOUNT_TYPE_FORM,
  CARD_FORM,
  LOCATION_FORM,
  SIGNUP_FORM,
  useForm
} from "../hooks/formContext";
import LocationForm from "../components/LocationForm/LocationForm";
import CardForm from "../components/CardForm/CardForm";

export default function Home() {
  const { formState } = useForm();

  return (
    <LoginLayout>
      {formState === ACCOUNT_TYPE_FORM ? (
        <AccountType />
      ) : formState === SIGNUP_FORM ? (
        <SignUpForm />
      ) : formState === LOCATION_FORM ? (
        <LocationForm />
      ) : formState === CARD_FORM ? (
        <CardForm />
      ) : (
        <p>Something went wrong</p>
      )}
    </LoginLayout>
  );
}
