import { Box, Button, Divider, Flex, Img, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { BiChevronsDown } from "react-icons/bi";

import { urlFor } from "../../client/client";

const Rightbar = ({ feature }) => {
	const router = useRouter();
	const scrollRef = useRef();

	const handleClick = () => {
		scrollRef.current.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<Box position="relative" h="875px" mt="120px">
			<Text textAlign="center" fontWeight="700" fontSize="18pt" display={{ base: "none", xl: "flex" }}>
				Tin nổi bật
			</Text>
			<Flex
				w="300px"
				display={{ base: "none", lg: "flex" }}
				direction="column"
				h="800px"
				bg="blackAlpha.100"
				gap="5"
				py="5"
				px="2"
				overflowX="hidden"
				overflowY="scroll"
				className="scrollbar-style"
				ref={scrollRef}
			>
				<Divider />
				{feature.map((post, _i) => (
					<>
						<Flex key={post._id} gap="1" cursor="pointer" onClick={() => router.push(`/post/${post.slug.current}`)}>
							<Img src={urlFor(post.mainImage)} w="120px" objectFit="cover" />
							<Text fontSize="9pt">{post.title}</Text>
						</Flex>
						<Divider border="2px" />
					</>
				))}
				<Flex pos="absolute" bottom="0" right="0" left="0" mx="auto" direction="column" align="center">
					<Button variant="unstyled" onClick={() => handleClick()}>
						<BiChevronsDown size="2rem" />
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Rightbar;
