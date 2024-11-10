import Image from "next/image"
import Link from "next/link"
import heart from "@/assets/heart.svg"
import { FaLinkedin } from "react-icons/fa";

export function Footer(){

    return<div className="bg-black rounded-3xl m-8 p-3">
        <div className="flex md:flex-row flex-col  items-center md:items-baseline">
        <div className=" grid md:grid-cols-4 grid-cols-3  m-5 w-5/6 text-left gap-4">
            <Image alt="logoimage" src="/qsd.jpg" width={200} height={100} className=""></Image>
        <div className="md:col-start-2 col-start-1 text-gray-500 md:m-0">
            <p className="font-bold text-lg text-gray-300">Contribute</p>
            <ul>
                <li>File a bug</li>
                <li>View code</li>
            </ul>
            </div>
        <div className="text-gray-500 m-auto md:m-0">
            <p className="font-bold text-lg text-gray-300">Contents</p>
            <ul>
                <Link href="/team"><li>Team</li></Link>
                <Link href="/contact"><li>Contact us</li></Link>
            </ul>
            </div>
        <div className="text-gray-500 m-auto md:m-0">
            <p className="font-bold text-lg text-gray-300 md:text-left text-center">Socials</p>
            <div className="grid grid-cols-2 grid-rows-3 md:w-28">
            <FaLinkedin className="text-blue-700 text-2xl" />
            </div>
            </div>
        </div>
        </div>
        <div className="flex justify-between mx-5 text-gray-500 pb-4 flex-col-reverse md:flex-row">
            <p className="text-center md:text-left"><i>© 2024 Team Exception Handlers HackCBS-7.0-2024.</i></p>
            <div className="flex md:flex-row gap-1 justify-center">
            <p><i>Made with</i></p>
            <Image src={heart} alt="Love"></Image>
            <p><i>at Team Exception Handlers.</i></p>
            </div>
            
        </div>
    </div>
}