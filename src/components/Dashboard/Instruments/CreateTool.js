import axios from "axios";
import React, { useEffect, useState } from "react";
import { getPayments, payPayment, deletePay } from "../../../api/calls/payment";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateToolForm from "./CreateToolForm";

const headerColsMenu = ["Сумма", "Способ оплаты", "Покупатель", "Статус"];
const bodyColsMenu = ["amount", "customFields", "customer", "status"];

function CreateTool() {
  const [users, setusers] = useState([]);

  const handleUpdatePay = (data) => {
    axios({
      url: "https://api.g-obox.ru/offers/payment/update",
      method: "POST",
      data,
    }).then((res) => setusers(res.data.data));
  };

  return (
    <div class="w3-container">
      <h1>Способ оплата</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ marginRight: "1.5rem", width: "40%" }}>
          <h3>Qiwi</h3>
          <CreateToolForm />
        </div>
        {/* <div style={{ marginRight: "1.5rem", width: "40%" }}>
          <h3>Qiwi</h3>
          <CreateToolForm />
        </div>
        <div style={{ marginRight: "1.5rem", width: "40%" }}>
          <h3>Qiwi</h3>
          <CreateToolForm />
        </div>
        <div style={{ marginRight: "1.5rem", width: "40%" }}>
          <h3>Qiwi</h3>
          <CreateToolForm />
        </div> */}
      </div>

      <TableCRUD
        title="Истории платежей"
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getPayments}
        createTableData={payPayment}
        Form={false}
        handleDelete={deletePay}
        addBtn={false}
        payusers={users}
        handleUpdatePay={handleUpdatePay}
      ></TableCRUD>
    </div>
  );
}

export default CreateTool;
{
  /* <div>
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
        </div> */
}
