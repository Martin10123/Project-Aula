import { Route, Routes } from "react-router-dom";

import { AreYouUserOrProfPage } from "../AreYouUserOrProf";
import { RouterUser } from "../AuthUser";
import { RoutesProf } from "../AuthProfessional";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AreYouUserOrProfPage />} />

        <Route path="/auth-user/*" element={<RouterUser />} />

        <Route path="/auth-prof/*" element={<RoutesProf />} />
      </Routes>
    </>
  );
};
