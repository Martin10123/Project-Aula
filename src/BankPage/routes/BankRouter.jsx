import { Route, Routes } from "react-router-dom";
import {
  AddNewCard,
  ChargeMoneyPage,
  LoginBank,
  MyAccounts,
  RechargeAccount,
  RegisterBack,
  SendMoney,
} from "../";

export const BankRouter = () => {
  return (
    <Routes>
      <Route path="" element={<ChargeMoneyPage />} />
      <Route path="myAccount" element={<MyAccounts />} />
      <Route path="login" element={<LoginBank />} />
      <Route path="register" element={<RegisterBack />} />
      <Route path="recharge" element={<RechargeAccount />} />
      <Route path="addCard" element={<AddNewCard />} />
      <Route path="sendMoney" element={<SendMoney />} />
    </Routes>
  );
};
