import React from 'react';
import Slider from 'react-slick';
import testimonialData from '../../../data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialSuccess() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          margin:""
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )

  };

  return (
    <div className='  '  >
         <div className=" text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Success Stories
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Trainee
            </p>
          </div>
      <div className=' mt-8' data-aos="fade-up">
        <Slider {...settings}>
          {testimonialData.testimonialSuccess.map(testimonial => (
            <div key={testimonial.id} className="mx-auto rounded-md  p-1">
              <div className="flex flex-col rounded-md bg-gray-800">
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="mb-4 flex space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ))}
                  </div>
                  <div className="flex-1 pt-2">
                    <blockquote>
                      <p className="text-lg text-gray-200">
                        {testimonial.text}
                      </p>
                    </blockquote>
                  </div>
                  <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                    <div className="flex items-center">
                      <img
                        className="h-20 w-20 flex-shrink-0 rounded-full object-cover"
                        src={testimonial.img}
                        alt={testimonial.name}
                      />
                      <div className="ml-3 min-w-0">
                        <p className="truncate text-base font-semibold text-gray-200">{testimonial.name}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSuccess;
