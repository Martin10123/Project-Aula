// Validar edad

const dateIsValid = (date) => {
  const today = new Date();
  const birthday = new Date(date);
  let age = today.getFullYear() - birthday.getFullYear();
  const result = today.getMonth() - birthday.getMonth();
  if (result < 0 || (result === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

// Validar email
export const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const formValidations = {
  birthday: [
    (va) => va === "" || dateIsValid(va) <= 18,
    "Debes ser mayor de edad",
  ],
  displayName: [
    (va) => va.trim().length <= 15,
    "El nombre debe de estar completo",
  ],
  email: [
    (va) => {
      if (regex.test(va) === false) {
        return true;
      } else if (va.includes("@professional")) {
        return true;
      }
    },
    "dirección de correo no valida, no puedes usar (@professional.com o .es) aqui, registrate como profesional",
  ],
  password1: [(va) => va.trim().length < 8, "La contraseña debe ser más larga"],
  password2: [(p1, p2) => p1 !== p2, "Las contraseñas no coinciden"],
  phoneNumber: [
    (va) => va.trim().length !== 10 || isNaN(va),
    "Ingrese un número de telefono valido",
  ],
  username: [
    (va) => va.trim().length <= 8,
    "El nombre de usuario debe ser más largo",
  ],
};

export const formValidationsLogin = {
  email: [
    (va) => {
      if (regex.test(va) === false) {
        return true;
      } else if (va.includes("@professional")) {
        return true;
      }
    },
    "Ingresa un email valido como usuario",
  ],
  password: [(va) => va.trim().length <= 0, "No puede estar vació"],
};

export const formValidationsLoginProf = {
  email: [
    (va) => {
      if (regex.test(va) === false) {
        return true;
      } else if (!va.includes("@professional")) {
        return true;
      }
    },
    "Ingresa un email valido como professional",
  ],
  password: [(va) => va.trim().length <= 0, "No puede estar vació"],
};

delete formValidations.username;

export const formValidationsProf = {
  ...formValidations,
  displayName: [
    (va) => va.trim().length <= 15,
    "El nombre debe de estar completo",
  ],
  nickName: [(va) => va.trim().length <= 2, "El apodo debe ser más largo"],
  email: [
    (va) => {
      if (!va.includes("@professional")) {
        return true;
      } else if (regex.test(va) === false) {
        return true;
      }
    },
    "dirección de correo no valida, tu correo debe llevar (@professional.com o .es .co) para registrarte como profesional, si quieres registrarte como usuario regresa a la opción de usuario",
  ],
};
