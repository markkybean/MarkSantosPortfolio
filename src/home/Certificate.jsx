import {
    Carousel,
    IconButton
} from "@material-tailwind/react";
import React from 'react'
import Reacthooks from '../assets/certificate/reacthooks.png'
import Tailwind from '../assets/certificate/tailwind.png'
import Javascript from '../assets/certificate/javascript.png'
import SQL from '../assets/certificate/sql.png'
import Responsive from '../assets/certificate/responsive.png'
import Typescript from '../assets/certificate/typescript.png'

export default function Certificate() {
    return (
        <section className="max-w-[1160px] w-full mx-auto mt-[168px] px-[24px] lg:px-0">
            <div className="text-center">
                <h1 className="text-[40px] text-white font-bold leading-[1] mb-3">Certificates</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"
                className="bg-gradient-to-r flex flex-col lg:flex-row justify-center items-center from-fuchsia-500/[30%] to-indigo-600/[30%] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                <Carousel
                    className="rounded-xl w-full max-w-[500px] mx-auto" // Centering the carousel
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    <a href="https://drive.google.com/file/d/170oOQZX5JbLPvA6hncALS7hCT9NnzIk7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Reacthooks}
                            alt="React Hooks Certificate"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <a href="https://drive.google.com/file/d/1gY_WyyamP2aJnEkGOF9oUGeBa1sQz_T_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Tailwind}
                            alt="Tailwind Certificate"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <a href="https://drive.google.com/file/d/1w6tSkLWRCO-iM09OnnKlldBJwh_XaQDp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Javascript}
                            alt="Javascript Certificate"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <a href="https://drive.google.com/file/d/1yX3ON6cwHaqTQseLKZ6PPDn-hY3AOP6W/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <img
                            src={SQL}
                            alt="SQL Certificate"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <a href="https://drive.google.com/file/d/1Dk3rvLsRNS-bYoqnJpj6L7e__VWlAXXJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Typescript}
                            alt="Mastering Typescript - 2025 Edition"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <a href="https://www.freecodecamp.org/certification/markkybean/responsive-web-design" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Responsive}
                            alt="Responsive Design Certificate"
                            className="h-full w-full object-cover"
                        />
                    </a>

                </Carousel>
            </div>
        </section>

    );
}
