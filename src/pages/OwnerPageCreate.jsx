import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const OwnerPageCreate = () => {
  const { ownerId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const saveTitle = (event) => {
    setTitle(event.target.value);
  };

  const saveBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(`https://guestbook.jmoomin.com/${ownerId}/articles`, {
        body,
        title,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate(-1);
  };

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>
      <div>
        <input type="text" placeholder="제목" onChange={saveTitle}></input>
      </div>
      <div>
        <textarea placeholder="본문" onChange={saveBody}></textarea>
      </div>
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default OwnerPageCreate;
