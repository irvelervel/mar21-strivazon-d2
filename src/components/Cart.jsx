import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeItemFromCartAction } from "../actions";

const mapStateToProps = state => ({
  products: state.cart.products
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: (index) => {
    dispatch(removeItemFromCartAction(index))
  }
})

const Cart = ({ products, removeFromCart }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {products.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromCart(i)}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{" "}
        {products.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
