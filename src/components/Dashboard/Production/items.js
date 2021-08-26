export const fields = [
  {
    type: "text",
    name: "firstName",
    label: "Имя",
    rules: { required: true },
  },
  {
    type: "text",
    name: "lastName",
    label: "Фамилия",
    rules: { required: true },
  },
  {
    type: "text",
    name: "middleName",
    label: "Очества",
    rules: { required: true },
  },
  {
    type: "text",
    name: "phone",
    label: "Телефон",
    rules: { required: true },
  },
  {
    type: "text",
    name: "login",
    label: "Логин",
    rules: { required: true },
  },
  {
    type: "text",
    name: "password",
    label: "Пароль",
    rules: { required: true },
  },
  {
    type: "text",
    name: "email",
    label: "Почта",
    rules: { required: true },
  },
  {
    type: "text",
    name: "email_password",
    label: "Пароль от почты",
    rules: { required: true },
  },
  {
    type: "text",
    name: "geo",
    label: "ГЕО",
    rules: { required: true },
  },
  {
    type: "date",
    name: "birthDate",
    label: "Дата рождения",
    rules: { required: true },
    minWidth: "150px",
  },
  {
    type: "text",
    name: "registeredDate",
    label: "Дата регистрации",
    rules: { required: true },
  },
  {
    type: "text",
    name: "account_id",
    label: "ID аккаунта",
    rules: { required: true },
  },
  {
    type: "text",
    name: "friend",
    label: "Друзья",
    rules: { required: true },
  },
  {
    type: "text",
    name: "antidetect_cookie",
    label: "Куки для антидитект",
    rules: { required: true },
  },
  {
    type: "text",
    name: "issue_date",
    label: "Дата выдачи из базы",
    rules: { required: true },
  },
  {
    type: "text",
    name: "eaab_token",
    label: "Токен EAAB",
    rules: { required: true },
  },
  {
    type: "text",
    name: "fan_page",
    label: "Fan Page",
    rules: { required: true },
  },
  {
    type: "text",
    name: "fan_page",
    label: "Fan Page",
    rules: { required: true },
  },
  {
    type: "text",
    name: "user_agent",
    label: "User Agent",
    rules: { required: true },
  },
  {
    type: "text",
    name: "selfie_photo",
    label: "Фото для селфи",
    rules: { required: true },
  },
  {
    type: "text",
    name: "pk_id",
    label: "РК ID",
    rules: { required: true },
  },
  {
    type: "text",
    name: "bm_id",
    label: "БМ ID",
    rules: { required: true },
  },
  {
    type: "text",
    name: "bm_token",
    label: "БМ токен",
    rules: { required: true },
  },
  {
    type: "text",
    name: "bm_url",
    label: "БМ ссылка",
    rules: { required: true },
  },
  {
    type: "number",
    name: "price",
    label: "Цена",
    rules: { required: true },
  },
  {
    type: "select",
    name: "status",
    label: "Статус",
    rules: { required: true },
    options: [
      {
        value: "waiting",
        label: "Waiting",
      },
    ],
  },
  {
    type: "text",
    name: "user_id",
    label: "User ID",
    rules: { required: true },
  },
  {
    type: "select",
    name: "type_os",
    label: "User ID",
    rules: { required: true },
    options: [
      {
        label: "Facebook",
        value: "Facebook",
      },
      {
        label: "Tiktok",
        value: "Tiktok",
      },
      {
        label: "Instagram",
        value: "Instagram",
      },
      {
        label: "YouTube",
        value: "YouTube",
      },
    ],
  },
  {
    type: "date",
    name: "data_pay",
    label: "Дата выплаты",
    rules: { required: true },
    minWidth: "150px",
  },
];
