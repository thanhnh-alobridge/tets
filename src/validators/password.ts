export const validatePassword = (str: string) => {
  const reg =
    /^(?=.*[!@#$%^&*()[\]_=+"\-:;"'<>/?~`{}|])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()[\]_=+"\-:;"'<>/?~`{}|]{6,}$/;
  if (reg.test(str)) {
    return false;
  }
  return true;
};
