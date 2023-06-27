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

  const saveTitle = (event) => {
    setTitle(event.target.value);
  };

  const saveBody = (event) => {
    setBody(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .put(`https://guestbook.jmoomin.com/articles/${articleId}`, {
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
      <div>
        <input type="text" value={title} onChange={saveTitle}></input>
      </div>
      <div>
        <textarea onChange={saveBody} value={body}></textarea>
      </div>
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default OwnerPageCreate;
