import "../css/table.css";

function ExamPattern6th()
{
    return (
        <div className="sixth container" style={{textAlign:"center"}}>
              <h4>Exam Pattern</h4>
            <hr style={{width:"50%"}}/>
           <table>
        <tbody>
        <tr>
        <td><strong>Subject</strong></td>
        <td><strong>Questions</strong></td>
        <td><strong>Marks</strong></td>
        <td><strong>Duration (min)</strong></td>
        </tr>
        <tr>
        <td>Mental Ability</td>
        <td>40</td>
        <td>50</td>
        <td>60</td>
        </tr>
        <tr>
        <td>Arithmetic</td>
        <td>20</td>
        <td>25</td>
        <td>30</td>
        </tr>
        <tr>
        <td>Language</td>
        <td>20</td>
        <td>25</td>
        <td>30</td>
        </tr>
        <tr>
        <td><strong>Total </strong></td>
        <td>80</td>
        <td>100</td>
        <td>120</td>
        </tr>
        </tbody>
    </table>
    </div>

    )
}

export default ExamPattern6th;