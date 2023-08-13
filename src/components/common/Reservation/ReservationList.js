import React, { useState } from "react";
import ReservationItem from "./ReservationItem";

const ReservationList = () => {
  const [list, setList] = useState([]);
  return (
    <div>
      {list.map((item) => {
        return <ReservationItem item={item} />;
      })}
    </div>
  );
};

export default ReservationList;
