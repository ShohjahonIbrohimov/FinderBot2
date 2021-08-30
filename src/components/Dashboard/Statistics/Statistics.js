import React, { useState } from "react";
import { deleteSupport, getSupports } from "../../../api/calls/support";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateSupportLinkForm from "./CreateSupportLinkForm";

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

      <div style={{ width: "40%" }}>
        <h3>Support Link</h3>
        <CreateSupportLinkForm />
      </div>
    </div>
  );
};

export default Statistics;
