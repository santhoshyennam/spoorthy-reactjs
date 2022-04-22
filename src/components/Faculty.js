import { navodya } from "../data/navodaya";

function Faculty()
{
    return (

  <div class="team">
  <div class="container">
      <div class="section-header text-center">
          <p>Meet Our Team</p>
          <h2>Our Faculty</h2>
      </div>
      <div class="row">
              {
                  navodya.faculty.map((single)=>{
                      return  <div class="col-lg-3 col-md-6">
                      <div class="team-item">
                      <div class="team-img">
                          <img src="img/nopreview.png" alt="Team Image"/>
                      </div>
                      <div class="team-text">
                          <h2>{single.name}</h2>
                          <p>{single.qualification}</p>  
                      </div>
                  </div>
                  </div>
                  })
                }
      </div>
  </div>
</div>

    )
}

export default Faculty;