import Hightlight from "../components/Highlight";
import Price from "../components/Price";


function PricePage()
{
    return (
        <div>
            <Hightlight name="price" title = "Price" heading="Price Plan"/>
            <Price/>
        </div>
    )
}

export default PricePage;