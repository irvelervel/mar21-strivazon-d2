import { useState, useEffect } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getBooksAction } from "../actions";

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch(getBooksAction())
})

const BookStore = ({ getBooks, books }) => {

  const [bookSelected, setBookSelected] = useState(null)

  useEffect(() => {
    getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // componentDidMount = () => {
  //   this.props.getBooks()
  // };

  return (
    <Row>
      {
        books.loading ? <p>LOADING...</p> :
          <>
            <Col md={4}>
              <BookList
                bookSelected={bookSelected}
                changeBook={(book) => setBookSelected(book)}
                books={books.stock}
              />
            </Col>
            <Col md={8}>
              <BookDetail
                bookSelected={bookSelected}
              />
            </Col>
          </>
      }
      {
        books.error && <p>AWW SNAP, WE GOT AN ERROR!</p>
      }
    </Row>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
