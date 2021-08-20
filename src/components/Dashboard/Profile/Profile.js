import React from "react";
import { getUsers, deleteUser } from "../../../api/calls/users";
import TableCRUD from "../../Reusable/TableCRUD";

const headerColsMenu = ["Имя", "Т.аккаунт", "Дата"];
const bodyColsMenu = ["first_name", "telegram_id", "createdAt"];

const Profile = () => {
  return (
    <div class="w3-container">
      <TableCRUD
        addBtn={false}
        title="Добавление Профили"
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getUsers}
        createTableData={() => {}}
        Form={false}
        handleDelete={deleteUser}
      ></TableCRUD>
      <br />
      <br />
      <br />
      <TableCRUD
        addBtn={false}
        title="Проданные аккаунты"
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getUsers}
        createTableData={() => {}}
        Form={false}
        handleDelete={deleteUser}
      ></TableCRUD>
    </div>
  );
};

export default Profile;
