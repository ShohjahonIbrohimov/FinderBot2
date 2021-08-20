import React from "react";

const Table = ({ tableData, headerCols, bodyCols, handleDelete }) => {
  return (
    <table>
      <tr>
        {headerCols.map((col) => (
          <th>{col}</th>
        ))}
        <th></th>
      </tr>
      <tbody>
        {tableData.map((p) => (
          <tr>
            {bodyCols.map((col) => {
              if (col === "username") {
                return <td>@{p[col]}</td>;
              } else {
                return <td>{p[col]}</td>;
              }
            })}
            <td style={{ display: "flex", justifyContent: "space-around" }}>
              <span class="icon_wrap" onClick={() => handleDelete(p._id)}>
                <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
