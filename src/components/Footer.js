import { Center, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Center bg="black" h="40px" pos="fixed" bottom="0" w="full">
			<Text color="gray.300">Made by Khoa, 2022</Text>
		</Center>
	);
};

export default Footer;
