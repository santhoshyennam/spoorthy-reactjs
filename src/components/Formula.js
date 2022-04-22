import { navodya } from "../data/navodaya";


function Formula()
{
    return(
        <div class="service">
        <div class="container">
            <div class="section-header text-center">
                <p>Our Formula</p>
                <h2>TTT</h2>
            </div>
            <div class="row">
            {
                navodya.formula.map((single)=>{
                    return     <div class="col-lg-4 col-md-6">
                      <div class="service-item">
                          <h3>{single.title}</h3>
                          <p>{single.value}
                          </p>
                      </div>
                  </div>
                })
            }
     </div>
    </div>
    </div>
    )
}

export default Formula;