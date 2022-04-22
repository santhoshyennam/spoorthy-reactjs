import { ninthClass_data } from "../data/ninth";
import ExamPattern9th from "./ExamPattern9th";
import PaperPattern from "./PaperPattern";
import Syllabus from "./Syllabus";
import Tips from "./Tips";

function NinthClass() {

    return (
        <div class="blog">
            <div class="container">
                <div class="section-header text-center">
                    <p>9th class</p> <br /><br />
                </div>
            </div>
            <div>
                <div>
                    <p style={{ fontSize: "22px" }}><a href={ninthClass_data.arihant_pdf} style={{ color: "blue", textDecoration: "underline" }} target="_blank">click here </a> to view solved question papers and Notes</p>
                    <p style={{ fontSize: "22px" }}><a href={ninthClass_data.demo_link} style={{ color: "blue", textDecoration: "underline" }} target="_blank">click here </a> to open Demo videos</p>
                </div>
            </div><br />
            <div style={{ textAlign: "center" }}>
                <ExamPattern9th /><br />
                <PaperPattern data={ninthClass_data.paper_pattern} /><br />
                <Tips title="Important Points" data={ninthClass_data.important_points} /><br />
                <h4 style={{ textAlign: "center" }}>Syllabus</h4> <br />
                {
                    Object.keys(ninthClass_data.syllabus).map((key) => {
                        return <Syllabus title={key} data={ninthClass_data.syllabus[key]} />
                    })
                }
            </div>  <br/>
            <p style={{ textAlign: "center", fontSize: "26px", marginTop: "40px" }}><strong>Note: </strong>Exam date - 09/04/2022</p><br />

        </div>
    )
}

export default NinthClass;
