import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import {
  EmailPassword,
  NamesProf,
  AvaibleProf,
  NavTabs,
  ButtonsRegister,
} from "../components";

import styles from "./registerApp.module.css";

export const RegisterAppProf = () => {
  const [openTabs, setOpenTabs] = useState(1);
  const [openDays, setOpenDays] = useState(false);
  const [openProfession, setOpenProfession] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [days, setDays] = useState([]);

  const { formState, onInputChange } = useForm({
    name: "",
    username: "",
    nickName: "",
    phone: "",
    gender: "Hombre",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChangeFilter = (type, value) => {
    if (type === "country") {
      setCountry(value);
      setOpenCountry(false);
    } else if (type === "profession") {
      setProfession(value);
      setOpenProfession(false);
    } else if (type === "days") {
      setDays([...days, value]);
    }
  };

  const onNextPage = () => {
    setOpenTabs(openTabs + 1);
  };

  const onSubmitForm = () => {
    console.log({ ...formState, country, profession, days });
  };

  return (
    <section className={styles.container}>
      <h2>Registarte y demustra tus habilidades</h2>
      <div className={styles.content}>
        <NavTabs openTabs={openTabs} />

        <div className={styles.form}>
          <div className={`${openTabs === 1 ? styles.show : styles.hidden}`}>
            <NamesProf
              country={country}
              formState={formState}
              handleChangeFilter={handleChangeFilter}
              onInputChange={onInputChange}
              openCountry={openCountry}
              setCountry={setCountry}
              setOpenCountry={setOpenCountry}
            />
          </div>

          <div className={`${openTabs === 2 ? styles.show : styles.hidden}`}>
            <EmailPassword
              formState={formState}
              onInputChange={onInputChange}
            />
          </div>

          <div className={`${openTabs === 3 ? styles.show : styles.hidden}`}>
            <AvaibleProf
              handleChangeFilter={handleChangeFilter}
              openDays={openDays}
              openProfession={openProfession}
              profession={profession}
              setOpenDays={setOpenDays}
              setOpenProfession={setOpenProfession}
            />
          </div>

          <ButtonsRegister
            onNextPage={onNextPage}
            onSubmitForm={onSubmitForm}
            openTabs={openTabs}
          />
        </div>
      </div>
    </section>
  );
};
