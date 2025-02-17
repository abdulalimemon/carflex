import Container from "../../components/layout/Container";

const teamData = [
  {
    id: "1",
    name: "Andre Carter",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "2",
    name: "Alex Bennett",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "3",
    name: "Lauren Boyd",
    role: "Chief People Officer",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "4",
    name: "Michael Fang",
    role: "Chief Legal Officer",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "5",
    name: "Charles Fisher",
    role: "Chief Financial Officer",
    image:
      "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "6",
    name: "Vishal G.",
    role: "Chief Technology Officer",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "7",
    name: "Albert Santiago",
    role: "Chief Data Officer",
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "8",
    name: "Andrew Kim",
    role: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const OurTeam = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="container flex flex-col items-center text-center">
          <h2 className="font-extrabold text-2xl md:text-4xl my-5 text-center">
            Meet the <span className="tracking-tight inline from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">Team</span> 
          </h2>
          <p className="mb-8 max-w-3xl lg:text-lg">
            Meet the dedicated team behind Car Flex, driving innovation and
            delivering a seamless car rental experience for every journey.
          </p>
        </div>
        <div className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {teamData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center border p-5 rounded-md shadow"
            >
              <img
                src={item.image}
                className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-24 border md:mb-5 lg:size-24"
              />
              <p className="text-center font-semibold ">{item.name}</p>
              <p className="text-center text-xs">{item.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
