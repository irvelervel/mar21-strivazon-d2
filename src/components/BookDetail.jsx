import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from 'react-redux'

import { addItemToCartAction } from '../actions'

// react-redux hooks
// useSelector
// useDispatch

const BookDetail = ({ bookSelected }) => {

  const user = useSelector((s) => s.user)
  // useSelector returns a portion of the Redux Store you can then assign to your own variable
  // into the functional component
  // it's pretty much as mapStateToProps into a connect function

  console.log(user)

  const dispatch = useDispatch()
  // dispatch is a reference to the redux dispatch function

  const [book, setBook] = useState(null)

  // componentDidUpdate(prevProps) {
  //   if (prevProps.bookSelected !== this.props.bookSelected) {
  //     this.setState({
  //       book: this.props.bookSelected,
  //     });
  //   }
  // }

  useEffect(() => {
    setBook(bookSelected)
  }, [bookSelected])
  // componentDidUpdate

  // useEffect(() => {
  //   setBook(undefined)
  //   console.log('finished mounting')
  // }, [])

  return (
    <div className="mt-3">
      {book ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{book.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={book.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>
                {book.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>
                {book.price}
              </p>
              {
                user.firstName ?
                  <Button color="primary" onClick={() => dispatch(addItemToCartAction(book))}>
                    ADD TO CART
                  </Button>
                  : <div>Please log in!</div>
              }
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Please select a book!</h3>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default BookDetail;
