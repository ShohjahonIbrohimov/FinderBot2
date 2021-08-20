import React, { useState } from "react";
import { deleteSupport, getSupports } from "../../../api/calls/support";
import TableCRUD from "../../Reusable/TableCRUD";

const headerCols = [
  "Имя пользователя",
  "Описание",
  "билет",
  "ID пользователя",
  "ID TG",
  "Ник TG",
];
const bodyCols = [
  "username",
  "description",
  "ticked_cod",
  "user_id",
  "telegram_id",
  "telegram_nick",
];

const Statistics = ({}) => {
  const [open, setopen] = useState(false);

  return (
    <div class="w3-container">
      <TableCRUD
        title="Добавление Суппорта"
        headerCols={headerCols}
        bodyCols={bodyCols}
        getTableData={getSupports}
        createTableData={() => {}}
        Form={false}
        handleDelete={deleteSupport}
        addBtn={false}
      ></TableCRUD>

      <div id="myModal" class="modal" style={open ? { display: "block" } : {}}>
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={() => setopen(false)}>
              &times;
            </span>
            <h3>Добавление Суппорта</h3>
          </div>
          <div class="modal-body">
            <form action="/action_page.php" class="support-form">
              <label for="fname">Имя:</label>
              <br />
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="lname">Фамилия:</label>
              <br />
              <input type="text" id="lname" name="lname" />
              <br />
              <label for="email">Почта:</label>
              <br />
              <input type="email" id="email" name="email" />
              <br />
              <label for="tgaccount">Телеграм аккаунт:</label>
              <br />
              <input type="tgaccount" id="tgaccount" name="tgaccount" />
              <br />
              <label for="select">Роль:</label>
              <br />
              <select>
                <option value="1">Админ</option>
                <option value="2">Суппорт</option>
              </select>
              <br />
              <br />
              <input type="submit" value="Добавить" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
