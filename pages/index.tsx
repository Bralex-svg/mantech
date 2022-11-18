import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, PrimaryButton } from "../components";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen overflow-hidden bg-red p-5">
      <div className="justify-start flex items-center pb-2 px-3">
        <p className="text-md font-bold leading-7 font-18 text-gray-900">
          CHESS GAMES
        </p>
        <div className="flex-1" />
      </div>
      <div className="w-full h-full items-center justify-center flex flex-col bg-white space-y-2 ">
        <div className="mb-5 py-3 justify-center flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold text-black">
            Welcome to Chess Games
          </h1>
          <div className="text-xs text-sm text-text text-center">
            Sign in with your waller to be able to authenticate and play
          </div>
        </div>
        <div className="w-1/4 bg-blue py-2">
          <Button
            handleClick={() => router.push("/dashboard")}
            title="Sign in with Metamask"
          />

          <button className="bg-white border hover:text-blue-500 hover:border-blue-500 px-2 py-4 w-full border-solid my-3 border-gray rounded-full text-black">
            Sign in with Coinbase Wallet
          </button>

          <div className="items-center justify-center flex">
            <button className="decoration-underline  outline-none border-b-1 underline my-3 text-sm w-100 text-center gray">
              Show more options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
