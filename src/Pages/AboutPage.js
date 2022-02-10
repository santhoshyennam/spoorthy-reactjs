import About from "../components/About";
import Hightlight from "../components/Highlight";


function AboutPage()
{
    return (
        <div>
            <Hightlight name="about" title = "About" heading="About Us"/>
            <About/>
        </div>
    )
}

export default AboutPage;