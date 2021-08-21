import React from "react";
import {
  createSaleAccount,
  getSaleAccounts,
  deleteSaleAccount,
} from "../../../api/calls/sale";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CreateProductForm";

const headerCols = ["Имя", "ГЕО", "Цена", "Дата рождения"];
const bodyCols = ["firstName", "geo", "price", "birthDate"];

function CreateCreative() {
  return (
    <TableCRUD
      modalWidth={"90%"}
      title="Добавления аккаунта для продажа"
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getSaleAccounts}
      createTableData={createSaleAccount}
      Form={CreateProductForm}
      handleDelete={deleteSaleAccount}
    ></TableCRUD>
  );
}

export default CreateCreative;
