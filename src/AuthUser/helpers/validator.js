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
const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const formValidations = {
  birthday: [
    (va) => va === "" || dateIsValid(va) <= 18,
    "Debes ser mayor de edad",
  ],
  email: [(va) => regex.test(va) === false, "Ingrese un email valido"],
  lastname: [(va) => va.trim().length <= 2, "El apellido debe ser más largo"],
  name: [(va) => va.trim().length <= 2, "El nombre debe ser más largo"],
  password1: [(va) => va.trim().length < 8, "La contraseña debe ser más larga"],
  password2: [(p1, p2) => p1 !== p2, "Las contraseñas no coinciden"],
  phoneNumber: [
    (va) => va.trim().length !== 10,
    "Ingrese un número de telefono valido",
  ],
  username: [
    (va) => va.trim().length <= 8,
    "El nombre de usuario debe ser más largo",
  ],
};

export const formValidationsLogin = {
  email: [(va) => va.trim().length <= 0, "No puede estar vació"],
  password: [(va) => va.trim().length <= 0, "No puede estar vació"],
};
