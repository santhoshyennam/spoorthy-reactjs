

function Tips(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h4 dir="ltr" style={{ textAlign: "center" }}>{props.title}</h4>
            <hr style={{ width: "50%" }} />
            <ol>
                {
                    props.data.map((pattern) => {
                        return <li dir="ltr" style={{ textAlign: "justify" }}>{pattern}</li>
                    })
                }
            </ol>
        </div>
    )
}

export default Tips;