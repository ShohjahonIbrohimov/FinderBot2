import React from "react";
import { createCart, getCarts, deleteCart } from "../../../api/calls/cart";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CartsForm";

const headerCols = [
  "Название",
  "Категория",
  "State ID",
  "Цена",
  "Изображение",
  "Описание",
];
const bodyCols = [
  "name",
  "category_id",
  "states_id",
  "price",
  "image",
  "description",
];

function ProductsForm() {
  return (
    <TableCRUD
      title="Товары в корзине"
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getCarts}
      createTableData={createCart}
      Form={CreateProductForm}
      handleDelete={deleteCart}
      addBtn={false}
    ></TableCRUD>
  );
}

export default ProductsForm;
