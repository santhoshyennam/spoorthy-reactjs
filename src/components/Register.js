import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

function Register()
{
    const [name,setName] = useState("");
    const [fname,setFName] = useState("");
    const [city,setCity] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [address,setAddress] = useState("");
    const [success,setSuccess] = useState("");
    const [error,setError] = useState("");
    const [gender,setGender] = useState("");
    const [loading,setLoading] = useState(false);

   
    function sendRequest()
    {
        if(name==="" || fname==="" || city==="" || email === "" || number === "" || address==="" || gender==="")
        {
            alert("please fill out all details..")
            return
        }
        setLoading(true)
        
        axios({
            method: 'post',
            url: "http://localhost:8000/register",
            headers: {}, 
            data: {
                fullName: name,
                fatherName: fname,
                city:city,
                email: email ,
                number: number,
                address: address,
                gender:gender
              }
            })
          .then((res) => {
            setLoading(false)
            alert("successully submitted")
            setSuccess("form submitted successfully")
            setError("")    
          })
          .catch((err) => {
            setLoading(false)
            alert("Server Error, Try again")
            setError("Server Error, Try again")
            setSuccess("")
          })
    }
    return(
        <div class="contact">
<div class="container">
<div class="section-header text-center">
    <p>Fill the form</p>
    <h2>we will reach out to you</h2>
    <h4 style={{color:"green"}}>{success}</h4>
    <h4 style={{color:"red"}}>{error}</h4>
    {loading && <h4>please wait..</h4>}

</div>
  <div class="container py-5 h-100">
    
            <form>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="fullName" class="form-control form-control-lg"  value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <label class="form-label" for="fullName" >Full Name</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="fatherName" class="form-control form-control-lg" value={fname} onChange={(e)=>{setFName(e.target.value)}} />
                    <label class="form-label" for="fatherName" >Father Name</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="city"
                      value={city} onChange={(e)=>{setCity(e.target.value)}}
                    />
                    <label for="city" class="form-label" >City</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

    <Form.Group inline>
        <div class="form-check form-check-inline">
            <Form.Radio label="Male"  class="form-check-input" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
        </div>
        <div class="form-check form-check-inline">
            <Form.Radio  class="form-check-input" label="Female" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} />
        </div>
    </Form.Group>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="email" id="emailAddress" class="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <label class="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
                    <label class="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <textarea
                      type="text"
                      class="form-control form-control-lg"
                      id="address"
                      value={address}
                      onChange={(e)=>{setAddress(e.target.value)}}
                    />
                    <label for="address" class="form-label">Address</label>
                  </div>

                </div>
                </div>
              
              
              <div class="mt-4 pt-2">
                <button class="btn btn-primary btn-lg" value="Submit" onClick={()=>{sendRequest()}} >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Register;