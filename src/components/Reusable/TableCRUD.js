import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import Table from "./Table";

function TableCRUD({
  addBtn = true,
  getTableData,
  createTableData,
  handleDelete,
  headerCols,
  bodyCols,
  Form,
  title,
}) {
  const [open, setopen] = useState(false);
  const [tableData, settableData] = useState([]);
  const [loading, setloading] = useState(false);
  const [tloading, settloading] = useState(false);
  const { register, handleSubmit, reset, watch, setValue } = useForm();

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

  const deleteTableData = (id) => {
    setloading(true);
    handleDelete(id)
      .then(() => {
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
          {addBtn && (
            <button id="myBtn" class="app-button" onClick={handleModalOpen}>
              Добавить
            </button>
          )}
        </div>

        <div style={{ minHeight: "40vh" }}>
          <Loader light={false} loading={tloading} />
          <Table
            tableData={tableData}
            headerCols={headerCols}
            bodyCols={bodyCols}
            handleDelete={deleteTableData}
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
              {Form && (
                <Form
                  loading={loading}
                  register={register}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  watch={watch}
                  setValue={setValue}
                  reset={reset}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCRUD;
