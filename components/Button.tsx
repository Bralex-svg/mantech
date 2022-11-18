import { MouseEvent } from "react";

interface IProps {
  title: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "contained" | "outlined";
}

export default function Button({ title, handleClick, variant }: IProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ borderRadius: "30px" }}
      className="flex items-center justify-center px-6 py-4 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-full transition duration-150 ease-in-ou"
    >
      <svg
        className="-ml-1 mr-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      {title}
    </button>
  );
}
