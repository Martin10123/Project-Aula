import { Route, Routes } from "react-router-dom";

import { AreYouUserOrProfPage } from "../AreYouUserOrProf";
import { RouterUser } from "../AuthUser";
import { RoutesProf } from "../AuthProfessional";
import { MainPage } from "../MainApp";

import { AppointmentRoutes } from "../Appointment";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AreYouUserOrProfPage />} />

        <Route path="/auth-user/*" element={<RouterUser />} />

        <Route path="/auth-prof/*" element={<RoutesProf />} />

        <Route path="home" element={<MainPage />} />

        <Route path="appointment/*" element={<AppointmentRoutes />} />
      </Routes>
    </>
  );
};
