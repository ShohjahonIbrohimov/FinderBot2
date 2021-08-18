import React, { useState } from "react";
import { uploadImage } from "../../api/api_calls";

function FileInput({
  refInput = null,
  register,
  label,
  name,
  errors,
  required = false,
  setimageUrl,
}) {
  const [loading, setloading] = useState(false);
  const onChange = (e) => {
    setloading(true);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    uploadImage(formData).then((res) => {
      setloading(false);
      setimageUrl(res.data.url);
    });
  };

  return (
    <label>
      <h5 className="file-label">{label}</h5>
      <div className="file-input-area">
        <div className="file-input-body" ref={refInput}>
          <div className="file-input-text">
            <span className="file-input-label">
              {loading ? "Loading...." : "Выбрать файл"}
            </span>
          </div>
          <input
            className="file-input"
            onChange={onChange}
            type="file"
            placeholder=""
            name={name}
            ref={register({ required })}
          />
        </div>
      </div>
      {errors[name] && <span className="input_error">Обязательно поле</span>}
    </label>
  );
}

export default FileInput;
