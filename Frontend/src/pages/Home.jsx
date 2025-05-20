import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import { Navbar } from "@/components/organisms/Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
            <SearchInput />
      </div>
      <div className="mt-16">{/* template galary */}</div>
    </div>
  );
};
export default Home;
