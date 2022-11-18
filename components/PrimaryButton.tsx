import { HtmlProps } from "next/dist/shared/lib/html-context";
import { MouseEvent } from "react";

interface IProps {
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  radius?: string;
  title?: string;
  border?: string;
  props?: HtmlProps;
}
export default function PrimaryButton({
  handleClick,
  radius,
  title,
  border,
  props,
}: IProps) {
  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 hover:bg-blue-700  w-full shadow ${border} hover:border-blue-700 text-white px-2 py-1.5 h ${radius} outline-none border-blue-500`}
      {...props}
    >
      {title ? title : "Submit"}
    </button>
  );
}
