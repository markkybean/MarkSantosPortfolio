import React, { useRef, useState } from 'react';
import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_90txpft', 'template_cbr8hvl', form.current, {
                publicKey: 'WNZgztzu5PfTOQO6C',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Clear form fields
                    setFormData({
                        from_name: '',
                        from_email: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="max-w-[1160px] w-full mx-auto mt-10 px-4 lg:px-0">
            <div data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-r pt-10 lg:pt-24 pb-8 lg:pb-10 px-4 lg:px-8 from-[#45174c] to-[#1c164d] rounded-lg flex-col justify-end items-center gap-10 lg:gap-16 w-full">
                <div className="flex justify-center items-center flex-col">
                    <p className="text-stone-300 text-base lg:text-lg mb-4 lg:mb-6">CONTACT ME</p>
                    {/* <p className="text-stone-300 text-base lg:text-lg mb-4 text-center lg:mb-6">Reach out and let's turn your ideas into reality! Drop me a message below and let's start crafting something incredible together.</p> */}

                    <Card className='mb-10 bg-gray-800' shadow={false}>
                        <form ref={form} onSubmit={sendEmail} className="p-10 lg:p-10 mt-4 lg:mt-8 mb-2 lg:mb-4 w-full max-w-screen-md">
                            <div className="mb-4 flex flex-col gap-4 lg:gap-6">
                                <Typography variant="h6" color="white" className="-mb-3">
                                    Your Name
                                </Typography>
                                <Input
                                    name='from_name'
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    size="lg"
                                    placeholder="Mark Santos"
                                    required
                                    className="pe-16 !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                                    labelProps={{
                                        className: "before:content-none after:content-none text-white",
                                    }}
                                />
                                <Typography variant="h6" color="white" className="-mb-3">
                                    Your Email
                                </Typography>
                                <Input
                                    name='from_email'
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    size="lg"
                                    placeholder="name@mail.com"
                                    required
                                    className="pe-16 !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                                    labelProps={{
                                        className: "before:content-none after:content-none text-white",
                                    }}
                                />
                                <Typography variant="h6" color="white" className="-mb-3">
                                    Message
                                </Typography>
                                <Textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    type="text"
                                    size="lg"
                                    placeholder="Type your message here"
                                    required
                                    className="pe-16 pb-16  !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                                    labelProps={{
                                        className: "before:content-none after:content-none text-white",
                                    }}
                                />
                            </div>

                            <div className="flex justify-center">
                                <Button type="submit" className="bg-[#45174c] text-white mt-4 lg:mt-6">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </Card>
                    <p className="text-white text-2xl lg:text-3xl font-bold mb-3 lg:mb-6">Got a project? Let's talk!</p>
                    <p className="text-stone-300 font-semibold text-lg lg:text-xl">marksantos320@gmail.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
