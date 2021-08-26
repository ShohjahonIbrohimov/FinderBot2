import React, { useState, useRef } from "react";
import { getPayments, payPayment } from "../../../api/calls/payment";
import TableCRUD from "../../Reusable/TableCRUD";

const headerColsMenu = ["Сумма", "Способ оплаты", "Покупатель", "Статус"];
const bodyColsMenu = ["amount", "customFields", "customer", "status"];

function CreateTool() {
  return (
    <div class="w3-container">
      <h1>Способ оплата</h1>

      <div class="payment-method-input-wrap">
        <div>
          <label for="fname">Карты:</label>
          <br />
          <div class="payment-method-input-item">
            <input type="text" id="fname" name="fname" />
            <button class="app-button">+</button>
          </div>
        </div>
        <div>
          <label for="fname">Ю моней:</label>
          <br />
          <div class="payment-method-input-item">
            <input type="text" id="fname" name="fname" />
            <button class="app-button">+</button>
          </div>
        </div>
        <div>
          <label for="fname">Web money:</label>
          <br />
          <div class="payment-method-input-item">
            <input type="text" id="fname" name="fname" />
            <button class="app-button">+</button>
          </div>
        </div>
        <div>
          <label for="fname">QIWI:</label>
          <br />
          <div class="payment-method-input-item">
            <input type="text" id="fname" name="fname" />
            <button class="app-button">+</button>
          </div>
        </div>
      </div>

      <TableCRUD
        title="Истории платежей"
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getPayments}
        createTableData={payPayment}
        Form={false}
        handleDelete={() => {}}
        addBtn={false}
      ></TableCRUD>
    </div>
  );
}

export default CreateTool;
