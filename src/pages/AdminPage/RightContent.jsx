import React, { useState } from "react";
import Card from "../../components/Card/Card";
// import ipImg from "../../images/cardIp.png";
import "./InputText.css";
const RightContent = ({ content = {} }) => {
  console.log(content);

  function TextInput({ type = "text", label }) {
    const [value, setValue] = useState("");

    function handleChange(e) {
      setValue(e.target.value);
    }
    return (
      <div className="input-container">
        <input type={type} value={value} onChange={handleChange} />
        <label className={value && "filled"}>{label}</label>
      </div>
    );
  }

  const handleUploadChange = (e) => {
    // console.log(e.target.files)
    const files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    // reader.onload(e) => {}
  };

  return (
    <div
      className="mt-4 ml-10"
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {content.module === "Storage Unit" && (
        <div className="flex justify-center items-center w-full">
          <label
            for="dropzone-file"
            className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleUploadChange}
            />
          </label>
        </div>
      )}
      {/* <pre>{JSON.stringify(content, undefined, 4)}</pre> */}
      {content.module !== ["Administrator", "Storage Unit"] && (
        <Card className="d-flex mx-4">
          <div
            className="h-[80vh] w-[40vw] flex-col-center gap-10 d-block"
            style={{ backgroundColor: "black" }}
          >
            <p style={{ color: "white" }}>{content.module}</p>
            <form>
              <TextInput label="IP Address" />
              <TextInput label="Instrument Model" />
              <TextInput label="Default Gateway" />
            </form>
            <p style={{ color: "white" }}>
              Status: <b style={{ color: "green" }}>Active</b>
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RightContent;
