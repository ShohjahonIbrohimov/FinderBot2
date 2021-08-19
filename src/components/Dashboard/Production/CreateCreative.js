import React from "react";
import { createProduct, getProducts } from "../../../api/calls/product";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CreateProductForm";

const headerCols = ["Плошадки", "Тип", "Гео", "Цена", "Импортировать.ф"];
const bodyCols = ["name", "category_id", "states_id", "price", "description"];

function CreateCreative() {
  return (
    <TableCRUD
      title="Добавления аккаунта для продажа"
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getProducts}
      createTableData={createProduct}
      Form={CreateProductForm}
    ></TableCRUD>
  );
}

export default CreateCreative;
