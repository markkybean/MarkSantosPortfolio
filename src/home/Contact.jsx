import React from 'react'

function Contact() {
  return (
    <section id="contact" className="max-w-[1160px] w-full mx-auto mt-10 px-4 lg:px-0 " >
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-r pt-10 lg:pt-24 pb-8 lg:pb-10 px-4 lg:px-8 from-[#45174c] to-[#1c164d] rounded-lg flex-col justify-end items-center gap-10 lg:gap-16 w-full">
            <div className="flex justify-center items-center flex-col">
                <p className="text-stone-300 text-base lg:text-lg mb-4 lg:mb-6">CONTACT ME</p>
                <p className="text-white text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">Got a project? Let's talk!</p>
                <p className="text-stone-300 font-semibold text-lg lg:text-xl">marksantos320@gmail.com</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full mt-8 lg:mt-12">
                <p className="text-white font-bold hidden md:block text-lg lg:text-xl">Mark S. Santos</p>
                <div className="flex justify-between gap-4 lg:gap-8">
                    <p className="text-white font-semibold text-lg lg:text-xl">Home</p>
                    <p className="text-white font-semibold text-lg lg:text-xl">Services</p>
                    <p className="text-white font-semibold text-lg lg:text-xl">Portfolio</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
