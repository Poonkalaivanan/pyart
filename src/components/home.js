import React from 'react';
import "react-widgets/styles.css";
import "../styles/home.css";
import Carousel from 'react-bootstrap/Carousel';
import img from "../artifacts/A size mm.jpg";
import all_0 from "../artifacts/All_0.jpg";
import all_1 from "../artifacts/All_1.jpg";
import couple_1 from "../artifacts/Couple_1.jpg"
import couple_2 from "../artifacts/Couple_2.jpg"
// import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselCaption from 'react-bootstrap/CarouselCaption'

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state={
            items : [
                {
                    name: "Random Name #1",
                    description: "Probably the most random thing you have ever seen!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                }
            ]
        }
    };
    render(){
        return(
            <React.Fragment>
                    <div class="content-description">
        {/* <h2>Description</h2> */}
        
        <h3>Memorable Gifts for Every Occasion</h3>
        
        <p>Looking for the perfect gift for your loved ones? Our portrait pencil sketches make a thoughtful and unique gift for:</p>
        <ul>
            <li>Your boyfriend, girlfriend, or best friend</li>
            <li>Housewarming parties</li>
            <li>Cradle ceremonies</li>
            <li>Baby's first birthday</li>
            <li>Weddings and anniversaries</li>
            <li>Rakshabandhan</li>
            <li>Father’s Day, Mother’s Day, and Women’s Day</li>
            <li>Valentine’s Day and Friendship Day</li>
            <li>Birthdays and more!</li>
        </ul>

        <h3>The Art of Gift Giving</h3>
        <p>Gift giving is an essential part of human interaction, allowing us to show appreciation and love for our family, friends, and loved ones. Each day can be made special with a meaningful gift.</p>

        <h3>Why Choose Our Portrait Pencil Sketches?</h3>
        <ul>
            <li><span class="highlight">Unique and Personal:</span> A portrait pencil sketch is a one-of-a-kind gift that captures the essence of the recipient.</li>
            <li><span class="highlight">Handmade by Professionals:</span> Our sketches are completely handmade by professional artists, ensuring high quality and attention to detail.</li>
        </ul>

        <p>Make every occasion memorable with our exquisite portrait pencil sketches, and let your well-wishers know how much they mean to you.</p>
    </div>
    <div className=' content-description quote note'>
        <h3>"Make your Lovable Moments into Memorable Portraits"</h3>
        <br></br>
        <h4>What is PYA?? </h4>
        <p>"Path for Your Artistic skills"</p>

    </div>
    <div class="content-description note" style={{animation: "mymove 5s infinite",color: "azure",fontWeight: "bolder"}}>
            <span>For Enquiry/order, kindly contact <a href="tel:+91-6383434347">+91-6383434347</a> or mail to <a href="mailto:pyaartgallery@gmail.com">pyaartgallery@gmail.com</a></span>
    </div>
    <CarouselCaption class="content-description" style={{marginBottom:"70px",background: "#cbcbcb", marginTop:"0px"}}>
        <h4 style={{textAlign:"center"}}>Take a look into some of our works </h4>
    <Carousel fade interval={5000} data-bs-theme="dark">
      <Carousel.Item>
      <img
          className="d-block w-100"
        style={{width:"700px", height:"600px", backgroundColor:"e5e5e5"}}
          src={all_0}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
        style={{width:"700px", height:"600px", backgroundColor:"e5e5e5"}}
          src={all_1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
        style={{width:"700px", height:"600px", backgroundColor:"e5e5e5"}}
          src={couple_1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
        style={{width:"700px", height:"600px", backgroundColor:"e5e5e5"}}
          src={couple_2}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </CarouselCaption>
            </React.Fragment>
        )
    }
}
export default Home;
