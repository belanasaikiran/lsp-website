import React from "react";
import { motion } from "framer-motion";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneLike, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import MAP from "../../assets/images/map-image.png";

function Contact() {
  const ContactInfo = [
    {
      icon: <BsFillPhoneFill className="w-7 h-7 pr-2 text-black" />,
      title: "Phone",
      description: (
        <div>
          For immediate assistance, please call <br />{" "}
          <span className="font-semibold">+65 8741 5785</span>
        </div>
      ),
    },
    {
      icon: <MdEmail className="w-7 h-7 pr-2 text-black" />,
      title: "Email",
      description: (
        <div>
          For general information or inquires, please email us at{" "}
          <span className="font-semibold">
            {" "}
            contact[at]lightspeedphotonics[dot]com
          </span>
        </div>
      ),
    },
    {
      icon: <ImLocation2 className="w-7 h-7 pr-2 text-black" />,
      title: "Address",
      description:
        "LightSpeed Photonics Private Limited © 2021 Registered Address:  #08-10A, 111 Somerset, Somerset Road, 238164 - Singapore",
    },
    {
      icon: <AiTwotoneLike className="w-7 h-7 pr-2 text-black" />,
      title: "Social Media",
      description: (
        <div className="flex flex-row ">
          {" "}
          <button
            className="bg-linkedin py-4 px-5 text-white hover:bg-gray-700  rounded ml-2 mt-2  transition-colors duration-300"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/lightspeedai/",
                "_blank"
              )
            }
          >
            <FaLinkedin className="" />
          </button>
          <button
            className="bg-twitter py-4 px-5 text-white hover:bg-gray-700  rounded ml-2 mt-2 transition-colors duration-300"
            onClick={() =>
              window.open("https://twitter.com/LSPhotonics", "_blank")
            }
          >
            <FaTwitter />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      className="text-center pt-10  " >
      <div>
        <h1 className="text-4xl text-gray-700 font-bold pb-10 ">
          Co
          <span className="underline-offset-[1rem] underline decoration-[0.4rem]  decoration-red-900">
            ntact{" "}
          </span>
          Us
        </h1>
        <div className="grid lg:grid-cols-2 justify-items-center py-8 ">
          <div className="">
            <motion.div
              className="box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <iframe
                title="map"
                className="rounded-2xl drop-shadow-lg xl:h-[600px] xl:w-[700px] lg:h-[500px] lg:w-[650px]   w-screen md:px-10 lg:px-5  h-[300px] "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.57344159325!2d103.80216944525502!3d1.303500827536251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1990e8a2fbd3%3A0x9b31156643ec9e88!2s111%20Somerset!5e0!3m2!1sen!2sin!4v1661304390249!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
          <div className="py-20 xl:px-20 lg:px-10 px-0">
            <div className="grid md:grid-cols-2 lg:gap-20 md:gap-10 md:px-10 px-10 gap-2 text-left align-center justify-evenly   ">
              {/* Contact Info */}
              {ContactInfo.map((info) => (
                <div>
                  <h6 className="text-xl font-medium uppercase mb-2 inline-flex text-red-900">
                    <span> {info.icon} </span> {info.title}
                  </h6>
                  <p className="text-gray-400 text-lg ">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* write to US */}
      <div className="py-16 bg-gray-100 xl:px-80 md:px-10 ">
        <h1 className="text-3xl text-red-900 font-bold py-4 ">Write to Us</h1>
        <div className=" py-5    ">
          <form className="space-y-6  " action="#">
            <div className=" grid xl:grid-cols-2  text-gray-900 gap-4 md:px-0 px-8">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-sm  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Email"
                required
              />

              <textarea
                rows="10"
                name="message"
                className=" md:col-span-2 bg-gray-50 border border-gray-300 text-sm  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                maxLength={280}
                placeholder="your message"
              />
            </div>
            <button
              type="submit"
              className="  inline-flex text-white bg-red-900 hover:bg-white hover:text-red-900 hover:border-2 hover:border-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-base px-8 py-2.5 text-center "
            >
              Send <AiOutlineMail className="ml-2 mt-1 scale-110" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
