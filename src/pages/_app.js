import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import "@fontsource/titillium-web";

import theme from "../chakra/theme";

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />;
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
