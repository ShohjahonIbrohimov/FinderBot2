import React from "react";
import TableCRUD from "../../../Reusable/TableCRUD2";

import MenuForm from "./ImportantNewsForm";
import {
  createInfo,
  deleteInfo,
  getInfos,
} from "../../../../api/calls/important-info";

const headerColsMenu = ["Название", "Статус"];
const bodyColsMenu = ["description", "status_info"];

const Menu = ({}) => {
  return (
    <div class="w3-container">
      <h2>Добавления Важное инфо</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "50%" }}>
          <TableCRUD
            title="Добавления Важное инфо"
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getInfos}
            createTableData={createInfo}
            Form={MenuForm}
            handleDelete={deleteInfo}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
