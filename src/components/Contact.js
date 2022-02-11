import  axios  from "axios";
import { useState } from "react";

function Contact()
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    async function insertData()
    {
        if(name==="" || email ==="" || subject==="" || message ==="")
        {
            alert("please fill out all details..")
            return
        }
            
            const result = await axios.post("http://localhost:8000/contact",{
                name: name,
                email: email ,
                subject: subject,
                message: message
              });

            if (!result) {
                alert("Server error. please contact us");
                return;
            }
            alert("successful");
        

    }
    return(
        <div class="contact">
        <div class="container">
            <div class="section-header text-center">
                <p>Get In Touch</p>
                <h2>Contact for any query</h2>
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
                <div class="col-md-12">
                    <iframe
            src="https://maps.google.it/maps?q=lbnagar+gurramguda+teachers_colony+hyderabad+india&output=embed"    height="500" style={{border:0}}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact;