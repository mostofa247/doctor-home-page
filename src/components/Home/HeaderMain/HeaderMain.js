import React from 'react';
import chair1 from "../../../images/chair1.png"

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile<br /> <span class="text-info">Start Here</span></h1>
                <p className="text-secondary">Are you looking for Dentist near me or Best Dentist or Best Dental Clinic in Uttara, Dhaka, Bangladesh? Yes, you are in the right place. LASER DENTAL is one of the most hi-tech dental clinics in Dhaka, serving all of your dental needs , with special emphasis on Laser Dentistry, Painless Injection Facility and Scanning Whole Mouth with world’s most advanced Intra-oral scanner.</p>
                <button type="button" class="btn btn-info">Get Appointed</button>
            </div>
            <div className="col-md-6">
                <img src={chair1} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;