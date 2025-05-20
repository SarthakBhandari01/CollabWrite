import { Navbar } from "../organisms/Navbar/Navbar";
import { Toolbar } from "../molecules/Toolbar/Toolbar";
import { Editor } from "../organisms/Editor/Editor";

export const DocumentEditorPage = () => {
  return (
    <>
      <div className="min-h-screen  bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden h-[112px]">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </>
  );
};
