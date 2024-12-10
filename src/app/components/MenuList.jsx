import Link from "next/link";
const MenuList = () => {
  return (
    <nav className="justify-self-center">
      <ul>
        <li>
          <Link href="/lineup"> lineup</Link>
        </li>
        <li>
          <Link href="/program"> lineup</Link>
        </li>
        <li>
          <Link href="/program"> lineup</Link>
        </li>
        <li>
          <Link href="/program"> lineup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuList;
