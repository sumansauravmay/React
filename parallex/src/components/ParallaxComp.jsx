import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const ParallaxComp = () => {
  return (
    <ParallaxProvider>
      <div>
        <div>
          <Parallax speed={-100}>
              <img style={{height:'200px', marginBottom:"100px"}}
                src="https://images.pexels.com/photos/27383293/pexels-photo-27383293/free-photo-of-a-woman-in-a-baseball-cap-and-black-leggings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="image"
              />
          </Parallax>
       
          <p style={{width:"50%", marginTop:"50px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            repellat fugiat rerum hic odio. Vero temporibus exercitationem rem
            adipisci dignissimos vel necessitatibus id laborum tempora? Enim
            impedit facilis suscipit non.
          </p>
        </div>

        <div>
          <Parallax speed={-20}>
              <img style={{height:'200px', marginTop:"100px"}}
                src="https://images.pexels.com/photos/27922121/pexels-photo-27922121/free-photo-of-a-woman-in-glasses-sitting-on-rocks-by-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="image"
              />
          </Parallax>
          <p style={{width:"50%", marginTop:"-10px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ut
            dolore molestias accusantium consequatur voluptatum eligendi
            suscipit distinctio maxime earum ducimus autem est explicabo nihil
            aliquid officia quod, numquam unde!
          </p>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxComp;
