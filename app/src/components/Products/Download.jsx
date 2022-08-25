import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-red-900 hover:bg-red-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Download Brochure
      </button>
      {showModal ? (
        <>
          <div className="justify-center md:items-center flex md:overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="md:border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="p-5 border-b border-solid border-slate-200">
                  <div className="flex items-start justify-between  rounded-t  ">
                    <h3 className=" text-2xl font-medium text-red-900 dark:text-white text-left">
                      Download
                    </h3>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black hover:text-red-900  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <p>
                    Please enter your details. <br /> We will get back to you.
                  </p>
                </div>

                <div className=" px-50 py-5  flex flex-row ">
                  <form className="space-y-6 px-10 " action="#">
                    <div className="grid md:grid-cols-2 text-gray-900 gap-4 ">
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Work Email"
                          required
                        />
                      </div>

                      <div>
                        <label
                          for="mobile"
                          className="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Mobile Number*
                        </label>
                        <input
                          name="mobile"
                          type="number"
                          id="mobile"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Mobile"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="company"
                          className="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Company Name*
                        </label>
                        <input
                          name="company"
                          type="text"
                          id="company"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Company"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="application"
                          className="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Target Application
                        </label>
                        <input
                          name="application"
                          type="text"
                          id="application"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Application"
                        />
                      </div>
                      <div>
                        <label
                          for="country"
                          className="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Country
                        </label>
                        <input
                          name="country"
                          type="text"
                          id="country"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Country Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="message"
                        className="block mb-2 text-sm font-medium  dark:text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        className="bg-gray-50 border-gray-300 w-full"
                        maxLength={150}
                      />
                    </div>

                    <div className="flex  items-center justify-center">
                      <button
                        type="submit"
                        className="  text-white bg-red-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
