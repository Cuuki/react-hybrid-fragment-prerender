import React from "react";
import ReactDOMServer from "react-dom/server";
import Container from "./container";

const getButtonServerString = (data) =>
  ReactDOMServer.renderToString(
    <Container ariaLabel={data.body.labelText}>{data.body.name}</Container>
  );

export default getButtonServerString;
