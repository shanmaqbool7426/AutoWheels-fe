import React from "react";
import {Box,Text,Title,Image} from "@mantine/core";
import ReplyBlog from "@/components/blog/reply-blog"
const Detail = ({ blog }) => {
    return (
        <>
            <Title order={2} mb="lg">
                {blog?.title}
            </Title>
            {/* Main Post Image and description */}
            <Box className="article-large" component="article">
                <Image
                    mb="md"
                    src={blog?.imageUrl}
                    radius="md"
                    alt="Norway"
                    height={381}
                />
                <Text lineClamp={4} size="md">
                    {blog?.content}
                </Text>
            </Box>
            {/* Reply Section */}
            <ReplyBlog blog={blog} />

        </>

    )
}

export default Detail
