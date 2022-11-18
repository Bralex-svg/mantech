import { useEffect, useState } from "react";
import { DatePicker, ModalView, PrimaryButton } from "../../components";
import {
  FinishGameTableHead,
  getGameData,
  getGameResults,
  IGame,
  IGameResults,
  TableHeader,
} from "../../resources";

import Router, { useRouter } from "next/router";
import Modal from "../../components/Modal";
export default function index() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [data, setData] = useState<IGame[]>([]);
  const [gameResults, setGameResults] = useState<IGameResults[]>([]);
  const [status, setStatus] = useState<number>(0);

  const push = () => {
    router.push("/dashboard/chess");
  };

  useEffect(() => {
    setData(getGameData(7));
    setGameResults(getGameResults(7));
  }, []);
  return (
    <div className="w-sreen px-12 h-screen items center justify-start bg-gray flex flex-col bg-white">
      <div className="flex py-1 items-center justify-between w-full">
        <div className="flex items-center justify-start px-1">
          <a href="/">
            <p className="text-lg font-bold uppercase text-black">
              Chess Games
            </p>
          </a>
        </div>
        <div className="flex items center justify-end px-1">
          <div className="overflow-hidden rounded justify-center items center flex">
            <div className="bg-blue-500  text-white text-sm item-center justify-center p-2 py-3">
              0.04ETH
            </div>
            <div className="bg-white text-black text-xs font-bold item-center justify-center p-2 py-3">
              0x004...9124
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-6 items-center space-x-1 flex justify-end py-1">
        <DatePicker />
        <button
          onClick={() => setShowModal(true)}
          datas-toggle="modal"
          data-bs-target="#modalView"
          className="flex items-center justify-center p-1.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Create New Room
        </button>
      </div>
      <div className="items space-x-2 center flex justify-start w-full py-3 mb-2">
        <button
          onClick={() => setStatus(0)}
          className={`text-sm text-black ${
            !Boolean(status) && "border-b-2"
          } py-2 border-black ease-in-out`}
        >
          Available Games
        </button>
        <button
          onClick={() => setStatus(1)}
          className={`text-sm text-black ${
            Boolean(status) && "border-b-2"
          } py-2 border-black ease-in-out`}
        >
          Unavailable Games
        </button>
      </div>
      <div className="w-full h-full bg-white items-center mt-2 justify-start">
        <table className="table-auto w-full">
          <thead>
            <tr>
              {!Boolean(status)
                ? TableHeader.map((thi) => (
                    <th
                      align="left"
                      className="text-gray-500 text-xs"
                      key={thi}
                    >
                      {thi}
                    </th>
                  ))
                : FinishGameTableHead.map((thi) => (
                    <th
                      align="left"
                      className="text-gray-500 text-xs"
                      key={thi}
                    >
                      {thi}
                    </th>
                  ))}
            </tr>
          </thead>
          <tbody>
            {Boolean(status)
              ? gameResults.map((info) => (
                  <tr key={info.id}>
                    <td align="left" className="py-3">
                      {info.id}
                    </td>
                    <td align="left" className="py-3">
                      {info.limit}
                    </td>
                    <td align="left" className="py-3">
                      {info.winner}
                    </td>
                    <td align="left" className="py-3">
                      <p>{info.amount}</p>
                    </td>
                    <td align="left" className="py-3">
                      {info.dateEnded}
                    </td>

                    <td align="left" className="py-3">
                      <div className="flex items-center justify-center space-x-4">
                        <button
                          disabled
                          className="border-gray-900 p-2 bg-gray-300 text-white rounded outline-none border-none text-xs text-gray-900"
                        >
                          Request to Join
                        </button>
                        <button className="border text-blue-500 p-2 rounded border-blue-500 text-xs text-gray-900">
                          Spectate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : data.map((info) => (
                  <tr key={info.id}>
                    <td align="left" className="py-3">
                      {info.id}
                    </td>
                    <td align="left" className="py-3">
                      {info.limit}
                    </td>
                    <td align="left" className="py-3">
                      {info.entryFee}
                    </td>
                    <td align="left" className="py-3">
                      {info.numberOfPlayers}
                    </td>
                    <td align="left" className="py-3">
                      {info.dateCreated}
                    </td>

                    <td align="left" className="py-3">
                      <div className="flex items-center justify-center space-x-4">
                        <button className="border-gray-900 p-2 bg-blue-500 text-white rounded outline-none border-none text-xs text-gray-900">
                          Request to Join
                        </button>
                        <button className="border text-blue-500 p-2 rounded border-blue-500 text-xs text-gray-900">
                          Spectate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <ModalView id="modalView" />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create New Room</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="text-black bg-black">
                      <span className="bg-black text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </div>
                  </button>
                </div>
                {/*body*/}
                <div className="mb-3 xl:w-96">
                  <label className="form-label text-xl ml-[7%] font-bold inline-block mb-2 text-gray-700">
                    Entry Fee:
                  </label>
                  <select
                    // id="countries"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                   

                focus:border-blue-500 block w-[70%] ml-[8%] p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>0.003ETH</option>
                    <option value="0.24">0.003ETH</option>
                    <option value="0.888">0.104ETH</option>
                    <option value="0.23ETH">ETH</option>
                  </select>
                </div>

                <div className="mb-3 xl:w-96">
                  <label className="form-label text-xl ml-[7%] font-bold inline-block mb-2 text-gray-700">
                    Room Privacy
                  </label>
                  <select
                    // id="countries"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 
                   

                focus:border-blue-500 block w-[70%] ml-[8%] p-2.5 dark:bg-gray-100
         
                
                dark:border-gray-900 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Public</option>
                    <option value="0.24">0.003ETH</option>
                    <option value="0.888">0.104ETH</option>
                    <option value="0.23ETH">ETH</option>
                  </select>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                    onClick={push}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}


