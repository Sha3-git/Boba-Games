import Header from "../components/Header"


export default function Home() {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 pt-5 ms-5 me-5-l">
                <div className="row">
                    <div className="col-lg-5  col-sm-1 .fs-1">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://www.shutterstock.com/image-photo/pink-restaurant-food-aesthetic-frankfurt-600nw-2291701097.jpg" class="card-img-top" alt="..." />
                                <h5 class="card-title .fs-1"> News and Media</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn custom-button">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-1 .fs-2">
                        <div className="row">
                            <div>
                                <div class="card" style={{ width: "100%", height: "400px" }}>
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div class="card" style={{ width: "100%", height: "400px" }}>
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-sm-1 .fs-1">
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>

                        <div class="card mt-4" style={{width: "18rem"}}>
                            <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
