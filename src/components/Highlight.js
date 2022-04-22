

function Hightlight(props)
{
    return (

        <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>{props.heading}</h2>
                </div>
                <div class="col-12">
                    <a href="/">Home</a>
                    <a href={"/"+props.name}>{props.title}</a>
                </div>
            </div>
        </div>
    </div>  
      )
}

export default Hightlight