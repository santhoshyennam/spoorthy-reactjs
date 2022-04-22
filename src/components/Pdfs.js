

function Pdfs(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h4 dir="ltr" style={{ textAlign: "center" }}>{props.title}</h4>
            <hr style={{ width: "50%" }} />
            <ol>
            {
                    props.data.map((sixth) => {
                        return <a href={"./" + sixth.pdf} target="_blank"><i>{sixth.title}</i><br /></a>
                    })
                }
            </ol>
        </div>
    )
}

export default Pdfs;