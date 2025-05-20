import { Route, Routes } from "react-router-dom";
import { DocumentEditorPage } from "./pages/DocumentEditor";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documents/:id" element={<DocumentEditorPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
