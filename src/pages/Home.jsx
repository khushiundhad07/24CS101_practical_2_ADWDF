import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  const name = "Khushi Undhad";

  const bio =
    "I am a Computer Science student passionate about Web Development and React.";

  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  return (
    <>
      <Header name={name} />
      <About bio={bio} />
      <Skills skillList={skillList} />
      <Footer />
    </>
  );
}

export default Home;