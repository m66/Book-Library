import React, { useState } from "react";

import "./BookLib.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const BookLib = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  function handleOpenForm() {
    setIsOpenForm((prev) => !prev);
  }

  return (
    <div className="BookLib">
      <div className="Books-wrapper">
        <h1>Books</h1>
        <div className="books">
          The Book Library is empty {<FontAwesomeIcon icon={faBook} />}
        </div>
      </div>
      <div className="btnWrapper">
        <button onClick={handleOpenForm}>Add Book</button>
      </div>
      {isOpenForm && (
        <div className="add-book">
          <form action="">
            <input type="text" placeholder="Book Name" />
            <input type="text" placeholder="Descrioptions" />
            <select>
              <option>Writer 1</option>
              <option>Writer 2</option>
              <option>Writer 3</option>
            </select>
            <button>Add Book</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookLib;
