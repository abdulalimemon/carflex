import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import NavbarMain from "../../components/layout/main/Navbar";
import { Button } from "@nextui-org/button";
import { BsArrowLeft } from "react-icons/bs";
import NotFoundImage from "../../assets/img/notFound.png";
import Footer from "../../components/layout/main/Footer";

const NotFound = () => {
  return (
    <>
      <NavbarMain />
      <section className="my-10 h-[90vh] flex justify-center items-center">
        <Container>
          <div className="py-10">
            <div className="text-center">
              <div className="w-4/6 md:w-[300px] mx-auto flex items-center justify-center">
                <img src={NotFoundImage} alt="Not Found" />
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl text">
                Oops! Page Not Found.
              </h2>
              <p className="mt-4 text-base leading-7 text2">
                It seems like you've stumbled upon a page that doesn't exist.
                Don't worry, it happens to the best of us.
              </p>
              <div className="mt-4 flex items-center justify-center gap-x-3">
                <Link to="/">
                  <Button>
                    <BsArrowLeft className="mr-2 size-5" />
                    Go back to the homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
