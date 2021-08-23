import React from "react";
import { getSms, deleteSms } from "../../../api/calls/sms";
import TableCRUD from "../../Reusable/TableCRUD";

const headerColsMenu = ["SMS", "Тип", "Телефон", "User ID", "TG ID", "TG nick"];
const bodyColsMenu = [
  "sms",
  "type",
  "phone",
  "user_id",
  "telegram_id",
  "telegram_nick",
];

const SMS = () => {
  return (
    <div class="w3-container">
      <TableCRUD
        addBtn={false}
        title="SMS"
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getSms}
        createTableData={() => {}}
        handleDelete={deleteSms}
      ></TableCRUD>
    </div>
  );
};

export default SMS;
