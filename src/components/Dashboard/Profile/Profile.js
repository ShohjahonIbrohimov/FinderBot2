import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../../api/calls/users";
import TableCRUD from "../../Reusable/TableCRUD";
import {
  createSaleAccount,
  getSaleAccounts,
  deleteSaleAccount,
} from "../../../api/calls/sale";
import Table from "../../Reusable/Table";
import { fields } from "../Production/items";
const headerColsMenu = ["Имя", "Т.аккаунт", "Дата"];
const bodyColsMenu = ["first_name", "telegram_id", "createdAt"];

const headerColsAccounts = fields.map((field) => field.label);
const bodyColsAccounts = fields.map((field) => field.name);

const Profile = () => {
  const [accounts, setaccounts] = useState([]);

  useEffect(() => {
    getSaleAccounts().then((res) =>
      setaccounts(res.data.data.filter((d) => d.status !== "waiting"))
    );
  }, []);

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

      <div class="page-header">
        <h2 class="page-header__title">Проданные аккаунты</h2>
      </div>

      <div style={{ minHeight: "40vh" }}>
        <div style={{ overflow: "auto" }}>
          <Table
            tableData={accounts}
            headerCols={headerColsAccounts}
            bodyCols={bodyColsAccounts}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
