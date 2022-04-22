function PaperPattern(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h4 dir="ltr" style={{ textAlign: "center" }}>Paper Pattern</h4>
            <hr style={{ width: "50%" }} />
            <ul>
                {
                    props.data.map((pattern) => {
                        return <li dir="ltr" style={{ textAlign: "justify" }}>{pattern}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PaperPattern;