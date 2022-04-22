import { navodya } from "../data/navodaya";
import Hightlight from "./Highlight";


function About()
{
    return (
        <div class="about">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6">
                  <div class="about-img">
                      <img src="img/spoorthy.jpeg" alt="Image"/>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="section-header text-left">
                      <p>About Us</p>
                      <h2>Spoorthy Academy</h2>
                  </div>
                  <div class="about-content">
                      <p style={{justifyContent: "center" }}>
                         {navodya.about}
                      </p>
                      <ul>
                          {
                              navodya.provides.map((single)=>{
                                  return  <li><i class="far fa-check-circle"></i>{single}</li>
                              })
                          }
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}

export default About;