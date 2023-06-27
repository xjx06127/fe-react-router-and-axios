import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const OwnerPageCreate = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then((res) => {
        setOwnerId(res.data.ownerId);
        setTitle(res.data.title);
        setBody(res.data.body);
        setCreationDate(res.data.createdAt);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [title, body]);

  const handleDeletion = () => {
    axios
      .delete(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then((res) => {})
      .catch((e) => {});
    navigate(`/${ownerId}`);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>작성일: {creationDate}</p>
      <button onClick={() => navigate("./edit")}>수정하기</button>
      <button onClick={handleDeletion}>제거하기</button>
    </>
  );
};

export default OwnerPageCreate;
