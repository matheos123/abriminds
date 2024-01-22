import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-06-24",
  // token:'',
});

export async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == 'post']
    {
      _id,
        title,
        "slug":slug.current,
        "image":mainImage.asset->url,
          publishedAt,
        "body":pt::text(body),
        "author": *[_type == 'author' && _id == ^.author._ref][0]{
        _id,
        name,
        "slug":slug.current
        },
        categories[]->{
          _id,
          name
        },
        "content":body
      
    }`);
  return posts;
}
