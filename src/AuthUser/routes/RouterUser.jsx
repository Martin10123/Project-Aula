import { Route, Routes } from "react-router-dom";
import { LoginAppUser, RecoverAccount, RegisterAppUser } from "..";

export const RouterUser = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginAppUser />} />
      <Route path="register" element={<RegisterAppUser />} />
      <Route path="recoverAccount" element={<RecoverAccount />} />
    </Routes>
  );
};
