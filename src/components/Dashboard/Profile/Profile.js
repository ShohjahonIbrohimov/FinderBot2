import React from "react";

const Profile = () => {
  return (
    <div class="w3-container">
      <h2>Добавление Профили</h2>

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
      </table>

      <br />
      <br />
      <br />

      <h2>Проданные аккаунты</h2>

      <table>
        <tr>
          <th>Номер заказа</th>
          <th>Телеграм Аккаунт</th>
          <th>Ордер</th>
          <th>Дата</th>
          <th></th>
        </tr>
        <tr>
          <td>78866</td>
          <td>@awesome_boy</td>
          <td>
            <span class="profile-order">
              <img
                class="profile-order-img"
                src="../assets/profile-order.svg"
                alt=""
              />
            </span>
          </td>
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
    </div>
  );
};

export default Profile;
