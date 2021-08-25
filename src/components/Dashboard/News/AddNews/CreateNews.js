import React, { useState } from "react";
import TableCRUD from "../../../Reusable/TableCRUD2";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "../../../../api/calls/category";
import MenuForm from "./ImportantNewsForm";

const headerColsMenu = ["Название"];
const bodyColsMenu = ["name"];

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
            getTableData={getCategories}
            createTableData={createCategory}
            Form={MenuForm}
            handleDelete={deleteCategory}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
