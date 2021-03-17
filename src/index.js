import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./customTheme";

ReactDOM.render(
	<BrowserRouter>
		<ChakraProvider theme={customTheme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChakraProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
