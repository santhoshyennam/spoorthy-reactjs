import Hightlight from "../components/Highlight";
import Scanner from "../components/Scanner";


function ScannerPage()
{
    return (
        <div>
            <Hightlight name="scanner" title = "Pay now" heading="Payments"/>
            <Scanner/>
        </div>
    )
}

export default ScannerPage;