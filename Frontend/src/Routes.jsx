import { Route, Routes } from "react-router-dom";
import { DocumentEditorPage } from "./pages/DocumentEditor";
import Home from "./pages/Home";
import { Auth } from "./pages/Auth";
import { SignupContainer } from "./components/organisms/auth/signupContainer";
import { SigninContainer } from "./components/organisms/auth/signinContainer";
import { ProtectedRoute } from "./components/molecules/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/documents/:id" element={<ProtectedRoute><DocumentEditorPage /></ProtectedRoute>} />
      <Route
        path="/signup"
        element={
          <Auth>
            <SignupContainer />
          </Auth>
        }
      />
      <Route
        path="/signin"
        element={
          <Auth>
            <SigninContainer />
          </Auth>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
