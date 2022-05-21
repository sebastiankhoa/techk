import { Divider, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

import { urlFor } from "../../client/client";

const Rightbar = ({ feature }) => {
	const router = useRouter();
	return (
		<>
			{feature.map((post, _i) => (
				<>
					<Flex key={post._id} gap="1" cursor="pointer" onClick={() => router.push(`/post/${post.slug.current}`)}>
						<Img src={urlFor(post.mainImage)} w="120px" objectFit="cover" />
						<Text fontSize="9pt">{post.title}</Text>
					</Flex>
					<Divider border="2px" />
				</>
			))}
		</>
	);
};

export default Rightbar;
