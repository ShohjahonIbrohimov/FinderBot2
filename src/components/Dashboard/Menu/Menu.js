import React from "react";
import TableCRUD from "../../Reusable/TableCRUD";
import { createCategory, getCategories } from "../../../api/calls/category";
import {
  createPodCategory,
  getPodCategories,
} from "../../../api/calls/pod_category";

import MenuForm from "./MenuForm";
import MenuFormPodcategory from "./MenuFormPodcategory";

const headerColsMenu = ["Название"];
const bodyColsMenu = ["name"];

const Menu = ({}) => {
  return (
    <div class="w3-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TableCRUD
          title="Добавления меню"
          headerCols={headerColsMenu}
          bodyCols={bodyColsMenu}
          getTableData={getCategories}
          createTableData={createCategory}
          Form={MenuForm}
        ></TableCRUD>
        <TableCRUD
          title="Добавления Podcategory"
          headerCols={headerColsMenu}
          bodyCols={bodyColsMenu}
          getTableData={getPodCategories}
          createTableData={createPodCategory}
          Form={MenuFormPodcategory}
        ></TableCRUD>
      </div>
    </div>
  );
};

export default Menu;
