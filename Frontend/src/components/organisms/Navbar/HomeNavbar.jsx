import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6 ">
        <Link to="/">
          <img src="../../../../logo1.svg" alt="logo" width={36} height={36} />
        </Link>
        <h3 className="text-xl">Docs</h3>
      </div>
      <SearchInput />
    </nav>
  );
};

export default Navbar;
