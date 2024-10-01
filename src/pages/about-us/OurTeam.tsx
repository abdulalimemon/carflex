import Container from "../../components/layout/Container";

const OurTeam = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="container flex flex-col items-center text-center">
          <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
            Meet the Team
          </h2>
          <p className="mb-8 max-w-3xl lg:text-xl">
            Meet the dedicated team behind Car Flex, driving innovation and
            delivering a seamless car rental experience for every journey.
          </p>
        </div>
        <div className="mt-16 grid gap-5 grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center border p-5 rounded-md shadow">
            <img
              src="/images/placeholders/minima/avatar-bw-1.jpg"
              className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
            />
            <p className="text-center font-medium">Name</p>
            <p className="text-center text-zinc-600">Role</p>
          </div>
          <div className="flex flex-col items-center border p-5 rounded-md shadow">
            <img
              src="/images/placeholders/minima/avatar-bw-1.jpg"
              className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
            />
            <p className="text-center font-medium">Name</p>
            <p className="text-center text-zinc-600">Role</p>
          </div>
          <div className="flex flex-col items-center border p-5 rounded-md shadow">
            <img
              src="/images/placeholders/minima/avatar-bw-1.jpg"
              className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
            />
            <p className="text-center font-medium">Name</p>
            <p className="text-center text-zinc-600">Role</p>
          </div>
          <div className="flex flex-col items-center border p-5 rounded-md shadow">
            <img
              src="/images/placeholders/minima/avatar-bw-1.jpg"
              className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 border md:mb-5 lg:size-24"
            />
            <p className="text-center font-medium">Name</p>
            <p className="text-center text-zinc-600">Role</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
