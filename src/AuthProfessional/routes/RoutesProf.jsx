import { Route, Routes } from "react-router-dom";
import { LoginProf, RecoverAccountProf, RegisterAppProf } from "..";

export const RoutesProf = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginProf />} />
      <Route path="register" element={<RegisterAppProf />} />
      <Route path="recoverAccount" element={<RecoverAccountProf />} />
    </Routes>
  );
};
