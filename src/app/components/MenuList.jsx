import Link from "next/link";
const MenuList = ({ toggle }) => {
  const handleClick = () => {
    toggle(); // Lukker menuen
  };
  return (
    <nav className="justify-self-center">
      <ul>
        <li>
          <Link href="/lineup" onClick={handleClick}>
            lineup
          </Link>
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
