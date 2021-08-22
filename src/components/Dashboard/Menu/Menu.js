import React from "react";
import TableCRUD from "../../Reusable/TableCRUD";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "../../../api/calls/category";
import {
  createPodCategory,
  getPodCategories,
  deletePodcategory,
} from "../../../api/calls/pod_category";
import { createState, getStates } from "../../../api/calls/states";
import CreateProductForm from "./StatesForm";

import MenuForm from "./MenuForm";
import MenuFormPodcategory from "./MenuFormPodcategory";

const headerColsMenu = ["Название"];
const bodyColsMenu = ["name"];

const headerCols = ["Название", "Категория"];
const bodyCols = ["name", "category_id"];

const Menu = ({}) => {
  return (
    <div class="w3-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <TableCRUD
          title="Добавления меню"
          headerCols={headerColsMenu}
          bodyCols={bodyColsMenu}
          getTableData={getCategories}
          createTableData={createCategory}
          Form={MenuForm}
          handleDelete={deleteCategory}
        ></TableCRUD>
        <TableCRUD
          title="Добавления Podcategory"
          headerCols={headerColsMenu}
          bodyCols={bodyColsMenu}
          getTableData={getPodCategories}
          createTableData={createPodCategory}
          Form={MenuFormPodcategory}
          handleDelete={deletePodcategory}
        ></TableCRUD>
        <TableCRUD
          title="Добавления состояние"
          headerCols={headerCols}
          bodyCols={bodyCols}
          getTableData={getStates}
          createTableData={createState}
          Form={CreateProductForm}
          handleDelete={() => {}}
        ></TableCRUD>
      </div>
    </div>
  );
};

export default Menu;
