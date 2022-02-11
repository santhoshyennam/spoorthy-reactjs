import Demo from "../components/Demo";
import Hightlight from "../components/Highlight";


function DemoPage()
{
    return (
        <div>
            <Hightlight name="demo" title = "Videos" heading="Illustration"/>
            <Demo/>
        </div>
    )
}

export default DemoPage;