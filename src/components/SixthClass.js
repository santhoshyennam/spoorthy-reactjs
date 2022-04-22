import { sixthClass_data } from "../data/sixth";
import ExamPattern6th from "./ExamPattern6th";
import Faqs from "./Faqs";
import PaperPattern from "./PaperPattern";
import Pdfs from "./Pdfs";
import Syllabus from "./Syllabus";
import Tips from "./Tips";
function SixthClass() {

    return (
        <div class="blog">
            <div class="container">
                <div class="section-header text-center">
                    <p>6th class</p>
                </div>
            </div>
            <div>
            </div><br />
            <h4 style={{textAlign:"center"}}>Demo Videos</h4> <br/> 
            <div class="row center">
            <div class="col-lg-3 col-md-6">
            <iframe width="350" height="200" src="https://www.youtube.com/embed/D1347j_hEJo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;
                <div class="col-lg-3 col-md-6">
                <iframe width="350" height="200" src="https://www.youtube.com/embed/VbCjKR9JZ2o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
            <br/><br/>
            <ExamPattern6th /><br /><br/>
            <h4 style={{textAlign:"center"}}>Syllabus</h4> <br/>
            {
               Object.keys(sixthClass_data.syllabus).map((key) => {
                   return <Syllabus title={key} data={sixthClass_data.syllabus[key]}/>
               })
            }
            <PaperPattern data={sixthClass_data.paper_pattern} /><br />
            <Pdfs title="Notes" data={sixthClass_data.brand_books} />
            <br />
            <Pdfs title="Previous year question papers" data={sixthClass_data.previous_papers} />
            <br />
            <Pdfs title="Model papers" data={sixthClass_data.model_papers} />
            <br /><br />
            <Tips title = "Preparation tips" data={sixthClass_data.preparation_tips}/><br />
            <Faqs data={sixthClass_data.FAQs}/><br />
            <p style={{ textAlign: "center", fontSize: "26px", marginTop: "40px" }}><strong>Note: </strong>Exam date - 30/04/2022</p><br />
        </div>
    )
}

export default SixthClass;
