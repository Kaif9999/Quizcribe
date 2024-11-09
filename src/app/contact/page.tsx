import Image from "next/image";
import MobileLogo from "@/assets/MobileLogo.svg"
import Form from "@/components/Form";
export default function Contact(){
    return(
        <>
       
       
       <div className=" flex justify-center w-[90%] bg-blue-500 m-auto p-4 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg rounded-xl">
        <Form></Form>
       </div>
       </>
    )
}
