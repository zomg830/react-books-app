import React from "react";
import BookItem from "../BookItem";
import { List, ListItem } from "../List";

const BookList = ({ books }) => {
  if (books) {
    const renderedList = books.map(book => {
      return (
        <ListItem>
          <BookItem book={book} key={book.id} />
        </ListItem>
      );
    });
    return <List>{renderedList}</List>;
  }

  return <div>No Results Found!</div>;
};

export default BookList;
