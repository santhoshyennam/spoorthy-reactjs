import Course from "../components/Course";
import Hightlight from "../components/Highlight";


function CoursePage()
{
    return (
        <div>
            <Hightlight name="course" title = "Course" heading="Courses"/>
            <Course/>
        </div>
    )
}

export default CoursePage;