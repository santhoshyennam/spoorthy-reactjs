

function Scanner()
{
    return (
        <div class="contact">
        <div class="container">
            <div class="section-header text-center">
                <p>Get In Touch</p>
                <h2>Scan QR and fill the form</h2>
            </div>
            <div class="row">
            <div class="col-md-12 my-auto">
                <center>
            <div class="card card-block w-25">
                <img src="img/myUpi.jpeg" alt="no preview"></img>
                </div><hr></hr>
                <h3>You can also pay to below bank account</h3>
                <p style={{fontSize:"25px"}}>
                    Bank : SBI <br></br>
                    Account Holder Name : nksn <br></br>
                    Account Number : 12345<br></br>
                    IFSC : 12345
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