import React, { useState } from "react";
import { styled } from "styled-components";

const Dropdown = ({ isOpen }) => {
  const filterList = ["최근 3개월", "최근 6개월", "최근 1년", "최근 2년"];
  const [selected, setSelected] = useState(0);
  return <>{isOpen ? <Open></Open> : <Closed></Closed>}</>;
};

export default Dropdown;
const Open = styled.div``;
const Closed = styled.div``;
