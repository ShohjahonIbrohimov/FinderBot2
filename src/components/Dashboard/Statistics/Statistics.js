import React, { useState } from "react";

const Statistics = ({}) => {
  const [open, setopen] = useState(false);

  const handleModalOpen = (params) => {
    setopen(true);
  };

  return (
    <div class="w3-container">
      <div class="page-header">
        <h2 class="page-header__title">Добавление Суппорта</h2>
        <button id="myBtn" class="app-button" onClick={handleModalOpen}>
          Добавить
        </button>
      </div>

      <table>
        <tr>
          <th>Имя</th>
          <th>Т.аккаунт</th>
          <th>Дата</th>
          <th></th>
        </tr>
        <tr>
          <td>Александир</td>
          <td>@awesome_boy</td>
          <td>14:36 21.06.2021</td>
          <td style={{ display: "flex", justifyContent: "space-around" }}>
            <span class="icon_wrap">
              <i class="bx bxs-edit" style={{ color: "#555" }}></i>
            </span>
            <span class="icon_wrap">
              <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Александир</td>
          <td>@awesome_boy</td>
          <td>14:36 21.06.2021</td>
          <td style={{ display: "flex", justifyContent: "space-around" }}>
            <span class="icon_wrap">
              <i class="bx bxs-edit" style={{ color: "#555" }}></i>
            </span>
            <span class="icon_wrap">
              <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Александир</td>
          <td>@awesome_boy</td>
          <td>14:36 21.06.2021</td>
          <td style={{ display: "flex", justifyContent: "space-around" }}>
            <span class="icon_wrap">
              <i class="bx bxs-edit" style={{ color: "#555" }}></i>
            </span>
            <span class="icon_wrap">
              <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Александир</td>
          <td>@awesome_boy</td>
          <td>14:36 21.06.2021</td>
          <td style={{ display: "flex", justifyContent: "space-around" }}>
            <span class="icon_wrap">
              <i class="bx bxs-edit" style={{ color: "#555" }}></i>
            </span>
            <span class="icon_wrap">
              <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
            </span>
          </td>
        </tr>
      </table>

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
