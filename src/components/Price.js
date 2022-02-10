import axios from "axios";
function Price()
{

    var logo = "img/vivek.jpg"
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        // const result = await axios.post("http://localhost:5000/payment/orders");

        // if (!result) {
        //     alert("Server error. Are you online?");
        //     return;
        // }

        // // Getting the order details back
        // const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_ScBoOZRuvoJ4kj", // Enter the Key ID generated from the Dashboard
            amount: "500",
            currency: "INR",
            name: "Soumya Corp.",
            description: "Test Transaction",
            image: { logo },
            order_id: "1234",
            handler: async function (response) {
                const data = {
                    orderCreationId: "1234",
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/payment/success", data);

                 alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
}
    return (

        <div class="price">
        <div class="container-fluid main_container">
            <div class="section-header text-center">
                <p>Course Plan</p>
                <h2>Choose Your Plan</h2>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="price-item">
                        <div class="price-header">
                            <h3>5th Class</h3>
                            <h2><span>&#8377;</span><strong>6000</strong><span>.00</span></h2>
                        </div>
                        <div class="price-body">
                            <ul>
                                <li><i class="far fa-check-circle"></i>Online Classes</li>
                                <li><i class="far fa-check-circle"></i>Weekly Tests</li>
                                <li><i class="far fa-check-circle"></i>Daily 3hrs</li>
                                <li><i class="far fa-check-circle"></i>Videos will be recorded</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <button class="btn btn-custom" onClick={displayRazorpay}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="price-item featured-item">
                        <div class="price-header">
                            <h3>5th class</h3>
                            <h2><span>&#8377;</span><strong>30000</strong><span>.00</span></h2>
                        </div>
                        <div class="price-body">
                        <ul>
                                <li><i class="far fa-check-circle"></i>Offline Classes</li>
                                <li><i class="far fa-check-circle"></i>Weekly Tests</li>
                                <li><i class="far fa-check-circle"></i>Daily 6hrs</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="price-item">
                        <div class="price-header">
                            <h3>8th class</h3>
                            <h2><span>&#8377;</span><strong>5000</strong><span>.00</span></h2>
                        </div>
                        <div class="price-body">
                        <ul>
                                <li><i class="far fa-check-circle"></i>Online Classes</li>
                                <li><i class="far fa-check-circle"></i>Weekly Tests</li>
                                <li><i class="far fa-check-circle"></i>Daily 3hrs</li>
                                <li><i class="far fa-check-circle"></i>Videos will be recorded</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="price-item featured-item">
                        <div class="price-header">
                            <h3>8th class</h3>
                            <h2><span>&#8377;</span><strong>25000</strong><span>.00</span></h2>
                        </div>
                        <div class="price-body">
                        <ul>
                                <li><i class="far fa-check-circle"></i>Offline Classes</li>
                                <li><i class="far fa-check-circle"></i>Weekly Tests</li>
                                <li><i class="far fa-check-circle"></i>Daily 6hrs</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Price;