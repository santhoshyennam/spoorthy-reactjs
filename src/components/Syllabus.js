import "../css/table.css";

function Syllabus(props)
{
    return (
                <div class="page_content sixth" style={{textAlign:"justify"}}>
                      <strong>{props.title}</strong>
                     <hr style={{width:"100%"}}/>
                     <ol>
                     {
                         props.data.map((value)=>{
                            return  <li><p>{value}</p></li>
                         })
                     }
                     </ol>      
        </div>
    )
}

export default Syllabus;