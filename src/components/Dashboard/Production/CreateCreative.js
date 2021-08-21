import axios from "axios";
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
  const handleDownload = (id) => {
    axios({
      url: `/download/file/send/${id}`,
      method: "GET",
      responseType: "blob",
    });
    // .then((res) => res.data.blob())
    // .then((blob) => {
    //   // Create blob link to download
    //   const url = window.URL.createObjectURL(new Blob([blob]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", `FileName.pdf`);
    //   // Append to html link element page
    //   document.body.appendChild(link);
    //   // Start download
    //   link.click();
    //   // Clean up and remove the link
    //   link.parentNode.removeChild(link);
    // });
  };

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
        handleDownload={handleDownload}
      ></TableCRUD>
    </div>
  );
}

export default CreateCreative;
