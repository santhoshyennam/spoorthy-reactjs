import axios from "axios";
function Price()
{

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
                                <li><i class="far fa-check-circle"></i>Daily 4hours</li>
                                <li><i class="far fa-check-circle"></i>Videos will be recorded</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="/scanner">Book Now</a>
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
                                <li><i class="far fa-check-circle"></i>Daily 9hours</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="/scanner">Book Now</a>
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
                                <li><i class="far fa-check-circle"></i>Daily 4hours</li>
                                <li><i class="far fa-check-circle"></i>Videos will be recorded</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="/scanner">Book Now</a>
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
                                <li><i class="far fa-check-circle"></i>Daily 9hours</li>
                                <li><i class="far fa-check-circle"></i>Materials Provided</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="btn btn-custom" href="/scanner" >Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Price;