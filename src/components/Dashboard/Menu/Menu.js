import React, { useState } from "react";
import TableCRUD from "../../Reusable/TableCRUD2";
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
import { createState, getStates, deleteState } from "../../../api/calls/states";
import CreateProductForm from "./StatesForm";

import MenuForm from "./MenuForm";
import MenuFormPodcategory from "./MenuFormPodcategory";

const headerColsMenu = ["Название"];
const bodyColsMenu = ["name"];

const headerCols = ["Название"];
const bodyCols = ["name"];

const Menu = ({}) => {
  const [change, setchange] = useState(false);

  const handleChange = () => {
    setchange(!change);
  };

  return (
    <div class="w3-container">
      <h2>Добавления Меню</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "32%" }}>
          <TableCRUD
            title="Добавления меню"
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getCategories}
            createTableData={createCategory}
            Form={MenuForm}
            handleDelete={deleteCategory}
          ></TableCRUD>
        </div>
        <div style={{ width: "32%" }}>
          <TableCRUD
            title="Добавления Podcategory"
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getPodCategories}
            createTableData={createPodCategory}
            Form={MenuFormPodcategory}
            handleDelete={deletePodcategory}
            handleChange={handleChange}
          ></TableCRUD>
        </div>
        <div style={{ width: "32%" }}>
          <TableCRUD
            title="Добавления Гео"
            headerCols={headerCols}
            bodyCols={bodyCols}
            getTableData={getStates}
            createTableData={createState}
            Form={CreateProductForm}
            handleDelete={deleteState}
            change={change}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
