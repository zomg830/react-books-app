import React, { Component } from "react";

import "./BookItem.css";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";

class BookItem extends Component {
  state = { buttonText: "Add to Shelf", addedToShelf: false };

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  addToShelf(title, author, synopsis) {
    API.saveBook({
      title,
      author,
      synopsis
    });
    this.setState({ buttonText: "Added to Shelf!", addedToShelf: true });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4 sm-4">
            <img
              className="thumbnail"
              src={
                !this.props.book.volumeInfo.imageLinks
                  ? "https://upload.wikimedia.org/wikipedia/commons/6/61/Book-icon-orange.png"
                  : this.props.book.volumeInfo.imageLinks.thumbnail
              }
            />
          </Col>
          <Col size="md-8 sm-8">
            <p>Title: {this.props.book.volumeInfo.title}</p>
            <p>
              Author:{" "}
              {!this.props.book.volumeInfo.authors
                ? "Unknown"
                : this.props.book.volumeInfo.authors
                    .map(author => author)
                    .join(", ")}
            </p>
            <p>
              {!this.props.book.searchInfo
                ? "No description available"
                : this.decodeHtml(this.props.book.searchInfo.textSnippet)}
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-3 sm-3">
            <button
              className="btn"
              style={{ marginTop: "4px" }}
              onClick={
                this.state.addedToShelf
                  ? null
                  : () => {
                      this.addToShelf(
                        this.props.book.volumeInfo.title,
                        this.props.book.volumeInfo.authors[0],
                        this.props.book.volumeInfo.description
                      );
                    }
              }
            >
              {this.state.buttonText}
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookItem;
