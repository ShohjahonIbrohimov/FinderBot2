import React from "react";
import { getSms } from "../../../api/calls/sms";
import TableCRUD from "../../Reusable/TableCRUD";

const headerColsMenu = ["Название", "Название", "Название", "Название"];
const bodyColsMenu = ["name"];

const SMS = () => {
  return (
    <div class="w3-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TableCRUD
          addBtn={false}
          title="SMS"
          headerCols={headerColsMenu}
          bodyCols={bodyColsMenu}
          getTableData={getSms}
          createTableData={() => {}}
          handleDelete={() => {}}
        ></TableCRUD>
      </div>
    </div>
  );
};

export default SMS;
