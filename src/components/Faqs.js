
function Faqs(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h4 dir="ltr" style={{ textAlign: "center" }}>FAQs</h4>
            <hr style={{ width: "50%" }} />
            <div class="schema-faq wp-block-yoast-faq-block">
            {
                    props.data.map((value) => {
                        return <div class="schema-faq-section" id="faq-question-1600270904335"><strong class="schema-faq-question">{value.question}</strong> <p class="schema-faq-answer">{value.answer}</p> </div>
                    })
                }
            </div>
        </div>
    )
}

export default Faqs;