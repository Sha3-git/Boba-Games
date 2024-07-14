import Header from "../components/Header"
import carousel1 from "../assets/images/carousel_img.gif"

export default function Home() {
    return (
        <>
            <Header />
            <div className="container-fluid ms-lg-5 ">
                <div className="container-fluid w-75">
                    <div className="row d-flex justify-content-start pt-5">
                        <div className="col-lg-6 d-flex align-items-end">
                            <p className="fs-1 fw-medium jumbo-letters">
                                sip n' play
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-end justify mt-5 p-2">play boardgames from our collection of over 500+ games! Just $10 a person for 3 hours of gameplay all while enjoying our menu items</div>
                    </div>
                    <div className="mt-5 me-lg-5">
                        <div className="row pt-5  ">
                            <div className="col-lg-9 pe-lg-5">
                                <div id="carouselExampleIndicators" class="carousel slide  custom-carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={carousel1} className="d-block w-100 img-fluid" alt="..." style={{ height: "45rem" }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex justify-content-end ">
                                <div className="row d-flex justify-content-end ps-lg-5">
                                    <div class="card mt-5 mt-lg-1 optionc">
                                        <div class="card-body d-flex align-items-end justify-content-end">
                                            <button type="button" className="btn btn-outline-secondary btn-lg p-4">Reserve</button>
                                        </div>
                                    </div>
                                    <div class="card mt-5 mt-lg-1 optiond">
                                        <div class="card-body d-flex align-items-end justify-content-end">
                                            <button type="button" className="btn btn-outline-secondary btn-lg p-4">Map</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" className="mt-5 mt-lg-1 btn btn-custom btn-lg p-4">Reserve</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 pe-lg-5 pt-lg-5">
                        <div class="card heurs shadow">
                            <div class="card-body ms-lg-5 d-flex align-items-center justify-content-start" style={{color: "white"}}>
                                <p className="fs-3">
                                    <b >Opening hours</b> <br/>
                                    <hr/>
                                    Sunday: 10am-11pm <br/>
                                    Mon-Thurs: 11am-11pm <br/>
                                    Fri: 11am-midnight <br/>
                                    Sat: 10am-midnight <br/>
                                    Our kitchen closes 2.5-3 hours before we close!

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
