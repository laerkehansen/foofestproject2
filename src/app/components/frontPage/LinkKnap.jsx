import Link from "next/link";
import Arrow from "@/app/img/arrow.svg";

const Button = ({ text, link, bgColor = "green" }) => {
  const bgClass = `bg-${bgColor}`;
  return (
    <Link
      href={link}
      className={`${bgClass}  border-2 border-black p-2  hover:underline decoration-solid place-self-center m-2 transition duration-150 ease-in-out hover:scale-110  `}
    >
      <p className="text-black uppercase  text-lg font-medium hover:text-black">
        {text}
      </p>
    </Link>
  );
};

export default Button;
