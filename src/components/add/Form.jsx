import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import CheckboxInput from "../ui/CheckboxInput";
import { useAddBookMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";

const Form = () => {
  const [addBook, { isLoading, isError }] = useAddBookMutation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    author: "",
    imgURL: "",
    rating: "",
    price: "",
    featured: false,
  });
  const { name, author, imgURL, rating, price, featured } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await addBook({
      name,
      author,
      thumbnail: imgURL,
      price,
      rating: Number(rating),
      featured,
    });

    if (data) {
      navigate("/");
    }
  };
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <TextInput
        title="Book Name"
        type="text"
        id="lws-bookName"
        value={name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <TextInput
        title="Author"
        type="text"
        id="lws-author"
        value={author}
        onChange={(e) => setData({ ...data, author: e.target.value })}
      />
      <TextInput
        title="Image Url"
        type="text"
        id="lws-thumbnail"
        value={imgURL}
        onChange={(e) => setData({ ...data, imgURL: e.target.value })}
      />

      <div className="grid grid-cols-2 gap-8 pb-4">
        <TextInput
          title="Price"
          type="number"
          id="lws-price"
          value={price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <TextInput
          title="Rating"
          type="number"
          id="lws-rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setData({ ...data, rating: e.target.value })}
        />
      </div>
      <CheckboxInput
        value={featured}
        onChange={() => setData({ ...data, featured: !featured })}
      />

      <button type="submit" className="submit" id="lws-submit" disabled={isLoading}>
        Add Book
      </button>
      {isError && <Error message="There was an error adding book!" />}
    </form>
  );
};

export default Form;
