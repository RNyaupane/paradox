import React from 'react'
import workCulture from "../assets/work_culture.png"
import img1 from "../assets/img1.jpg"
import earthImage from "../assets/earth.png"

const Features = () => {
    return (
        <>
            <section className="py-5" id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <img src={workCulture} alt="Image" className="img-fluid rounded-3"/>
                        </div>
                        <div className="col-md-6">
                            <h1 className="" id="about-heading">Feature <span className="orange"> Ought</span> to Paratake</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <img src={img1} alt="Image" className="img-fluid rounded-3 shadow"/>
                        </div>
                        <div className="col-md-6 mt-4">
                            <img src={earthImage} alt="Image" className="img-fluid rounded-3"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features