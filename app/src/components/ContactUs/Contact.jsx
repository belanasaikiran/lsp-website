import React from "react";
import { motion } from "framer-motion";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

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
            contact@lightspeedphotonics.com
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
            className="bg-linkedin py-2 px-4 text-white rounded mt-2 transition-colors duration-300"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/lightspeedai/",
                "_blank"
              )
            }
          >
            <FaLinkedin />
          </button>
          <button
            className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300"
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
    <div className="text-center  py-10 ">
      <h1 className="text-4xl text-gray-700 font-bold pb-10 ">
        Co
        <span className="underline-offset-[1rem] underline decoration-[0.4rem]  decoration-red-900">
          ntact{" "}
        </span>
        Us
      </h1>
      <div className="grid md:grid-cols-2 justify-items-center py-8 ">
        <div className="md:px-24">
          <motion.div
            className="box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <iframe
              title="map"
              className="rounded-2xl drop-shadow-lg md:h-[600px] md:w-[700px] w-max h-[300px] "
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1977635062718!2d103.83676189411264!3d1.300205243606868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1990e8a2fbd3%3A0x9b31156643ec9e88!2s111%20Somerset!5e0!3m2!1sen!2sin!4v1661257965341!5m2!1sen!2sin" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
        <div className="py-20 md:px-20">
          <div className="grid md:grid-cols-2 md:gap-20 md:px-0 px-10 gap-2 text-left align-center justify-evenly   ">
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
  );
}

export default Contact;
