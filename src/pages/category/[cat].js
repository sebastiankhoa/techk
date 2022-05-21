import { Container, Divider, Flex, Img, Text } from "@chakra-ui/react";
import SanityBlockContent from "@sanity/block-content-to-react";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import { client, urlFor } from "../../../client/client";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";

const Category = ({ begin, title, image, createdAt, results }) => {
	const router = useRouter();
	return (
		<Flex direction="column">
			<Head>
				<title>Sanity Blog</title>
				<meta name="description" content="Generated by Khoa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Container maxW="1440px">
				<Flex direction="column" mt="150px" w={{ base: "900px", xl: "1200px", "2xl": "1440px" }}>
					<Divider />
					{results.map((post, _i) => (
						<>
							<Flex key={_i} w="100%" h="240px" py="5" gap="2" mx="100px">
								<Flex direction="column" gap="2" w="60%">
									<Text
										fontWeight="bold"
										fontSize="15pt"
										onClick={() => router.push(`/post/${post.slug.current}`)}
										cursor="pointer"
									>
										{post.title}
									</Text>
									<Flex overflow="hidden">
										<SanityBlockContent blocks={post.begin} />
									</Flex>
								</Flex>
								<Flex w="30%" onClick={() => router.push(`/post/${post.slug.current}`)} cursor="pointer">
									<Img src={urlFor(post.mainImage)} w="80%" objectFit="cover" />
								</Flex>
							</Flex>
							<Divider />
						</>
					))}
				</Flex>
			</Container>
			<Footer />
		</Flex>
	);
};

export default Category;

export const getServerSideProps = async ({ params: { cat } }) => {
	// console.log({ cat });
	const query = `*[ _type == "post" &&  '${cat}' in categories[]-> title ]`;

	const results = await client.fetch(query);
	console.log({ results });
	return {
		props: {
			results,
		},
	};
};