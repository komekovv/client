import { green } from "@/assets/images";

const About = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center py-10">
          <div className="md:w-1/2 md:pr-8 mb-6">
            <img src={green} alt="About Us" className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              We are dedicated to providing accessible and engaging climate education for everyone. Our platform
              offers a wide range of resources, including articles, videos, interactive simulations, and more,
              to help you understand the complexities of climate change and take action.
            </p>
            <p className="text-lg">
              Whether you're a student, educator, or concerned citizen, join us in our mission to create a
              sustainable future for our planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
