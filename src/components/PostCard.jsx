import { Flex, Img, Text } from "@chakra-ui/react";
import SanityBlockContent from "@sanity/block-content-to-react";
import React from "react";
import { useRouter } from "next/router";

import { urlFor } from "../../client/client";

const PostCard = ({ post }) => {
	const router = useRouter();
	return (
		<Flex w="100%" h={{ base: "250px", xl: "200px" }} py="1" px="2" gap="2" mx="100px" my="2" overflow="hidden">
			<Flex direction="column" gap="2" w="60%">
				<Text
					fontWeight="bold"
					fontSize={{ base: "22pt", xl: "15pt" }}
					onClick={() => router.push(`/post/${post.slug.current}`)}
					cursor="pointer"
				>
					{post.title}
				</Text>
				<Flex fontSize={{ base: "18pt", xl: "15pt" }}>
					<SanityBlockContent blocks={post.begin} />
				</Flex>
			</Flex>
			<Flex w="40%" onClick={() => router.push(`/post/${post.slug.current}`)} cursor="pointer">
				<Img w="70%" h="180px" src={urlFor(post.mainImage)} objectFit="cover" />
			</Flex>
		</Flex>
	);
};

export default PostCard;
