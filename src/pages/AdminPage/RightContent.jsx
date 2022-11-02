import React from "react";
import Card from "../../components/Card/Card";
import ipImg from "../../images/cardIp.png";
const RightContent = ({ content={} }) => {
  return (
    <div
      className="mt-4 ml-10"
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <pre>{JSON.stringify(content, undefined, 4)}</pre> */}
      {content.module !== "Administrator" && (
        <Card className="d-flex mx-4">
          <div
            className="h-[80vh] w-[40vw] flex-col-center gap-10 d-block"
            style={{ backgroundColor: "black" }}
          >
            <p style={{ color: "white" }}>{content.module}</p>
            <img src={ipImg} alt="logo" />
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
