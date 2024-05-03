import React, { useState, useEffect } from "react";
import { Http } from "./Axios";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    Http.get("Menu").then((res) => setMenu(res.data));
  }, []);

  // Split the menu items into three arrays for each row
  const rows = [[], [], [],[],[]];
  menu.forEach((item, index) => {
    rows[index % 3].push(item);
  });

  return (
    <div className="bg-[#F5EBDC]">
     
    </div>
  );
};
