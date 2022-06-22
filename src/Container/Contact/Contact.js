import React from "react";
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import Location from "../../assets/images/location.png";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 contact_section">
                        <h1>CONTACT US</h1>

                        <div className="contact_info">
                            <p> <img src={Phone} alt="Phone" /> 2137098447</p>
                        </div>
                        <div className="contact_info">
                            <p> <img src={Email} alt="Phone" /> aysemelisolcay@gmail.com</p>
                        </div>
                        <div className="contact_info">
                            <p> <img src={Location} alt="Phone" /> 325 W Adams Blvd, 4073A2 4073A2</p>
                        </div>

                        <div style={{ width: '100%' }}><iframe title={'map'} style={{ width: "100%", height: "350px", border: 'none', borderRadius: '10px', frameborder: "0", scrolling: "no", marginheight: "0", marginwidth: "0" }} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=325%20W%20Adams%20Blvd,%204073A2%204073A2+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">wearable gps</a></iframe></div>
                    </div>
                    <div className="col-md-6" style={{marginTop: '40px', padding: '0px'}} data-aos="zoom-in-up">
                        <div className="container-fluid">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="form-control" placeholder="Enter Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" placeholder="Enter Your Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" placeholder="Type the Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" placeholder="Write your Message Here" rows="5"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-end">
                                            <button className="get_touch_btn">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact