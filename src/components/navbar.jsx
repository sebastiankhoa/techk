import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
	const router = useRouter();
	const [isScroll, setIsScroll] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();

	//check if user scroll
	useEffect(() => {
		const handlescroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};
		window.addEventListener("scroll", handlescroll);
		return () => {
			window.removeEventListener("scroll", handlescroll);
		};
	}, []);

	return (
		<Flex
			pos="fixed"
			w="full"
			top="0"
			h="100px"
			bg={isScroll ? "blackAlpha.600" : "black"}
			direction="column"
			align="center"
			zIndex="99"
		>
			<Flex align="center" px={{ base: "50px", lg: "1" }} w="1200px">
				<Text
					bgGradient="linear(to-l, #7928CA, #FF0080)"
					bgClip="text"
					fontSize="6xl"
					fontWeight="extrabold"
					ml={{ base: "100px", xl: "0" }}
				>
					TechK
				</Text>
				<Flex color="white" align="center" gap="1" ml="10" fontWeight="900" cursor="pointer" onClick={() => router.replace("/")}>
					<AiOutlineHome />
					<Text fontSize="12pt">Home</Text>
				</Flex>
				<Flex color="white" gap="5" ml="10" fontWeight="500">
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.replace("/category/Mobile")}
					>
						Mobile
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.replace("/category/Computer")}
					>
						Computer
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.replace("/category/Internet")}
					>
						Internet
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.replace("/category/Review")}
					>
						Review
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.replace("/category/Blockchain")}
					>
						Blockchain
					</Text>

					<Flex
						color="white"
						fontWeight="900"
						cursor="pointer"
						onClick={() => (window.location = "https://techk.sanity.studio/desk")}
					>
						<Text>Admin</Text>
						<MdOutlineAdminPanelSettings size="1.5rem" />
					</Flex>
					<Flex align="center" transition="1s ease" cursor="pointer" onClick={() => toggleColorMode((prev) => !prev)}>
						{colorMode == "light" ? <BsFillMoonFill size="1.3rem" /> : <BsSun size="1.3rem" />}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;
