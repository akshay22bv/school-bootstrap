import "./App.css";

function App() {
  return (
    <div className="">
      {/* navbar  */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning">My</span>
            <span>School</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teacher">
                  Teachers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* carsoul  */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Your Dream School</h5>
              <p>
                My school is campus school. There are separate sections of KG
                level students, Primary, elementary and high school students.
              </p>

              <p className="mt3">
                <a href="/" className="btn btn-warning mt3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1557101346-e04bc569f7d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Our Playground</h5>
              <p>
                My school has a big playground. It has a huge boundary wall. We
                play all types of games in the playground.
              </p>
              <p>
                <a href="/" className="btn btn-warning mt3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Our Library</h5>
              <p>
                A library is a collection of sources of information and similar
                resources, made accessible to a defined community for reference
                or borrowing.
              </p>
              <p>
                <a href="/" className="btn btn-warning mt3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* about section  */}
      <section className="about section-padding" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img
                  alt=""
                  class="img-fluid"
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>
                  We Provide the Best Quality
                  <br />
                  Services Ever
                </h2>
                <p>
                  Schools are multifaceted institutions that offer a myriad of
                  benefits to students and society as a whole. Firstly, they
                  serve as hubs of education, providing structured curricula to
                  impart knowledge and academic skills. Beyond academics,
                  schools are vital for fostering social interaction,
                  facilitating friendships, and teaching essential social
                  skills. Additionally, they play a pivotal role in personal
                  growth, encouraging critical thinking, problem-solving, and
                  self-awareness.
                </p>
                <a class="btn btn-warning" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service section  */}
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>
                  Schools provide a wide range of essential benefits
                  <br />
                  and opportunities for individuals
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-laptop"></i>
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn bg-warning text-dark">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-journal"></i>
                  <h3 className="card-title">Sustainability</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn bg-warning text-dark">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-intersect"></i>
                  <h3 className="card-title">Integrity</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project  */}
      <section className="portfolio section-padding" id="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Aim</h2>
                <p>
                  The primary aim of schools is to provide a structured
                  environment for education and personal development to prepare
                  students for future success in various aspects of life.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      alt=""
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </div>
                  <h3 className="card-title">Personal Growth</h3>
                  <p className="lead">
                    Schools promote personal development by challenging students
                    to think critically, solve problems, and develop a sense of
                    self-awareness.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      alt=""
                      className="img-fluid"
                      src="https://media.istockphoto.com/id/1453308201/photo/excited-indian-student-schoolgirl-wearing-school-uniform-holding-victory-trophy-in-hand.webp?b=1&s=170667a&w=0&k=20&c=f8UuBt3GSDm1Rr3dtPchdGUFQoaEa1dgR76UCxNGwu8="
                    />
                  </div>
                  <h3 className="card-title">Physical Education</h3>
                  <p className="lead">
                    Many schools offer physical education programs that promote
                    physical fitness and overall health.
                  </p>
                  <button className="btn bg-warning text-dark">
                    learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      alt=""
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <h3 className="card-title">Creativity and Arts</h3>
                  <p className="lead">
                    They encourage creativity through art, music, drama, and
                    other creative outlets, allowing students to explore their
                    talents.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* teachers  */}
      <section className="team section-padding" id="teacher">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    alt=""
                    className="img-fluid rounded-circle"
                    src="https://media.istockphoto.com/id/1469940243/photo/hands-on-learning.webp?b=1&s=170667a&w=0&k=20&c=XFqk6wiZ6FWyOuNjLWMbGEN5jfhf3xEzv3GmYdnz0_U="
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>{" "}
                    <i className="bi bi-facebook text-dark mx-1"></i>{" "}
                    <i className="bi bi-linkedin text-dark mx-1"></i>{" "}
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    alt=""
                    className="img-fluid rounded-circle"
                    src="https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>{" "}
                    <i className="bi bi-facebook text-dark mx-1"></i>{" "}
                    <i className="bi bi-linkedin text-dark mx-1"></i>{" "}
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    alt=""
                    className="img-fluid rounded-circle"
                    src="https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>{" "}
                    <i className="bi bi-facebook text-dark mx-1"></i>{" "}
                    <i className="bi bi-linkedin text-dark mx-1"></i>{" "}
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    alt=""
                    className="img-fluid rounded-circle"
                    src="https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>{" "}
                    <i className="bi bi-facebook text-dark mx-1"></i>{" "}
                    <i className="bi bi-linkedin text-dark mx-1"></i>{" "}
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact  */}

      <section className="contact section-padding" id="contact">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                  quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className="bg-light p-4.m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Your Full Name"
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        required
                        placeholder="Example@gmail.com"
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        rows="3"
                        className="form-control"
                        required
                        placeholder="Your Query Here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <button className="btn btn-warning mt-3 ms-auto">
                        Send Now
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer starts */}
      <footer className="bg-dark p-2 text-center">
        <div className="container">
          <p className="text-white">All Right Reserved By @website Name</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
