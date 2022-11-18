import { useRouter } from "next/router";
import Image from "next/image";
import { resources } from "../../../resources";
export default function index() {
  const router = useRouter();
  return (
    <div className="w-sreen px-12 h-screen overflow-x-hidden pb-5 items-center justify-start bg-game text-white flex flex-col bg-gray-800">
      <div className="flex py-1 items-center justify-between w-full">
        <div className="flex items-center justify-start px-1">
          <p className="text-lg font-bold uppercase text-white">Chess Games</p>
        </div>
        <div className="flex items center justify-end px-1">
          <div className="overflow-hidden bg-gray-400 rounded justify-center items center flex">
            <div className="bg-blue-500  text-white text-sm item-center justify-center p-2 py-3">
              0.04ETH
            </div>
            <div className="text-black text-xs font-bold item-center justify-center p-2 py-3">
              0x004...9124
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border border-gray-600 w-full"></div>
      <div className="w-full md:w-full sm:w-full flex items-center justify-between mt-5">
        <div className="items-center justify-left p-2 flex">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex text-white items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Go Back
          </button>
        </div>
        <div className="flex-1 text-2xl uppercase font-bold flex items-center justify-center text-white p-2">
          Spectating
        </div>
      </div>
      <div className="h-full mt-5 flex flex-col h-full items-center justify-start sm-w-screen  w-1/3">
        <div className="flex justify-between items-center w-full py-2">
          <div className="flex space-x-2 items-center justify-start">
            <div className="p-3 pb-0 items-center bg-gray-700 justify-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <p className="text-lg">Oponent</p>
          </div>
          <div className="flex items-center justify-end text-gray-600">
            <div className="items-center text-white w-100 bg-gray-700 justify-center flex p-3 rounded">
              00:00:00
            </div>
          </div>
        </div>

        <div id="board1" className="mb-5 mt-3 h-full  pb-5">
          <Image
            alt="chess-image"
            src={resources.chessimage}
            width={600}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
