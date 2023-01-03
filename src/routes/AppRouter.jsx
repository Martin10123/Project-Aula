// import { Route, Routes } from "react-router-dom";
// import { AreYouUserOrProfPage } from "../AreYouUserOrProf";

import {
  RegisterAppProf,
  // RoutesProf
} from "../AuthProfessional";
import { RouterUser } from "../AuthUser";

export const AppRouter = () => {
  return (
    <>
      <RegisterAppProf />
      {/* <Routes>
        <Route path="/" element={<AreYouUserOrProfPage />} />

        <Route path="/auth-user/*" element={<RouterUser />} />

        <Route path="/auth-prof/*" element={<RoutesProf />} />
      </Routes> */}
    </>
  );
};
