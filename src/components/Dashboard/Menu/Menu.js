import React, { useState, useEffect } from "react";
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
import {
  createShowcase,
  getShowcases,
  deleteShowcase,
} from "../../../api/calls/showcase";
import CreateProductForm from "./StatesForm";
import ShowcaseForm from "./ShowcaseForm";
import axios from "axios";
import MenuForm from "./MenuForm";
import MenuFormPodcategory from "./MenuFormPodcategory";

const headerColsMenu = ["Название"];
const bodyColsMenu = ["name"];

const headerCols = ["Название"];
const bodyCols = ["name"];

const menuItemStyle = {
  width: "32%",
  marginBottom: "2rem",
};

const Menu = ({}) => {
  const [change, setchange] = useState(false);

  const handleChange = () => {
    console.log("fired");
    setchange(!change);
  };

  useEffect(() => {
    axios.get("https://api.g-obox.ru/api/telegram/podcategory", {
      paramsSerializer: function (params) {
        var result = "6129d1f7ae88f47cc6102fd7";
        // Build the query string
        return result;
      },
    });
  }, []);

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
        <div style={menuItemStyle}>
          <TableCRUD
            title="Добавления меню"
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getCategories}
            createTableData={createCategory}
            Form={MenuForm}
            handleDelete={deleteCategory}
            change={change}
            handleChange={handleChange}
          ></TableCRUD>
        </div>
        <div style={menuItemStyle}>
          <TableCRUD
            title="Добавления Podcategory"
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getPodCategories}
            createTableData={createPodCategory}
            Form={MenuFormPodcategory}
            handleDelete={deletePodcategory}
            handleChange={handleChange}
            change={change}
          ></TableCRUD>
        </div>
        <div style={menuItemStyle}>
          <TableCRUD
            title="Добавления Гео"
            headerCols={headerCols}
            bodyCols={bodyCols}
            getTableData={getStates}
            createTableData={createState}
            Form={CreateProductForm}
            handleDelete={deleteState}
            handleChange={handleChange}
            change={change}
          ></TableCRUD>
        </div>
        <div style={menuItemStyle}>
          <TableCRUD
            title="Добавления Гео"
            headerCols={headerCols}
            bodyCols={bodyCols}
            getTableData={getShowcases}
            createTableData={createShowcase}
            Form={ShowcaseForm}
            handleDelete={deleteShowcase}
            change={change}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
