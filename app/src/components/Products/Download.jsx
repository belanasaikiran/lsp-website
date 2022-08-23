import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [value, setValue] = React.useState();
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
                <div className="p-5 border-b border-solid border-slate-200" >
                <div className="flex items-start justify-between  rounded-t  ">
                  <h3 class=" text-2xl font-medium text-red-900 dark:text-white text-left">
                    Download
                  </h3>
               
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black hover:text-red-900  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
                <p>Please enter your details and project information. <br /> We will get back to you.</p>
                </div>

                <div className=" px-50 py-5  flex flex-row ">
                  <form class="space-y-6 px-10 " action="#">
                    <div className="grid md:grid-cols-2 text-gray-900 gap-4 ">
                      <div>
                        <label
                          for="name"
                          class="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div>
                        <label
                          for="mobile"
                          class="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Mobile Number*
                        </label>
                        <input
                          name="mobile"
                          type="number"
                          id="mobile"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="mobile"
                          required
                        />
                  
                      </div>
                      <div>
                        <label
                          for="company"
                          class="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Company Name*
                        </label>
                        <input
                          name="company"
                          type="text"
                          id="company"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Company"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="application"
                          class="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Target Application*
                        </label>
                        <input
                          name="application"
                          type="text"
                          id="application"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Application"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="quantity"
                          class="block mb-2 text-sm font-medium  dark:text-gray-300"
                        >
                          Quantity*
                        </label>
                        <input
                          name="quantity"
                          type="number"
                          id="quantity"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Quantity"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium  dark:text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        className="bg-gray-50 border-gray-300 w-full"
                        maxLength={150}
                      ></textarea>
                    </div>

                    <div className="flex  items-center justify-center">
                      <button
                        type="submit"
                        class="  text-white bg-red-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center "
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
