import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import vg from "../assets/vg.png";
import bg from "../assets/b5.jpg";
// import vg1 from "../assets/vg1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Stack
        w={"full"}
        h={"auto"}
        direction={["column-reverse", "row"]}
        justifyContent={["space-between", "space-between"]}
        alignItems={"center"}
        bgImage={bg}
        bgPosition={"center"}
        bgSize={"cover"}
        p={[5, 10]}
        gap={[10, 150]}
      >
        <Box
          w={["full", "50vw"]}
          h={"fit-content"}
          bgColor={"whiteAlpha.300"}
          color={"whiteAlpha.900"}
          p={[5, 10]}
          textAlign={"center"}
          borderRadius={70}
        >
          <Heading textAlign={"center"} marginTop={[10, 0]}>
            Know more about Technomania
          </Heading>
          <Text textAlign={"center"} p={[5, 10]} fontSize={[16, 18]}>
            An obsessional enthusiasm for technology. It is the annual
            techno-cultural fest of University B.D.T. College of Engineering
            (UBDTCE) organized by Computer Science & Engineering (CS&E)
            Department and involves an active participation of students from
            various departments in the college. It gives you a chance to stop,
            culminate new ideas and showcase your technical expertise. The fest
            is a two day grandeur which involves a series of competitions, fun
            activities. It will be a perfect blend of entertainment and
            technology with the aim of transformation and empowerment of an
            individual in technical prospectives. We heartily invite you all to
            this amazing event.
          </Text>
          <Button
            bgColor={"whatsapp.600"}
            w={["60", "md"]}
            _hover={{ bgColor: "green" }}
          >
            <Link to={"/events"}>Events</Link>
          </Button><br/><br/>
          <Button
            bgColor={"red"}
            w={["60", "md"]}
            _hover={{ bgColor: "maroon" }}
          >
            <Link to={"/schedule"}>Schedule</Link>
          </Button>
        </Box>
        <Box
          w={["75vw", "40vw"]}
          h={"auto"}
          borderRadius={20}
          overflow={"hidden"}
        >
          <Image src={vg} w={["full", "30vw"]} />
        </Box>
      </Stack>
      {/* <Stack
        w={"full"}
        h={"auto"}
        direction={["column", "row"]}
        justifyContent={["space-between", "space-between"]}
        alignItems={"center"}
        bgImage={bg}
        bgPosition={"center"}
        bgSize={"cover"}
        p={[5, 10]}
        gap={[10, 30]}
      >
        <Box
          w={["75vw", "40vw"]}
          h={"auto"}
          borderRadius={20}
          overflow={"hidden"}
        >
          <Image src={vg1} w={["full", "50vw"]} />
        </Box>
        <Box
          w={["full", "50vw"]}
          h={"fit-content"}
          bgColor={"blackAlpha.400"}
          color={"whiteAlpha.900"}
          p={[5, 10]}
          borderRadius={70}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading textAlign={"center"} marginTop={[10, 0]}>
            Let's Register...
          </Heading>
          <Text textAlign={"center"} p={[5, 10]} fontSize={[16, 18]}>
            Welcome to Technomania. Register yourself in this great event to
            make yourself glorious..
          </Text>
          <Button
            bgColor={"whatsapp.600"}
            w={["60", "md"]}
            _hover={{ bgColor: "green" }}
          >
            <Link to="/events">Register</Link>
          </Button>
        </Box>
      </Stack> */}
      <Stack
        w={"full"}
        h={"auto"}
        direction={["column-reverse", "row"]}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={"center"}
        bgImage={bg}
        bgSize={"cover"}
        bgPosition={"center"}
        p={[5, 10]}
        gap={5}
      >
        <Box
          w={["full", "30vw"]}
          h={"fit-content"}
          bgColor={"whiteAlpha.300"}
          color={"whiteAlpha.900"}
          p={[5, 10]}
          borderRadius={70}
        >
          <Heading textAlign={"center"}>Vision & Mission UBDTCE</Heading>
          <Text textAlign={"center"} p={5}>
            To be a center of Exellence in Engineering Education and Research
            with an emphasis on regional and social needs. <br />- To impart
            quality technical education through practice based teaching learning
            process in the present and emerging technological senario. <br />-
            To inculcate employability skills, research culture,
            entrepreneurship, and human values.
          </Text>
        </Box>
        <Box
          w={["full", "50vw"]}
          h={"auto"}
          borderRadius={20}
          overflow={"hidden"}
        >
          <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            swipeable={false}
          >
            <Box h={"full"}>
              <Image src={c1} />
            </Box>
            <Box h={"full"}>
              <Image src={c2} />
            </Box>
            <Box h={"full"}>
              <Image src={c3} />
            </Box>
            <Box h={"full"}>
              <Image src={c4} />
            </Box>
          </Carousel>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
