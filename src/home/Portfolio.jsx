import React from 'react';
import Portfolio1 from '../assets/porfolio/image1.png'
import Portfolio2 from '../assets/porfolio/image2.png'
import Portfolio3 from '../assets/porfolio/portfolio-3.jpg'
import Portfolio4 from '../assets/porfolio/image4.png'
import Portfolio5 from '../assets/porfolio/image5.png'
import Portfolio6 from '../assets/porfolio/portfolio-6.jpg'
import Portfolio7 from '../assets/porfolio/image7.png'
import Portfolio8 from '../assets/porfolio/image8.png'
import Portfolio9 from '../assets/porfolio/portfolio-9.jpg'
import quotes from '../assets/porfolio/quotes.png'
import marvels from '../assets/porfolio/marvels.png'



function Portfolio() {
    return (
        <section id="portfolio" className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
            <h3 className="text-2xl text-[#C1C1C1]">PORTFOLIO</h3>
            <h3 className="text-[56px] font-bold text-white leading-[1]">My Recent Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-[51px]">
                <div className="grid gap-4" >
                    <a href="https://pixemotions.netlify.app" target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='text-white text-2xl mb-4'>Social Media</h1>
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" 
                        src={Portfolio1} alt="" />
                    </a>
                    <a href="https://marvel-api-pearl.vercel.app/" target="_blank" rel="noopener noreferrer"className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-white text-2xl mb-4'>Marvels Api</h1>
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={marvels} alt="" />
                    </a>
                    {/* <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio3} alt="" />
                    </a> */}
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                    <a href="https://marktechdashboard.netlify.app/"  target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-white text-2xl mb-4'>Employee Dashboard</h1>
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio4} alt="" />
                    </a>
                    <a href="https://studentrecordcrud.netlify.app" target="_blank" rel="noopener noreferrer"className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-white text-2xl mb-4'>Student Crud</h1>
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio5} alt="" />
                    </a>
                    {/* <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio6} alt="" />
                    </a> */}
                </div>
                <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                    <a href="https://quotes-api-fetcher.vercel.app/" target="_blank" rel="noopener noreferrer"className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-white text-2xl mb-4'>Quotes Generator API</h1>
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={quotes} alt="" />
                    </a>
                    <a href="https://redesignnationalsecuritycouncioffice.netlify.app/" target="_blank" rel="noopener noreferrer"className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-white text-2xl mb-4'>Redesign</h1>
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio8} alt="" />
                    </a>
                    {/* <a href="#" className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={Portfolio9} alt="" />
                    </a> */}
                </div>
                
            </div>
        </section>
    );
}

export default Portfolio;