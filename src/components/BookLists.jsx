import React from "react";
import BookListItem from "./BookListItem";
import { useGetBooksQuery } from "../features/api/apiSlice";
import Error from "./ui/Error";
import { useSelector } from "react-redux";

const BookLists = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);

  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <Error message="There was an error!" />;
  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No books found!" />;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books
      // eslint-disable-next-line array-callback-return
      .filter((book) => {
        if (filter.checkedValue === "All") {
          return book;
        } else if (book.featured) {
          return book;
        }
      })
      // eslint-disable-next-line array-callback-return
      .filter((book) => {
        if (search.searchText === "") {
          return book;
        } else if (
          book.name.toLowerCase().includes(search.searchText.toLowerCase())
        ) {
          return book;
        }
      })
      .map((book) => <BookListItem key={book.id} book={book} />);
  }
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default BookLists;
