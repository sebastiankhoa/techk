import { Flex, Image, Switch, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { bgState } from "../../atom/State";

const Navbar = () => {
	const router = useRouter();
	const [isScroll, setIsScroll] = useState(false);
	const [darkmode, setDarkmode] = useRecoilState(bgState);

	console.log({ darkmode });

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
				<Flex
					color="white"
					align="center"
					gap="1"
					ml="10"
					fontWeight="900"
					cursor="pointer"
					onClick={() => router.push("/")}
				>
					<AiOutlineHome />
					<Text fontSize="12pt">Home</Text>
				</Flex>
				<Flex color="white" gap="5" ml="10" fontWeight="500">
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.push("/category/Mobile")}
					>
						Mobile
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.push("/category/Computer")}
					>
						Computer
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.push("/category/Internet")}
					>
						Internet
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.push("/category/Review")}
					>
						Review
					</Text>
					<Text
						fontSize="12pt"
						_hover={{ fontWeight: "700" }}
						cursor="pointer"
						onClick={() => router.push("/category/Blockchain")}
					>
						Blockchain
					</Text>
					<Flex align="center" gap="2" display={{ base: "none", xl: "flex" }}>
						<Text color="white">Dark</Text>
						<Switch isChecked={darkmode} colorScheme="green" onChange={() => setDarkmode((prev) => !prev)} />
					</Flex>
					<Flex
						color="white"
						fontWeight="900"
						cursor="pointer"
						onClick={() => (window.location = "https://techk.sanity.studio/desk")}
					>
						<Text>Admin</Text>
						<MdOutlineAdminPanelSettings size="1.5rem" />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;
