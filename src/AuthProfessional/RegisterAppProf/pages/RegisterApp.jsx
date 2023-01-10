import { Link } from "react-router-dom";
import { ButtonForm } from "../../../Helpers";
import {
  EmailPassword,
  NameForm,
  ProfessionDisponibility,
} from "../components";
import { useRegisterProf } from "../hook/useRegisterProf";

import styles from "./registerApp.module.css";

export const RegisterAppProf = () => {
  const {
    daysValue,
    errorMessage,
    formState,
    formSubmitted,
    formValidation,
    isLoadingForm,
    handleChangeFilter,
    onInputChange,
    onSubmitForm,
    openOptionsDays,
    openOptionsProfession,
    professionValue,
    setOpenOptionsDays,
    setOpenOptionsProfession,
  } = useRegisterProf();

  return (
    <section className={styles.container}>
      <h2>Registarte y demustra tus habilidades</h2>
      <div className={styles.form}>
        <NameForm
          formState={formState}
          formSubmitted={formSubmitted}
          formValidation={formValidation}
          onInputChange={onInputChange}
        />

        <EmailPassword
          formState={formState}
          formSubmitted={formSubmitted}
          formValidation={formValidation}
          onInputChange={onInputChange}
        />

        <ProfessionDisponibility
          daysValue={daysValue}
          formState={formState}
          formSubmitted={formSubmitted}
          handleChangeFilter={handleChangeFilter}
          onInputChange={onInputChange}
          openOptionsDays={openOptionsDays}
          openOptionsProfession={openOptionsProfession}
          professionValue={professionValue}
          setOpenOptionsDays={setOpenOptionsDays}
          setOpenOptionsProfession={setOpenOptionsProfession}
        />

        <ButtonForm
          disabled={isLoadingForm}
          onSubmit={onSubmitForm}
          title={isLoadingForm ? "Cargando..." : "Registrarse"}
        />

        {!!errorMessage && <p className={styles.show_error}>{errorMessage}</p>}

        <p className={styles.redirect_login}>
          ¿Ya tienes una cuenta? <Link to="/auth-prof/login">Ingresar</Link>
        </p>
      </div>
    </section>
  );
};
