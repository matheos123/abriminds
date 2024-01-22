import { getPosts } from "@/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const SingleBlogPage = async ({ params }) => {
  const posts = await getPosts();
  const postID = params.id[0];

  const singlePost = posts.find((post) => post._id === postID);

  return (
    <div className="flex space-y-8 my-8 flex-col lg:px-96 px-4 min-h-screen">
      <div className="w-full flex flex-col justify-center space-y-8 items-center">
        <h1 className="text-3xl text-primary-dark font-semibold drop-shadow-md">
          {singlePost.title}
        </h1>
        <Image
          src={singlePost.image}
          width={600}
          height={200}
          alt={singlePost.title}
          className="backdrop-brightness-100"
        />
      </div>
      <div>
        <p>
          By{" "}
          <span className="font-semibold text-primary-brand">
            {singlePost.author.name}
          </span>
        </p>
      </div>
      <div>
        <PortableText value={singlePost.content} />
      </div>
    </div>
  );
};

export default SingleBlogPage;