import { Link } from "react-router-dom";


function Course()
{
    return (
        <div class="blog">
        <div class="container">
            <div class="section-header text-center">
                <p>Available Courses</p>
                <h2>Courses Catalogue</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4">
                <div class = "about">
                    <div class="blog-item">
                    <Link  to="/ninth">
                        <div class="blog-img">
                            <img src="img/eight.jpg" alt="Image" width="200" height="230"/>
                            click here know more..
                            <div class="meta-date">
                                <span>09</span>
                                <strong>April</strong>
                                <span>2022</span>
                            </div>
                        </div>
                        </Link>
                        <div class="blog-text">
                            <h3><a href="#">For 9th class Admission</a></h3>
                            <div class="about-content">
                      <p>
                          Available Subjects
                      </p>
                      <ul>
                          <li><i class="far fa-check-circle"></i>Mathematics</li>
                          <li><i class="far fa-check-circle"></i>Science</li>
                          <li><i class="far fa-check-circle"></i>English</li>
                          <li><i class="far fa-check-circle"></i>Hindi</li>
                      </ul>
                  </div>
                        </div>
                    </div> 
                    </div>
                </div>
                <div class="col-lg-4">
                <div class = "about">
                    <div class="blog-item">
                    <Link  to="/sixth">
                        <div class="blog-img">
                            <img src="img/fifth.webp" alt="Image" width="200" height="230"/>
                          click here know more..
                            <div class="meta-date">
                                <span>30</span>
                                <strong>April</strong>
                                <span>2022</span>
                            </div>
                        </div>
                        </Link>
                        <div class="blog-text">
                            <h3><a href="#">For 6th class Admission</a></h3>
                            <div class="about-content">
                      <p>
                          Available Subjects
                      </p>
                      <ul>
                          <li><i class="far fa-check-circle"></i>Mental Ability</li>
                          <li><i class="far fa-check-circle"></i>Arithmetic</li>
                          <li><i class="far fa-check-circle"></i>English</li>
                      </ul>
                  </div>
                  </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    )
}

export default Course;