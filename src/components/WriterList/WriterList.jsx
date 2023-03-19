import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./WriterList.scss";

const WriterList = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  function handleOpenForm() {
    setIsOpenForm((prev) => !prev);
  }
  return (
    <div className="WriterList">
      <div className="writers-wrapper">
        <h1>WriterList</h1>

        <div className="writers">The writers list is empty {<FontAwesomeIcon icon={faUser} />}</div>
      </div>
      <div className="btnWrapper">
        <button onClick={handleOpenForm}>Add Book</button>
      </div>
      {isOpenForm && (
        <div className="add-writer">
          <form action="">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Descrioptions" />
            <button>Add Writer</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WriterList;
