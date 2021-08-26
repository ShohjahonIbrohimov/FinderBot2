import React, { useState } from "react";
import TableCRUD from "../../Reusable/TableCRUD2";
import MenuForm from "./PaymentHistoryForm";
import { getPayments, payPayment } from "../../../api/calls/payment";

const headerColsMenu = ["Сумма", "Способ оплаты", "Покупатель", "Статус"];
const bodyColsMenu = ["amount", "customFields", "customer", "status"];

const Menu = ({}) => {
  return (
    <div class="w3-container">
      <h2>Добавления Важное инфо</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "50%" }}>
          <TableCRUD
            title="Добавления Важное инфо"
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getPayments}
            createTableData={payPayment}
            Form={MenuForm}
            handleDelete={() => {}}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
