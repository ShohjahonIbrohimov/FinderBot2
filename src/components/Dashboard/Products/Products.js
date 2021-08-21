import React from "react";
import {
  createProduct,
  getProducts,
  deleteProduct,
} from "../../../api/calls/product";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./ProductsForm";

const headerCols = ["Плошадки", "Тип", "Гео", "Цена", "Импортировать.ф"];
const bodyCols = ["name", "type_name", "states_id", "price", "description"];

function ProductsForm() {
  return (
    <TableCRUD
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
