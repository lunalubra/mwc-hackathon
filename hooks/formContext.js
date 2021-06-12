import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export const ACCOUNT_TYPE_FORM = "CHOSE_ACCOUNT_TYPE";
export const SIGNUP_FORM = "SIGNUP_FORM";
export const LOCATION_FORM = "LOCATION_FORM";
export const CARD_FORM = "CARD_FORM";

export const FormProvider = ({ initialStep, children }) => {
  const [formState, setFormState] = useState(initialStep);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
