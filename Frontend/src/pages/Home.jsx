import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import { TemplatesGallery } from "@/components/molecules/TemplatesGallery/TemplatesGallery";
import Navbar from "@/components/organisms/Navbar/HomeNavbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16"><TemplatesGallery /></div>
    </div>
  );
};
export default Home;
