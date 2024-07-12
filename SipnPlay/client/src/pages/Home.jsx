import Header from "../components/Header"


export default function Home() {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 pt-5 ">
                <div className="row justify-content-center">
                    <div className="col-lg-3  col-sm-1 .fs-1 mt-2 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://www.shutterstock.com/image-photo/pink-restaurant-food-aesthetic-frankfurt-600nw-2291701097.jpg" class="card-img-top" alt="..." />
                                <h5 class="card-title .fs-1"> News and Media</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn custom-button">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-1 .fs-2 mt-2">
                        <div className="row">
                            <div>
                                <div class="card" style={{ width: "100%", height: "400px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">How It Works!</h5>
                                        <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
                                        <br /><br />
                                        <p class="card-text">Come on in with your friends and family and play boardgames from our collection of over 500+ games! Just $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays) Play while enjoying bubble tea, coffee, beer sandwiches or salads and have a great time! If you want to guarantee a table, you can make a reservation which is $15 a person for 3 hours of gameplay. </p>
                                        <img src="https://78.media.tumblr.com/0f339401897b69161534abe5989bc7e3/tumblr_p1oe741BmU1wp3fx2o4_1280.png" class="card-img-top" alt="..." />
                                    </div>

                                </div>
                            </div>
                            <div className="mt-4">
                                <div class="card" style={{ width: "100%", height: "600px" }}>
                                    <div class="card-body">
                                        <img src="https://i.ibb.co/wrMWLVb/image-2024-07-12-090511776.png" style={{ scale: "1" }} class="card-img-top" alt="..." />
                                        <br />
                                        <p class="card-text mt-3"><a className="navItem" href="">Map Location</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-sm-1 .fs-1 mt-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Reservations are For Any Party Size!</h5>
                                <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
                                <p class="card-text">For large parties (9+ or more people), please email us at sipnplaynyc@gmail.com to inquire about a reservation.</p>
                                <a href="https://www.exploretock.com/sipnplay" className="card-link navItem">Make Reservation</a>
                            </div>
                        </div>

                        <div class="card mt-4 mt-2" style={{ width: "18rem" }}>
                            <img src="https://604now.com/wp-content/uploads/2022/11/Featured-Image-3-1024x683.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Hours and Location</h5>
                                <p class="card-text">
                                    <b>New opening hours:</b> <br />

                                    Sunday: 10am-11pm <br />

                                    Mon-Thurs: 11am-11pm <br />

                                    Fri: 11am-midnight <br />

                                    Sat: 10am-midnight <br />
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">471 5th Ave.</li>
                                <li class="list-group-item">Brooklyn, NY 11215</li>
                                <li class="list-group-item">sipnplaynyc@gmail.com</li>
                                <li class="list-group-item">718-971-1684</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
