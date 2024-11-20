import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
// import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
