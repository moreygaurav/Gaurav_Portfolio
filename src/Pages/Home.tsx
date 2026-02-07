import Navbar from "../components/navbar/Navbar";
import LandingPage from "../components/LandingPage/landingPage";
import AboutPage from "../components/About/About";
import Skill from "../components/Skills/Skills";
import ProExp from "../components/ProjectExperience/ProExp";
function Home() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <AboutPage/>
            <Skill/>
            <ProExp/>
        </div>
    );
}   
export default Home;