

function Scanner()
{
    return (
        <div class="contact">
        <div class="container">
            <div class="section-header text-center">
                <p>Please contact our team and pay</p>
                <h2>Scan QR and fill the form</h2>
            </div>
            <div class="row">
            <div class="col-md-12 my-auto">
                <center>
            <div class="card card-block w-50">
                <img src="img/myUpi.jpeg" alt="no preview"></img>
                <h4>Upi Details</h4>
                <p>97143</p>
                <p>9959035341</p>
                </div><hr></hr>
                <h3>You can also pay to below bank account</h3>
                <p style={{fontSize:"25px"}}>
                    Bank : KARUR VYSYA BANK <br></br>
                    Account Holder Name : Shiva <br></br>
                    Account Number : 1445115000008168<br></br>
                    IFSC : KVBL0001445
                </p>
                </center><hr></hr>

                <center><p style={{fontSize:"25px"}}>After Payment, <a href="https://bit.ly/3owIINe" style={{color:"blue",textDecoration:"underline "}} rel="noopener noreferrer" target="_blank"> click here</a> to fill the transaction details.</p></center>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Scanner;