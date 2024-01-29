import { Routes, Route } from "react-router-dom";
import {
  BlogPage,
  DashboardPage,
  IndexPage,
  InventoryPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  UserPage,
} from "./page";
import { useContext, useEffect } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { useNavigate } from "react-router-dom";
import { apiContext } from "./store/ApiContext.store";

const App = () => {
  const nav = useNavigate();
  const { data } = useContext(apiContext);

  useEffect(() => {
    data?.length > 0 &&
      localStorage.getItem("signIn") === "true" &&
      nav("/dashboard");
    data?.length > 0 &&
      localStorage.getItem("signIn") === "false" &&
      nav("/login");
    data?.length === 0 && nav("/register");
  }, [data]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SpinnerCircularFixed
            secondaryColor="white"
            thickness={200}
            size={190}
            speed={150}
            style={{ height: "100vh", display: "bolk", marginInline: "auto" }}
            color="blue"
          />
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route index element={<IndexPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="users" element={<UserPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
