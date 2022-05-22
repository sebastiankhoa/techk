import { Flex, Text, Container, Divider, Img } from "@chakra-ui/react";
import SanityBlockContent from "@sanity/block-content-to-react";
import Head from "next/head";
import { useRouter } from "next/router";

import { client, urlFor } from "../../client/client";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Rightbar from "../components/Rightbar";

export default function Home({ results, feature }) {
	const router = useRouter();
	// console.log({ results });
	return (
		<Flex direction="column">
			<Head>
				<title>TechK</title>
				<meta name="description" content="Web tin tức công nghệ" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Container maxW="1440px" mb="100px">
				<Flex w={{ base: "1000px", xl: "1200px", "2xl": "1440px" }} gap="10">
					<Flex direction="column" mt="150px" w={{ base: "100%", lg: "65%" }}>
						{results?.map((post) => (
							<>
								<Divider />
								<PostCard post={post} />
								<Divider />
							</>
						))}
					</Flex>
					<Rightbar feature={feature} />
				</Flex>
			</Container>
			<Footer />
		</Flex>
	);
}

export const getServerSideProps = async () => {
	const query = '*[ _type == "post" ] | order(_createdAt desc)';
	const feaQuery = '*[ _type == "post" && isfeature == true] | order(_createdAt desc)';

	const results = await client.fetch(query);
	// console.log({ results });

	const feature = await client.fetch(feaQuery);
	// console.log({ feature });
	return {
		props: {
			results,
			feature,
		},
	};
};
