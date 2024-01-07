import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="lg:px-40 px-4 flex flex-col md:flex-row py-8">
      <div className="flex flex-col space-y-4 justify-end  flex-1">
        <h1 className="capitalize text-3xl md:text-5xl font-semoibold">
          Hello! My name is Matheos belay. I am Website and mobile application
          developer.
        </h1>

        <Link
          href="/contact"
          className="bg-primary-brand flex justify-center
          text-primary-bg w-44 py-2 rounded"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex justify-center flex-1">
        <Image
          src="/Images/AbriMinds_logo.png"
          width={500}
          height={100}
          alt="personal pic"
        />
      </div>
    </div>
  );
};

export default Hero;
