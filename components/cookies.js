"use client";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (hasCookie("user")) {
      setUsers(JSON.parse(getCookie("user")));
    }
  }, []);

  const addUser = () => {
    let data = prompt("Enter user name");
    console.log(data);
    if (data && data !== "") {
      if (hasCookie("user")) {
        console.log("Cookies: ", getCookie("user"));
        let userData = JSON.parse(getCookie("user"));
        userData.push(data);
        setUsers(userData);
        setCookie("user", JSON.stringify(userData));
      } else {
        setCookie("user", JSON.stringify([data]));
        setUsers([data]);
      }
    }
  };

  const deleteUser = (i) => {
    let userData = JSON.parse(getCookie("user"));
    userData.splice(i, 1);
    setUsers(userData);
    setCookie("user", JSON.stringify(userData));
  };

  return (
    <div className="flex flex-col grow text-white">
      <button
        onClick={addUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add user
      </button>
      <div className="flex flex-row flex-wrap items-center justify-around grow">
        {users.map((user, index) => (
          <img
            onClick={() => deleteUser(index)}
            src={"https://leetcard.jacoblin.cool/" + user}
            key={index}
          ></img>
        ))}
      </div>
    </div>
  );
}
