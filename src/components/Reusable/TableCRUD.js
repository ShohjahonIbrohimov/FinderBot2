import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import Table from "./Table";

function TableCRUD({
  getTableData,
  createTableData,
  headerCols,
  bodyCols,
  Form,
  title,
}) {
  const [open, setopen] = useState(false);
  const [tableData, settableData] = useState([]);
  const [loading, setloading] = useState(false);
  const [tloading, settloading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleGetTableData = () => {
    settloading(true);
    getTableData().then((res) => {
      settloading(false);
      settableData(res.data.data);
    });
  };

  const handleModalOpen = () => {
    setopen(true);
  };

  const onSubmit = (data) => {
    setloading(true);
    createTableData(data)
      .then((res) => {
        setopen(false);
        handleGetTableData();
        setloading(false);
        reset();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetTableData();
  }, []);

  return (
    <div class="w3-container">
      <div class="container">
        <div class="page-header">
          <h2 class="page-header__title">{title}</h2>
          <button id="myBtn" class="app-button" onClick={handleModalOpen}>
            Добавить
          </button>
        </div>

        <div style={{ minHeight: "80vh" }}>
          <Loader light={false} loading={tloading} />
          <Table
            tableData={tableData}
            headerCols={headerCols}
            bodyCols={bodyCols}
          />
        </div>

        <div
          id="myModal"
          class="modal"
          style={open ? { display: "block" } : {}}
        >
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" onClick={() => setopen(false)}>
                &times;
              </span>
              <h3>Добавления аккаунта для продажа</h3>
            </div>
            <div class="modal-body">
              <Form
                loading={loading}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCRUD;
