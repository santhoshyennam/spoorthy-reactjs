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
                          Spoorthy Entrance Academy is a leading coaching institute for past 20-25 years providing Navodaya,Gurkul coaching
                          to students in offline mode.This time we are providing coaching in both online and offline mode.
                          The coaching at SPOORTHY ACADEMY is not just like normal classroom sessions.During the initial days of coaching itself, coachers will get the confidence that they can get through any difficult problems or any tough questions. All the concepts will be taught with realtime examples and in an easily understandable way.


                      </p>
                      <ul>
                          <li><i class="far fa-check-circle"></i>Online Classes</li>
                          <li><i class="far fa-check-circle"></i>Offline Classes</li>
                          <li><i class="far fa-check-circle"></i>Highly Experienced Faculty</li>
                          <li><i class="far fa-check-circle"></i>Weekly Tests</li>
                          <li><i class="far fa-check-circle"></i>Study Materials</li>
                          <li><i class="far fa-check-circle"></i>Special Classes for doubt section</li>
                      </ul>
                      {/* <a class="btn btn-custom" href="">Learn More</a> */}
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}

export default About;