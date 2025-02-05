import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Teamcard() {
  return (
    <div className="grid grid-cols-4 w-4/5 h-auto mx-32 gap-2 justify-center rounded-xl">
    

    <div className="w-full h-auto grid grid-col-3 justify-center border-2 border-gray-200 rounded-xl m-2 bg-blue-500 p-2 bg-opacity-20 backdrop-blur-lg drop-shadow-xl items-center">
      <div className="flex justify-center rounded-lg">
        <Image className="rounded-md" src="/kaif.jpg" width={200} height={200} alt="kaif" />
      </div> 
      <div className="grid grid-rows-2 font-bold text-center m-4">
        <h2 className="font-bold text-center text-white">Mohd Kaif</h2>
        {/* <h3 className="text-gray-600">Web Devlopment Organizer</h3 */}
      </div>
      <div className="flex justify-center mt-2">
        <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
      </div>
    </div>

    <div className="w-full h-auto grid grid-col-3 justify-center border-2 border-gray-200 rounded-xl m-2 bg-red-500 p-2 bg-opacity-20 backdrop-blur-lg drop-shadow-xl items-center">
      <div className="flex justify-center rounded-lg">
        <Image className="rounded-md" src="/am.jpeg" width={200} height={200} alt="amrdeep" />
      </div> 
      <div className="grid grid-rows-2 font-bold text-center m-4">
        <h2 className="font-bold text-center text-white">Amardeep Rao</h2>
        {/* <h3 className="text-gray-600">Web Devlopment Organizer</h3> */}
      </div>
      <div className="flex justify-center mt-2">
        <a href="https://www.linkedin.com/in/amardeep16" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
      </div>
    </div>

    <div className="w-full h-auto grid grid-col-3 justify-center border-2 border-gray-200 rounded-xl m-2 bg-green-500 p-2 bg-opacity-20 backdrop-blur-lg drop-shadow-xl items-center">
      <div className="flex justify-center rounded-lg">
        <Image className="rounded-md" src="/h.jpeg" width={200} height={200} alt="abhishek" />
      </div> 
      <div className="grid grid-rows-2 font-bold text-center m-4">
        <h2 className="font-bold text-center text-white">Humaira Hashmi</h2>
        {/* <h3 className="text-gray-600">Web Devlopment Organizer</h3> */}
      </div>
      <div className="flex justify-center mt-2">
        <a href="https://www.linkedin.com/in/humaira-hashmi03" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
      </div>
    </div>

    <div className="w-full h-auto grid grid-col-3 justify-center border-2 border-gray-200 rounded-xl m-2 bg-yellow-500 p-2 bg-opacity-20 backdrop-blur-lg drop-shadow-xl items-center">
      <div className="flex justify-center rounded-lg">
        <Image className="rounded-md" src="/ab.jpeg" width={200} height={200} alt="kaif" />
      </div> 
      <div className="grid grid-rows-2 font-bold text-center m-4">
        <h2 className="font-bold text-center text-white">Abhishek</h2>
        {/* <h3 className="text-gray-600">Web Devlopment Organizer</h3> */}
      </div>
      <div className="flex justify-center mt-2">
        <a href="https://www.linkedin.com/in/abhishek-verma-jnv" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
      </div>
    </div>
    </div>
  );
}