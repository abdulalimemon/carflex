import { Input } from "@nextui-org/react";
// import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
// import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// import { Link } from "react-router-dom";

const Login = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-white rounded-md shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
              <p className="mt-2 text-base text-gray-600">
                Don’t have one?{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Create a free account
                </a>
              </p>
            </div>

            <form className="py-5">
              <Input
                autoFocus
                endContent={
                  <FaUserAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Name"
                placeholder="Enter your name"
                variant="bordered"
                isInvalid={true}
                errorMessage="Please enter a valid name."
              />
              <Input
                autoFocus
                endContent={
                  <IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                isInvalid={true}
                errorMessage="Please enter a valid email address."
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
