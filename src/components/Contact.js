import  axios  from "axios";
import { useState } from "react";
function Contact()
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState("");
    const [error,setError] = useState("");
    async function insertData()
    {
        setError("")
        setSuccess("")
        if(name==="" || email ==="" || subject==="" || message ==="")
        {
            alert("please fill out all details..")
            return
        }
        setLoading(true)   
        const result = await axios.post("https://spoorthyacademy.herokuapp.com/contact",{
                name: name,
                email: email ,
                subject: subject,
                message: message
              });

        if (!result) {
                setLoading(false)
                setSuccess("form submitted successfully")
                setError("")    
                alert("Server error. please contact us");
                return;
            }
        setLoading(false)
        setError("")
        setSuccess("successful")
        alert("successful");
    }
    return(
        <div class="contact">
        <div class="container">
            <div class="section-header text-center">
                <p>Get In Touch</p>
                <h2>Contact for any query</h2>
                {loading && <h4>please wait..</h4>}
                <h4 style={{color:"green"}}>{success}</h4>
                <h4 style={{color:"red"}}>{error}</h4>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="contact-info">
                        <h2>Quick Contact Info</h2>
                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="contact-info-text">
                                <h3>Opening Hour</h3>
                                <p>Mon - Sun, 9:00 - 8:00</p>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="fa fa-phone-alt"></i>
                            </div>
                            <div class="contact-info-text">
                                <h3>Call Us</h3>
                                <p>+91 84659 35341</p>
                                <p>+91 91004 65146</p>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div class="contact-info-text">
                                <h3>Email Us</h3>
                                <p>spoorthynavodaya@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="contact-form">
                        <div id="success"></div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" value={name} data-validation-required-message="Please enter your name" onChange={(e)=>{setName(e.target.value)}} />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="email" placeholder="Your Email" value={email} required="required" data-validation-required-message="Please enter your email" onChange={(e)=>{setEmail(e.target.value)}} />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Mobile Number" value={subject} required="required" data-validation-required-message="Please enter a subject" onChange={(e)=>{setSubject(e.target.value)}}/>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" id="message" placeholder="Message" required="required" value={message} data-validation-required-message="Please enter your message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-custom" type="submit" id="sendMessageButton" onClick={insertData}>Send Message</button>
                            </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>Office Location</h5>
                    <iframe
            src="https://maps.google.it/maps?q=lbnagar+gurramguda+teachers_colony+hyderabad+india&output=embed"    height="500" style={{border:0}}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       
                </div>

                <div class="col-md-6">
                    <h5>Hostel Location (For Boys &amp; Girls)</h5>
                    <iframe
            src="https://maps.google.it/maps?q=lbnagar+hastinapuram+ndr_deluxe_girls_hostel+hyderabad+india&output=embed"    height="500" style={{border:0}}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact;