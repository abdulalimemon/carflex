import { Button, Input } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

const Registration = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="relative py-14 bg-gradient-to-r from-slate-50 to-to-gray-100 dark:from-gray-900 dark:to-gray-700  sm:py-16 lg:py-24">
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0"></div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-slate-50 dark:bg-gray-900 rounded-md shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                Sign up
              </h2>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#593CFB] transition-all duration-200 hover:underline"
                >
                  Log in
                </Link>
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
              <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? (
                      <MdVisibility className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <MdVisibilityOff className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                errorMessage="Please enter a valid password."
              />
              <Input
                autoFocus
                endContent={
                  <CgPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Phone Number"
                placeholder="Enter your phone number"
                variant="bordered"
                isInvalid={true}
                errorMessage="Please enter a valid phone number."
              />
              <div className="py-5">
                <Button
                  className="w-full bg-[#593CFB] py-6 text-white font-semibold"
                  type="submit"
                >
                  Sign up <BsArrowRight className="ml-2" size={16} />
                </Button>
              </div>
              <div>
                <p className="text-slate-700 text-sm dark:text-slate-300">
                  By signing up, you agree to Car Flex's{" "}
                  <Link to="/terms-and-conditions" className="text-[#593CFB]">
                    terms & conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-[#593CFB]">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
