import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getBooksAction } from "../actions";

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch(getBooksAction())
})

class BookStore extends Component {
  state = {
    bookSelected: null,
  };

  componentDidMount = () => {
    this.props.getBooks()
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    return (
      <Row>
        {
          this.props.books.loading ? <p>LOADING...</p> :
            <>
              <Col md={4}>
                <BookList
                  bookSelected={this.state.bookSelected}
                  changeBook={this.changeBook}
                  books={this.props.books.stock}
                />
              </Col>
              <Col md={8}>
                <BookDetail
                  bookSelected={this.state.bookSelected}
                />
              </Col>
            </>
        }
        {
          this.props.books.error && <p>AWW SNAP, WE GOT AN ERROR!</p>
        }
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
