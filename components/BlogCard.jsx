import Image from "next/image";
const BlogCard = () => {
  return (
    <div
      className="flex flex-col space-y-2 
    bg-primary-bg w-72 hover:scale-105 transition-transform
    duration-200 ease-out rounded overflow-hidden
    "
    >
      <div>
        <Image
          src="/Images/AbriMinds_logo.png"
          width={300}
          height={50}
          alt="logo"
        />
      </div>
      <div className="flex flex-row">
        <p className="font-semibold text-sm text-primary-brand">
          matheos,jun,2,2003
        </p>
      </div>
      <div>
        <h1 className="text-xl font-bold">How To Code</h1>
      </div>
      <div>
        <p className="line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa
          cupiditate in aspernatur saepe, omnis mollitia dolore explicabo natus
          nulla, repellat impedit quaerat aliquid? Facilis ipsa ut recusandae
          omnis fugit at obcaecati soluta labore sunt ullam! Commodi delectus
          sapiente aspernatur mollitia molestias modi quam odio, possimus
          facilis facere necessitatibus nam!
        </p>
      </div>
      <div className="flex flex-row flex-wrap space-x-2">
        <p className="border text-primary-bg  bg-primary-dark 
        py-1 px-2 text-xs rounded-full">Programming</p>
        <p className="border bg-primary-dark 
        py-1 px-2 text-xs text-primary-bg  rounded-full">Coding</p>
      </div>
    </div>
  );
};

export default BlogCard;
