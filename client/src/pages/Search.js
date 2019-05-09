import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";
import books from "../utils/books";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const KEY = process.env.REACT_APP_BOOKS;

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onTermSubmit = async term => {
    if (term) {
      const response = await books.get("/volumes", {
        params: {
          q: term,
          key: KEY
        }
      });
      this.setState({
        books: response.data.items
      });
      console.log("state", this.state);
    }
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    this.onTermSubmit(this.state.search);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search"
              />
              <FormBtn
                disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <BookList books={this.state.books} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
