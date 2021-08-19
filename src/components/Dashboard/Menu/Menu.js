import React, { useState } from "react";

const Menu = ({}) => {
  const [open, setopen] = useState(false);

  const handleModalOpen = (params) => {
    setopen(true);
  };

  return (
    <div class="w3-container">
      <div class="page-header">
        <h2 class="page-header__title">Добавления меню </h2>
        <button id="myBtn" class="app-button" onClick={handleModalOpen}>
          Добавить
        </button>
      </div>

      <table style={{ width: "50%" }}>
        <tr>
          <th>Название</th>
        </tr>
        <tr>
          <td>Facebook</td>
        </tr>
        <tr>
          <td>Google</td>
        </tr>
        <tr>
          <td>Tik-Tok</td>
        </tr>
      </table>

      <div id="myModal" class="modal" style={open ? { display: "block" } : {}}>
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={() => setopen(false)}>
              &times;
            </span>
            <h3>Добавления меню </h3>
          </div>
          <div class="modal-body">
            <form action="/action_page.php" class="support-form">
              <label for="fname">Название меню:</label>
              <br />
              <input type="text" id="fname" name="fname" />
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

export default Menu;
