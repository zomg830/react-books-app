import React from "react";

import "./BookItem.css";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";

const BookItem = ({ book }) => {
  const decodeHtml = html => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const addToShelf = (title, author, synopsis) => {
    API.saveBook({
      title,
      author,
      synopsis
    });
  };

  return (
    <Container>
      <Row>
        <Col size="md-4 sm-4">
          <img
            className="thumbnail"
            src={
              !book.volumeInfo.imageLinks
                ? "https://upload.wikimedia.org/wikipedia/commons/6/61/Book-icon-orange.png"
                : book.volumeInfo.imageLinks.smallThumbnail
            }
          />
        </Col>
        <Col size="md-8 sm-8">
          <p>Title: {book.volumeInfo.title}</p>
          <p>
            Author:{" "}
            {!book.volumeInfo.authors ? "Unknown" : book.volumeInfo.authors[0]}
          </p>
          <p>
            {!book.searchInfo
              ? "No description available"
              : decodeHtml(book.searchInfo.textSnippet)}
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="md-3 sm-3">
          <button
            className="btn"
            style={{ marginTop: "4px" }}
            onClick={() => {
              addToShelf(
                book.volumeInfo.title,
                book.volumeInfo.authors[0],
                book.volumeInfo.description
              );
            }}
          >
            Add to Shelf
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookItem;
