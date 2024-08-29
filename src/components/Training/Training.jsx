import React from 'react'
import { Link } from 'react-router-dom'
import trainee from "../../assets/website/trainee.jpg"
import basicComputer from "../../assets/trainings/basicComputer.png"
import customerservice from "../../assets/trainings/customerservice.png"
import gd from "../../assets/trainings/graphic-design.png"
import salesforce from "../../assets/trainings/salesforce1.png"
import DigitalMarket from '../../assets/trainings/social-media.png'
import webd from "../../assets/trainings/website-design.png"
function Training() {
  return (
    <div>
        <section class="bg-gray-200 dark:bg-gray-800 py-20">
    <div class="container mx-auto px-4">
    <h1 class="text-2xl md:text-4xl pl-2 my-2 border-l-4  my-6 font-sans font-bold border-teal-400  dark:text-gray-200" data-aos="fade-up">
          IT Training
        </h1>
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="dark:text-white font-bold text-5xl leading-tight mb-6">Discover Best Training Module For You</h1>
                <p class="text-white text-xl mb-8"></p>Your premier destination for cutting-edge your gateway to mastering Salesforce with industry-leading training programs designed to elevate your skills and propel your career.
            </div>
            <div class="md:w-1/2">
                <img src={trainee} alt="Coffee beans"
                    class="w-full rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
</section>
{/* trainings */}
<div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-300"> IT Trainings</h2>
    <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Training we provide.</p>
    <div class="w-full dark:bg-gary-800">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white dark:bg-black  border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-400 ">Salesforce Training</h3>
                        </div>
                        <img class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase h-32 w-32" src={salesforce}></img>
                        <p class="mb-2 text-gray-500">We provide Salesforce training to enhance your CRM skills, streamline business processes, and boost career opportunities in customer management.</p>
                            <Link to="/salesforcetraining"><button className='primary-btn'>Explore</button> </Link> 
                    </div>
                    
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg dark:bg-black">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-400">Web Development</h3>
                        </div>
                        <img class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase h-32 w-32" src={webd}></img>
                        <p class="mb-2 text-gray-500">Our website development training covers building responsive sites, optimizing user experiences, and implementing modern web technologies for effective online presence.</p>
                            <Link to="/webdevTraining"><button className='primary-btn'>Explore</button> </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg dark:bg-black">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-400">Digital Marketing</h3>
                        </div>
                        <img class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase h-32 w-32" src={DigitalMarket}></img>
                        <p class="mb-2 text-gray-500">We offer digital marketing training to master SEO, PPC, social media, and content strategies for enhancing online visibility and engagement.</p>
                            <Link to="/digitalmarketingTraining"><button className='primary-btn'>Explore</button> </Link> 
                    </div>
                   
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg dark:bg-black">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-400">Graphic Designing</h3>
                        </div>
                        <img class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase h-32 w-32" src={gd}></img>
                        <p class="mb-2 text-gray-500"> We provide graphic design training to develop skills in creating impactful visuals, including branding, print, and digital graphics for effective communication.</p>
                            <Link to="/graphicTraining"><button className='primary-btn'>Explore</button> </Link> 
                    </div>
                   
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg dark:bg-black">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-400">Basic of Computers</h3>
                        </div>
                        <img class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase h-32 w-32" src={basicComputer}></img>
                        <p class="mb-2 text-gray-500">Our basics of computer training covers fundamental skills, including operating systems, software applications, and internet usage for a solid tech foundation.</p>
                            <Link to="/basicofcomputerTraining"><button className='primary-btn'>Explore</button> </Link> 
                    </div>
                  
                </div>
                
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg dark:bg-black">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-400">Customer Service</h3>
                        </div>
                        <img class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase h-32 w-32" src={customerservice}></img>
                        <p class="mb-2 text-gray-500"> Our customer service training focuses on improving communication skills, handling inquiries, and delivering exceptional service to enhance customer satisfaction and loyalty.</p>
                            <Link to="/customerserviceTraining"><button className='primary-btn'>Explore</button> </Link>
                    </div>
                     
                </div>
                
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Training