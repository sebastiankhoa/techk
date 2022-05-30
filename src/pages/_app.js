import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import "@fontsource/titillium-web";

import theme from "../chakra/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />;
		</ChakraProvider>
	);
}

export default MyApp;
