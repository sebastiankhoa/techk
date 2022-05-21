import { Divider, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

import { urlFor } from "../../client/client";

const Rightbar = ({ feature }) => {
	const router = useRouter();
	return (
		<>
			<Flex direction="column" bg="blackAlpha.100" h="800px" mt="150px" gap="5" py="5" px="2">
				{feature.map((post, _i) => (
					<>
						<Flex key={_i} gap="1" cursor="pointer" onClick={() => router.push(`/post/${post.slug.current}`)}>
							<Img src={urlFor(post.mainImage)} w="120px" objectFit="cover" />
							<Text fontSize="9pt">{post.title}</Text>
						</Flex>
						<Divider border="2px" />
					</>
				))}
			</Flex>
		</>
	);
};

export default Rightbar;
