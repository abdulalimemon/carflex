import Container from "../../components/layout/Container";
import { BsCollection } from "react-icons/bs";
import {
  MdOutlinePriceChange,
  MdCarRental,
  MdSupportAgent,
} from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { FaShieldAlt } from "react-icons/fa";

const whyChooseUsInfos = [
  {
    title: "Wide Selection of Vehicles",
    description:
      "At Car Flex, we offer a diverse range of vehicles to meet your specific needs. Whether you're looking for a luxury car for a special event, a budget-friendly sedan for everyday use, or an SUV for a family vacation, we have you covered. Choose from our extensive fleet and drive the car that suits you best.",
    icon: <BsCollection className="flex-shrink-0 size-10 lg:size-14" />,
  },
  {
    title: "Competitive Pricing",
    description:
      "We believe in providing excellent service without breaking the bank. Our competitive pricing ensures you get the best deal for your rental, with no hidden fees or surprise costs. Enjoy transparent pricing and various flexible rental plans to suit your budget.",
    icon: <MdOutlinePriceChange className="flex-shrink-0 size-10 lg:size-14" />,
  },
  {
    title: "Flexible Rental Periods",
    description:
      "Need a car for just a day, a week, or even a month? With Car Flex, you can rent a vehicle for as long as you need. Our flexible rental periods allow you to plan your trip with ease, whether it’s a quick weekend getaway or a long-term rental.",
    icon: <MdCarRental className="flex-shrink-0 size-10 lg:size-14" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We prioritize customer satisfaction by offering round-the-clock support. Our dedicated team is here to assist you with any questions, issues, or emergencies during your rental. We provide 24/7 roadside assistance to ensure you’re never left stranded.",
    icon: <MdSupportAgent className="flex-shrink-0 size-10 lg:size-14" />,
  },
  {
    title: "Easy Booking Process",
    description:
      "Renting a car has never been easier. With our user-friendly platform, you can browse available cars, compare options, and book your rental within minutes. No lengthy paperwork or complicated procedures — just a simple, straightforward booking process.",
    icon: <VscServerProcess className="flex-shrink-0 size-10 lg:size-14" />,
  },
  {
    title: "Fully Insured & Protected",
    description:
      "Car Flex provides a range of protection plans to give you peace of mind during your trip. Choose from our flexible insurance options and drive confidently, knowing that you are covered in case of any accidents, damages, or breakdowns.",
    icon: <FaShieldAlt className="flex-shrink-0 size-10 lg:size-14" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="pb-10 pt-1 lg:pt-10">
      <Container>
        <div className="text-center">
          <h2 className="font-extrabold text-2xl md:text-4xl my-5 text-center">
            Why Choose Us
          </h2>
        </div>

        <div className=" py-8">
          <div className="grid grid-cols-1 gap-5 lg:gap-7 sm:grid-cols-2">
            {whyChooseUsInfos.map((item) => (
              <div className="flex items-start dark:bg-gray-900 shadow rounded-xl p-5 dark:hover:bg-[#593CFB] hover:bg-[#593CFB] dark:hover:text-white hover:text-white py-7 lg:py-10">
                <div className="">{item.icon}</div>
                <div className="ml-5 lg:ml-10">
                  <h3 className="text-lg lg:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
