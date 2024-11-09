"use client";
import Image from "next/image";
import light from "../assets/lightMode.svg";
import dark from "@/assets/dark.svg";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserProfile } from "@auth0/nextjs-auth0/client";

export function Navbar() {
    const { user, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        // Redirect to main page if user is logged in
        if (user) {
          router.push('/main'); // Redirect to /main if user is authenticated
        }
    }, [user, router]); // Effect will run when `user` is available

  return (
    <div className="flex justify-center w-full bg-transparent top-0 fixed z-50 items-center">
      <div className="dark:text-gray-100 text-white h-[10%] w-8/12 rounded-full lg:shadow-lg lg:backdrop-blur-md flex lg:justify-between justify-center items-center mt-1 border-2 border-white">
        <Link href="/">
          <Logo />
        </Link>
        <Menu />
      </div>
      <Login user={user} />
    </div>
  );
}

function Logo() {
  return (
    <div className="lg:bg-none lg:shadow-none shadow-lg lg:rounded-none rounded-full lg:backdrop-blur-none backdrop-blur-md lg:p-0 p-2 lg:border-0 border-2 border-black">
      {/* You can uncomment and add your logo here */}
      {/* <Image
        src="#"
        alt="Logo"
        width={200}
        height={50}
        className="rounded-full"
      /> */}
    </div>
  );
}

function Menu() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="lg:w-1/2 h-[10%] w-3/4 fixed lg:static bottom-0 bg-red-10 dark:bg-black dark:bg-opacity-5 bg-opacity-50 backdrop-blur-lg bg-gray-200 lg:bg-transparent lg:bg-opacity-0 lg:backdrop-blur-none rounded-3xl p-2">
      <ul className="flex lg:flex-row flex-row justify-around items-left space-x-4">
        <li className="lg:text-lg sm:text-sm text-xs font-semibold text-white dark:text-gray-400">
          <Link href="/team">Team</Link>
        </li>
        <li className="lg:text-lg sm:text-sm text-xs font-semibold text-white dark:text-gray-400">
          <Link href="/contact">Contact us</Link>
        </li>

        <button onClick={toggleTheme} className="flex items-center space-x-2">
          <Image
            src={light}
            alt="Toggle light mode"
            className="dark:hidden lg:h-9 h-5"
          />
          <Image
            src={dark}
            alt="Toggle dark mode"
            className="dark:block hidden lg:h-9 h-5"
          />
        </button>
      </ul>
    </div>
  );
}

function Login({ user }: { user: UserProfile | undefined }) {
  return (
    <div className="ml-20 ">
      <button className="py-2 px-6 rounded-lg bg-white mx-5 hover:bg-gray-200  flex items-center space-x-4 lg:text-lg sm:text-sm text-xs font-semibold text-black dark:text-gray-400">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Link href="/api/auth/logout">Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </button>
    </div>
  );
}
