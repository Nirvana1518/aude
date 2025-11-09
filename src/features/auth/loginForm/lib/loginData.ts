export const loginData = [
  {
    name: "login" as const,
    label: "Введите логин, или адрес электронной почты",
    type: "text",
    placeholder: "Введите логин, или адрес электронной почты",
    validation: { required: "А ты кто вообще? ;/" },
  },
  {
    name: "password" as const,
    label: "Введите пароль",
    type: "password",
    placeholder: "Введите пароль",
    validation: { required: "Без пароля нельзя" },
  },
];
