import { navodya } from "../data/navodaya";


function Services()
{
    return (

  <div class="service">
  <div class="container">
      <div class="section-header text-center">
          <p>What We Do?</p>
          <h2>Spoorthy Academy Services</h2>
      </div>
      <div class="row">
          {
              navodya.services.map((single)=>{
                  return  <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                      {/* <i class="flaticon-car-wash-1"></i> */}
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

export default Services;