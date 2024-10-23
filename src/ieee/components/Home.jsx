import React from 'react';
import "../styles/home.css";
import sh from '../assets/sh.jpg'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.png'
import icon from '../assets/icon.png'


const Home = () => {
  return (
    <>
      <header className='Intro' aria-label="IEEE CIS Club Introduction">
        <h1 className='h1'>Empowering Innovation, Shaping Intelligent Futures</h1>
        <p>At the forefront of technological evolution, the IEEE CIS Club is a dynamic community of innovators, thinkers, and creators dedicated to advancing the field of computational intelligence.</p>
        <div>
          
          
        </div>
      </header>
      
      
        <section className='about'>
          <div className='ab-img'>
            <img src={img_1} alt='Tech'></img>
          </div>
          <div className='ab-p'>
          <h1 className='h1'>About us</h1>
          <p>The IEEE Computational Intelligence Society (CIS) Club is a dynamic community of students passionate about artificial intelligence, machine learning, and intelligent systems. We organize workshops, seminars, and hands-on projects, fostering innovation and technical excellence. Our club encourages research, collaboration, and participation in global competitions, preparing students for leadership in AI-driven industries. Through networking and mentorship, we connect members with industry experts and academic leaders, creating opportunities for career growth and skill development. Whether you’re a beginner or an enthusiast, the CIS Club is your gateway to exploring the exciting world of computational intelligence.</p>
         
          
          
          </div>
          
        </section>
        
        <section >
        <div className='membership'>.</div>
          <section className='white-bg'>
          <p>.</p> 
          <img src={sh} alt='shaking-hands' className='sh'></img>
          <div className='white-bg2'>
              <section className='content'> 
                {/* <div>Become a part of our community</div> */}
               
             <div className="card-container">
               <div className="card-header">
               <div className="img-avatar">
                <img src= {icon} alt='IEEE logo'></img>
               </div>
                <div className="text-chat">IEEE Community</div>
               </div>
                <div className="card-body">
                <div className="messages-container">
                  <div className="message-box left">
                   <p>Passionate about tech? Join IEEE CIS and connect with fellow innovators driving change.</p>
                  </div>
               
                </div>
               <div className="message-input">
                <form>
               <textarea placeholder="Type your message here" className="message-send"></textarea>
                  <button type="submit" className="button-send">Join now</button>
                 </form>
               </div>
              </div>
              </div>


              </section>
         
          </div>
          </section>
        </section>

      

        <section className='mission'>
        <main>
        <section>
        </section>
        <section className='main-content'>
          <img src={img_2} alt='Our Mission'></img>
          <p ><b style={{fontSize:'2.4em'}} className='h1'>Our mission:</b><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur accusamus quaerat corrupti quam consequatur modi saepe vitae, obcaecati veritatis dolorum officia itaque inventore illum quae sint minus totam magnam!</p>
         
        </section>
        </main>

        </section>
       
       
    
      
   
      
    </>
  );
};

export default Home;
