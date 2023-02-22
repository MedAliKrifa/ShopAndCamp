import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Community = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
    <Intro/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Community
