import Link from "next/link";
import Arrow from "@/app/img/arrow.svg";

const Button = ({ text, link }) => {
  return (
    <Link href={link}>
      <div className="border-green border-4 py-2 px-6 w-44 text-center flex items-center gap-4 justify-center hover:bg-green hover:text-black">
        <p className="text-green font-Inter text-2xl font-medium hover:text-black">
          {text}
        </p>
        <Arrow className="" />
      </div>
    </Link>
  );
};

export default Button;
