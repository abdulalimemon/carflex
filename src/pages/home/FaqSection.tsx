import { Accordion, AccordionItem } from "@nextui-org/react";
import Container from "../../components/layout/Container";

const faqs = [
  {
    key: "1",
    question: "What do I need to book a car on Car Flex?",
    answer:
      "To book a car on Car Flex, you must create an account, be at least 21 years old, have a valid driver’s license, and pass a quick approval process. Once you’re approved, you’ll be set to rent cars for all your future trips.",
    ariaLabel: "Accordion 1",
  },
  {
    key: "2",
    question: "Do I need personal insurance to rent a car on Car Flex?",
    answer:
      "No, you don’t need your own insurance to rent a car on Car Flex. We offer different protection plans that include liability coverage to ensure you are fully protected during your rental.",
    ariaLabel: "Accordion 2",
  },
  {
    key: "3",
    question: "What protection plans does Car Flex offer?",
    answer:
      "Car Flex provides three protection plans: Premier, Standard, and Basic. Each plan offers varying levels of coverage, including liability, damage protection, and roadside assistance. You can choose the plan that suits your needs when booking.",
    ariaLabel: "Accordion 3",
  },
  {
    key: "4",
    question: "Can I add additional drivers to my rental?",
    answer:
      "Yes, you can add multiple drivers to your Car Flex rental at no extra charge, provided they are also approved by us. Additional drivers must meet the same age and license requirements as the primary renter.",
    ariaLabel: "Accordion 4",
  },
  {
    key: "5",
    question: "What is the cancellation policy on Car Flex?",
    answer:
      "You can cancel your reservation for a full refund up to 24 hours before your scheduled rental. For last-minute bookings, you can cancel within one hour of booking without a fee. After these periods, a small cancellation fee may apply.",
    ariaLabel: "Accordion 5",
  },
  {
    key: "6",
    question: "Is there a mileage limit on Car Flex rentals?",
    answer:
      "Yes, each car on Car Flex has its own mileage limit, which will be clearly displayed during the booking process. If you exceed the limit, additional charges may apply based on the vehicle.",
    ariaLabel: "Accordion 6",
  },
  {
    key: "7",
    question: "What happens if the car breaks down during my rental?",
    answer:
      "If your rental car breaks down, Car Flex offers 24/7 roadside assistance. Simply contact our support team, and we’ll arrange for help or a replacement vehicle as needed.",
    ariaLabel: "Accordion 7",
  },
  {
    key: "8",
    question: "Can I rent a car for someone else using my account?",
    answer:
      "No, only the person who creates the booking and gets approved can drive the car. If you want someone else to drive, they must create their own Car Flex account and be added as an additional driver.",
    ariaLabel: "Accordion 8",
  },
  {
    key: "9",
    question: "What payment methods are accepted on Car Flex?",
    answer:
      "Car Flex accepts all major credit and debit cards, including Visa, MasterCard, and American Express. Payment is made when you confirm your booking.",
    ariaLabel: "Accordion 9",
  },
  {
    key: "10",
    question: "How do I extend my rental period?",
    answer:
      "To extend your rental period, log into your Car Flex account, go to your current booking, and request an extension. Extensions are subject to vehicle availability, and additional charges may apply.",
    ariaLabel: "Accordion 10",
  },
];

const FaqSection = () => {
  return (
    <section className="pb-16 pt-10">
      <Container>
        <h2 className="font-extrabold text-2xl md:text-4xl my-5 text-center pb-5">
          Frequently asked questions
        </h2>
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
          variant="splitted"
          className="gap-3"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.key}
              aria-label={faq.ariaLabel}
              title={faq.question}
              className="font-semibold"
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqSection;
