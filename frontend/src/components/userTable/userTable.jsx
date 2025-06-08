import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Login/backendRouting";
import cookie from "js-cookie";

const UserTable = () => {
  const [data, setData] = useState([]);
  const getCookkie = cookie.get("userInfo");
  const tokenn = getCookkie ? JSON.parse(getCookkie) : null;
  console.log(tokenn, "tokennnn");
  const getData = async () => {
    try {
      const dataa = await axios.get(api.getAllUsers.url, {
        headers: {
          Authorization: `Bearer ${tokenn.token}`,
        },
      });
      console.log(dataa, "dadada");
      setData(dataa.data.body);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    verticalAlign: "middle",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  };



  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data, "datatata")}

          {data.map((e, index) => (
            <tr>
              <td style={thTdStyle}>{index + 1}</td>
              <td style={thTdStyle}>
                <img src={e.pic} alt="" style={{width:"50px"}} />
              </td>
              <td style={thTdStyle}>{e?.name}</td>
              <td style={thTdStyle}>{e?.email || e?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
