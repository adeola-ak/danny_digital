import React from "react";
import { Box, Text } from "@chakra-ui/react";
import dd from "./digital.png";

export default function Logo(props) {
	return (
		<Box {...props}>
			<Text fontSize="lg" fontWeight="bold">
				<img src={dd} alt="dd logo" />
			</Text>
		</Box>
	);
}
