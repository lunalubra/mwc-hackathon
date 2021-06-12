import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Head from "next/head";
import { ACCOUNT_TYPE_FORM, FormProvider } from "../hooks/formContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nuwe</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <FormProvider initialStep={ACCOUNT_TYPE_FORM}>
          <Component {...pageProps} />
        </FormProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
