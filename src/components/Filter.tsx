import React, { useState } from "react";
import Category from "./category/Category";
import Search from "./Search";
import Result from "./Result";

function Filter() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText(value);
    setValue("");
  };

  return (
    <>
      <Search
        value={value}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      {text ? <Result searchText={text} /> : <Category />}
    </>
  );
}

export default Filter;
