import React from "react";
import { createCart, getCarts } from "../../../api/calls/cart";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CartsForm";

const headerCols = ["Название", "Категория", "State ID", "Цена", "Описание"];
const bodyCols = ["name", "category_id", "states_id", "price", "description"];

function ProductsForm() {
  return (
    <TableCRUD
      title="Добавления Корзина"
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getCarts}
      createTableData={createCart}
      Form={CreateProductForm}
      handleDelete={() => {}}
    ></TableCRUD>
  );
}

export default ProductsForm;
