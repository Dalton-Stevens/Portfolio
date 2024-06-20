import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Portfolio />

      <SocialLinks />
    </div>
  );
}
