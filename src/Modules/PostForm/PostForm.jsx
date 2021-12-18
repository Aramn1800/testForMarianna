import React, { useState } from "react";
import "./PostForm.css";
import * as postFolder from "./postFolder.js";

const PostForm = () => {
  const [result, setResult] = useState(postFolder.stock);

  const [name, setName] = useState("");

  const [src, setSrc] = useState("");

  const [massage, setMassage] = useState("");

  const handleInputMassage = (e) => {
    setMassage(e.target.value);
  };

  const handleInputSrc = (e) => {
    setSrc(e.target.value);
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const newItem = (e) => {
    e.preventDefault();
    if (name && massage && src)
      setResult((prev) => [
        ...prev,
        { id: result.length + 1, name: name, massage: massage, avatarSrc: src },
      ]);
    setName("");
    setSrc("");
    setMassage("");
  };

  return (
    <div className="container">
      <div className="left">
        <form className="addPost" onSubmit={newItem}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={handleInputName}
            data-validate
          />
          <input
            type="url"
            placeholder="Введите ссылку на аватарку"
            value={src}
            onChange={handleInputSrc}
            data-validate
          />
          <textarea
            className="massage"
            placeholder="Текст поста"
            value={massage}
            onChange={handleInputMassage}
            data-validate
          />
          <button type="submit">Добавить</button>
          <p>Объявлений: {result.length}</p>
        </form>
        <div className="postContainer">
          {result.map((stock) => (
            <div className="post" key={stock.id}>
              <img src={stock.avatarSrc} alt="avatar" />
              <div className="postText">
                <h2>{stock.name}</h2>
                <p>{stock.massage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        {result.map(
          (stock) =>
            stock.id > result.length - 5 && (
              <div className="post" key={stock.id}>
                <img src={stock.avatarSrc} alt="avatar" />
                <div className="postText">
                  <h2>{stock.name}</h2>
                  <p>{stock.massage}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PostForm;
