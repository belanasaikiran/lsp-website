import React from "react";
import YourNest from "../../assets/Investors/yournest-logo-1.jpeg";
import EF from "../../assets/Investors/ef_logo.png";
import GrowX from "../../assets/Investors/GrowX.png";
import Luminate from "../../assets/Investors/Luminate-NC-6-9-21-1000.jpg";
import ESG from "../../assets/Investors/ESG.png";

const InvestorsInfo = [
  {
    image: EF,
    alt_name: "EF Logo",
    CompanyName: "Entrepreneur First",
    description:
      "Entrepreneur First(EF) is the world’s leading talent investor, and pioneered the model of investing in people before they have a company or team. EF is passionate about supporting ambitious, talented people to maximise their impact, and accelerate their lives and career paths. EF was founded on the premise that the world is missing out on some of its best founders. Restricted by lack of resources, time, networks, geography and opportunity, people with the potential to found the most important technology of the future were not. EF's 6-month long programme breaks down those barriers and opens the door to entrepreneurship for the next generation of leading founders.",
    link: "https://www.joinef.com/",
  },
  {
    image: Luminate,
    alt_name: "Luminate Logo",
    CompanyName: "Luminate NextCorps",
    description:
      "Luminate is the world’s largest accelerator for startups working on emerging solutions that are enabled by optics, photonics, and imaging (OPI). It accepts 10 companies from around the world into its program per year, and immediately invests $100K in each. Upon program completion, the startups compete for up to $2M in follow-on funding.",
    link: "https://luminate.org/",
  },
  {
    image: ESG,
    alt_name: "Enterprise SG Logo",
    CompanyName: "Enterprise Singapore",
    description:
      "Enterprise Singapore is a statutory board under the Ministry of Trade and Industry of the Government of Singapore.  It supports Singapore small and medium enterprise development, upgrade capabilities, innovate, transform, and internationalise. It also supports the growth of Singapore as a trading and startup hub, and continues to be the national standards and accreditation body.",
    link: "https://www.enterprisesg.gov.sg/",
  },
  {
    image: YourNest,
    alt_name: "Your Nest Logo",
    CompanyName: "Your Nest",
    description:
      "YourNest is a sharply focused early-stage DeepTech VC fund from India, deploying from its second fund of US$ 45 mn to invest in Indian startups with a focus on DeepTech (IoT, AI/ML, Robotics, Cloud, Automation, etc) SaaS-oriented businesses building IP for global markets.",
    link: "https://yournest.in/",
  },
  {
    image: GrowX,
    alt_name: "GrowX Logo",
    CompanyName: "GrowX",
    description:
      "growX is a B2Band DeepTech focused early-stage venture fund which works closely with investee firms at both strategic and operational levels to drive scale and success. Its investments are focused on seed and pre-Series A stages across a wide range of sectors. growX has invested in over 35 companies like Fynd, Locus, Mad Street Den, Pixxel, Progcap, Wellthy, and Zipolan, among others.",
    link: "https://yournest.in/",
  },
];

function Investors() {
  return (
    <div className="md:px-80 px-2 pb-16 bg-gray-100">
    <h1 className="text-center text-5xl font-bold py-4 uppercase" >Our Investors</h1>
      {InvestorsInfo.map((investor) => (
        <div className="grid md:grid-cols-3 justify-items-center md:gap-0 gap-4   py-4 hover:scale-105 hover:bg-gray-200 hover:rounded-lg   duration-300 transition-all  ">
          <div className="md:pl-16 md:col-span-1 col-span-2   ">
            <img
              src={investor.image}
              className="md:w-64 md:h-64 w-full   "
              alt={investor.alt_name}
            />
          </div>
          <div className="px-4 col-span-2 grid grid-cols-1 md:gap-0 gap-4  content-around  ">
            <h1 className="md:text-4xl text-2xl font-base  text-red-900">
              {investor.CompanyName}
            </h1>
            <p className="text-x ">{investor.description}</p>
            <a
              href={investor.link}
              target="_blank"
              className="font-semibold text-red-800 hover:text-black "
              rel="noreferrer"
            >
              {" "}
              More info &#62;{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Investors;
