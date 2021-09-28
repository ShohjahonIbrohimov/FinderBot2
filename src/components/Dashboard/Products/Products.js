import React from "react";
import {
  createProduct,
  getProducts,
  deleteProduct,
} from "../../../api/calls/product";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./ProductsForm";

const headerCols = [
  "Плошадки",
  "Тип",
  "Гео",
  "Витрина",
  "Цена",
  "Изображение",
  "Категория",
  "Описание",
];
const bodyCols = [
  "name",
  "type_name",
  "states_name",
  "showcase_name",
  "price",
  "image",
  "category_name",
  "description",
];

function ProductsForm() {
  return (
    <TableCRUD
      // overflow={"none"}
      title="Добавления продукты"
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getProducts}
      createTableData={createProduct}
      Form={CreateProductForm}
      handleDelete={deleteProduct}
    ></TableCRUD>
  );
}

export default ProductsForm;
