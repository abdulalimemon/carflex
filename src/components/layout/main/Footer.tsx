import { Link } from "react-router-dom";
import Container from "../Container";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <section className="py-10 bg-[#F4F4F4 dark:bg-slate-950 sm:pt-16 lg:pt-24">
        <Container>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
              <div>
                <h2 className="text-lg font-semibold dark:text-white">Car Flex</h2>

                <ul className="mt-8 space-y-4">
                  <li>
                    <Link to="/about-us" className="footerLink">
                      About Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Our team{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Careers{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      News{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold dark:text-white">Explore</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <Link to="#" title="" className="footerLink">
                      Trip planner
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Travel guides
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Book a car
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Trust and safety
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold dark:text-white">Hosting</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <Link to="#" title="" className="footerLink">
                      List your car
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Carculator
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      All-Star hosts
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Host tools
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold dark:text-white">Help</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <Link to="#" title="" className="footerLink">
                      Customer Support{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Get Help
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Before you book
                    </Link>
                  </li>

                  <li>
                    <Link to="#" title="" className="footerLink">
                      Ahead of your trip
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20 md:mt-28 2xl:mt-32">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                  <ul className="flex items-center justify-start space-x-8">
                    <li>
                      <a
                        href="#"
                        title=""
                        className="block text-slate-700 dark:text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                      >
                        <RiTwitterXLine className="size-5" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        title=""
                        className="block text-slate-700 dark:text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                      >
                        <FaFacebook className="size-5" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        title=""
                        className="block text-slate-700 dark:text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                      >
                        <BsInstagram className="size-5" />
                      </a>
                    </li>
                  </ul>

                  <ul className="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                    <li>
                      <Link
                        to="/privacy-policy"
                        title=""
                        className="text-sm footerLink"
                      >
                        Privacy Policy{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/terms-and-conditions"
                        title=""
                        className="text-sm footerLink"
                      >
                        Terms & Conditions{" "}
                      </Link>
                    </li>

                    <li>
                      <Link to="#" title="" className="text-sm footerLink">
                        Support{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-sm text-slate-700 dark:text-blue-200 lg:mt-0">
                  &copy; Copyright {year}, All Rights Reserved by Car Flex.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
