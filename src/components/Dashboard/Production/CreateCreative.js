import React from "react";
import {
  createSaleAccount,
  getSaleAccounts,
  deleteSaleAccount,
} from "../../../api/calls/sale";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CreateProductForm";
import { fields } from "./items";

const headerCols = fields.map((field) => field.label);
const bodyCols = fields.map((field) => field.name);

function CreateCreative() {
  return (
    <div>
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
    </div>
  );
}

export default CreateCreative;
