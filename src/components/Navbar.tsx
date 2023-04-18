import Link from "next/link";
import { navigation } from "~/utils/constant";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex w-full items-center justify-center bg-white py-3">
      <ul className="flex flex-row items-center justify-center gap-7">
        {navigation.map((item, idx: number) => (
          <li key={idx} className="hover:cursor-pointer">
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
