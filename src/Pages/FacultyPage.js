import Faculty from "../components/Faculty";
import Hightlight from "../components/Highlight";


function FacultyPage()
{
    return (
        <div>
            <Hightlight name="faculty" title = "Faculty" heading="Faculty"/>
            <Faculty/>
        </div>
    )
}

export default FacultyPage;