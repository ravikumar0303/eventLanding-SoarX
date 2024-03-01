
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import img from './images/event.jpg';
import soarx from './images/soarX.jpg';

const RegistrationForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,contact,college,branch,year);
    
    try {
      const response = await axios.post('https://sheet.best/api/sheets/ef0d18e7-9751-4bb5-aa30-022082f428f2', {
        name,
        email,
        contact,
        college,
        branch,
        year,
      });

  //    
  
  console.log(response.data);
    // Handle successful registration or any other logic you need
  } catch (error) {
    console.error('Error submitting registration:', error);
    // Handle registration failure or any other logic you need
  }

  // Close the registration modal after submission
  onClose();
};

  return (
    
    <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Info</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name*</label>
                <input type="text" className="form-control" class="form-control" placeholder="Your Name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email*</label>
                <input type="email" className="form-control"  placeholder="You@email.com" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Phone*</label>
                <input type="tel" className="form-control"  placeholder="+91 7612345678"  id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label htmlFor="college" className="form-label">College*</label>
                <input type="text" className="form-control" id="college" name="colege" value={college} onChange={(e) => setCollege(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch*</label>
                <input type="text" className="form-control"  placeholder="CSE"  id="branch" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label htmlFor="year" className="form-label">Year*</label>
                <input type="text" className="form-control"   placeholder="2024-03-3" id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} required />
              </div>

              {/*  */}
              
              <button type="submit" className="btn btn-primary"  >Register</button>
            

            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};


const App = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <div  >

       <div>
          <img src={img} className='img-event'/>
        </div>
          <div class="text" >
        <h4 className='event-text'>Hosted By</h4>
        <img  className='post-event' src={soarx} alt="Event Poster"/><h4 className='event-text'>SoarX</h4>

        <div className='event-text'>
        <h2 >Event Details</h2><br></br> 
         <h6 >Date: February 1, 2024</h6>    
            <h6 >Time: 7:00 PM - 10:00 PM</h6>
           <h6>Location: Virtual Event</h6>
       
       </div>

      </div>

      <div className="container">
      <header className="text-center mt-5">
        <h1>Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top Placements</h1>
        <div>
          <br></br>
          <div class='about'><h5>Sunday, October 22, 2023</h5><br></br></div>
          <div class='about'>12:00 PM - 1:00 PM GMT+5:30</div>
              <br></br>
              <div class='about'><h5>YouTube</h5></div>
              <br></br><br></br>
          <header1>
          <div class="registergrid">
               <h6>Registration Form</h6>
               </div>
            <hr></hr>
            <div class='about'><h5>Past Event</h5><br></br></div>
            <div class='about'>This event ended 78 days ago</div>
            
                 <hr></hr>
                 <h5>Welcome! To Join the event, please register below</h5>         
                {/* <button  type="submit" class="button">Registration</button> className="btn btn-primary" */}
          <button class="button" onClick={() => setShowRegistrationModal(true)}>Register Now</button>

          {/* --- */}
          </header1>
          <br></br>
          <div class='about'><h6>About Event</h6></div>
             
         <hr></hr>
         <div class='about'><h6>🚀 Microsoft SDE Secrets:Tips by Anshima Choudhary for Landing Top</h6></div>
        <div class='about'><h6>Placements 🚀</h6></div> <br></br>
        <h6>Join us for an exclusive session with Anshima Choudhary, a seasoned Senior Software Development Engineer at Microsoft. Are you a student aspiring to excel in placement interviews and secure top positions?
         This is an opportunity you can't afford to miss!</h6>
       <br></br>

       <h6 class='about'>🔍 Session Highlights:</h6>
       <h6>  - Gain Insider Tips: Discover the insider knowledge and strategies that have propelled Anshima to success in her career at Microsoft.
        - Placement Interview Mastery: Learn how to approach and excel in placement interviews, and get a step ahead in the competitive tech industry.
        - Career Insights: Get invaluable insights on building a successful career in software development, directly from a Microsoft expert.</h6>
        <br></br>
        <h6 class='about'>👩‍💼 About Ravi Kumar:
        I am writing to express my interest in the Software Developer role at Now &Me. I recently completed my PG Diploma in Advanced Computing from CDAC Pune,specializing in Java, Spring Boot, .NET Framework, MySQL, MongoDB, React.js, aws, Docker, and more. With a technical certification from IT-ITES SSC Nasscom,I am eager to contribute my skills to your team.
       <div class='about'>Attached is my resume for your reference.</div></h6>
       
       <h6> <div class='about'> <lebel> <a href="https://ravikumar0303.github.io/portfolio">portfolio</a></lebel></div>
        <div class='about'>  Best Regards,</div>
        <div class='about'>  Ravi Kumar</div>
        <div class='about'> Delhi, Delhi</div>
        <div class='about'> Contact : +91 7607890632</div><br></br>
        
        <div class='about'>📅 Event Details:</div>
        <div class='about'> Date: October 22, 2023</div>
        <div class='about'> ;Time: 12:00pm - 01:00pm</div><br></br></h6>
        
       <h6 class='about'> 📚 Who Should Attend:</h6>
       <h6 class='about'>- Students aspiring for a career in software development</h6>
        <h6 class='about'> - Tech enthusiasts seeking insider tips from a Microsoft expert</h6>
        <h6 class='about'> - Anyone looking to enhance their interview and career-building skills</h6> <br></br>
      
       <h6 class='about'> 👥 About SoarX Network:
          SoarX Network is a dynamic community of 2500+ college students passionate about technology, innovation, and career development.
        <br /><br />
        🌟 Don't miss out on this incredible opportunity to learn from one of the best in the industry. Secure your spot now and take the first step towards your dream career!
        🌟<br /><br /></h6>
        <h6 class='about'>🌐 Connect with Us:</h6>
        {/* <Link to="">Go to Another Page</Link> */}
        <div class='about'><a href="https://chat.whatsapp.com/CFeDvPQmH5v2Hg4tzHjr8g">-WhatsApp Group</a></div>
        <div class='about'><a href="https://twitter.com/SoarXNetwork">-Twitter</a></div>
        <div class='about'><a href="https://www.instagram.com/soarxnetwork/">-Instagram</a></div>
        <div class='about'> <a href="//www.linkedin.com/company/soarxnetwork/">-Linkedin</a></div><br></br>
        <div class='about'>#Microsoft #TechCareer #PlacementSuccess #AnshimaChoudhary</div> 
        <div class='about'>#SoarXNetwork #SoftwareDevelopment</div>
        <br></br><br></br><br></br>
        {/* "startDate":"2023-10-22T12:00:00.000+05:30","endDate":"2023-10-22T13:00:00.000+05:30","offers":[{"@type":"Offer","validFrom":"2023-10-14T00:00:00.000+05:30","availabilityStarts":"2023-10-14T00:00:00.000+05:30","url":"https://lu.ma/sde-tips","name":"General Admission","price":0,"priceCurrency":"usd","availability":"https://schema.org/InStock"}],"organizer":[{"@type":"Organization","name":"SoarX","url":"https://lu.ma/u/usr-Z3O3PbajvtSWrSA"}],"performer":[{"@type":"Organization","name":"SoarX","url":"https://lu.ma/u/usr-Z3O3PbajvtSWrSA"}] */}
    </div>
    </header>
    
    </div>
    <hr></hr><br></br><br></br><br></br>
        {/* --- */}
        
      


{showRegistrationModal && (
        <RegistrationForm onClose={() => setShowRegistrationModal(false)} />
      )}
    </div>
  );
};

export default App;