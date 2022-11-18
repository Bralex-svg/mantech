import ChessImg from "../../assets/chess.jpg";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Chess() {
  return (
    <>
      <div className="bg-gray-900 h-[40rem]">
        <a href="/dashboard">
          <AiOutlineArrowLeft className="translate-y-[580%] ml-[8.5%] text-white" />
          <h2 className="text-white ml-[10%] translate-y-[300%]">Go back</h2>
        </a>

        <div className="grid grid-cols-2">
          <h2 className="text-white ml-[65%] translate-y-[20%]">Opponent</h2>{" "}
          <FaUserAlt className="text-2xl text-white translate-y-[30%] bg-gray-600 -ml-[40%] " />
          <button className="bg-gray-600 py-2 text-white w-[20%] rounded-[5px] ml-[115%] -translate-y-[80%]">
            00:00:00
          </button>
        </div>

        <Image
          width="500"
          className="ml-[30%] -translate-y-[5%]"
          src={ChessImg}
          alt="check img"
        />
      </div>
    </>
  );
}
