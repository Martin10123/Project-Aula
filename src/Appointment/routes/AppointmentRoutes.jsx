import { Route, Routes } from "react-router-dom";

import {
  DeleteAppoi,
  InfoProfessional,
  ScheduleAppoi,
  SeeAppointment,
  SeeProfessional,
  UpdateAppointment,
} from "../";

export const AppointmentRoutes = () => {
  return (
    <Routes>
      <Route path="/delete/:id" element={<DeleteAppoi />} />
      <Route path="/professional/:name/:id" element={<InfoProfessional />} />
      <Route path="/schedule" element={<ScheduleAppoi />} />
      <Route path="/see" element={<SeeAppointment />} />
      <Route path="/seeProfessionals" element={<SeeProfessional />} />
      <Route path="/update/:id" element={<UpdateAppointment />} />
    </Routes>
  );
};
