import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const OwnerPage = () => {
  const { ownerId } = useParams();
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/${ownerId}/articles`)
      .then((res) => {
        setTitles(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [titles]);

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>
      {titles.length > 0 ? (
        <ul>
          {titles.map((ti) => (
            <li>
              <Link to={`/articles/${ti.id}`}>{ti.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>방명록이 없습니다.</div>
      )}
      <button onClick={() => navigate("./create")}>방명록 남기기</button>
    </>
  );
};

export default OwnerPage;
