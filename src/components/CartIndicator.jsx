import { useState } from 'react';
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { connect } from 'react-redux'
import { FormControl } from "react-bootstrap";
import { setUsernameAction } from '../actions';

// const mapStateToProps = (state) => state
// mapStateToProps is a function returning an object
// const mapStateToProps = (state) => {
//   return {
//     ...state
//     // with the spread operator you're taking all the properties from state
//     // and create a new object out of them
//   }
// }

// const mapStateToProps = (state) => ({
//   cartLength: state.cart.products.length
// })

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  setReduxUsername: (name) => {
    dispatch(setUsernameAction(name))
  }
})

const CartIndicator = ({ cart, history, user, setReduxUsername }) => {

  const [username, setUsername] = useState('')

  return (
    <div className="ml-auto mt-2">
      {
        user.firstName ?
          <Button color="primary" onClick={() => history.push("/cart")}>
            <span>Welcome, {user.firstName}!</span>
            <FaShoppingCart className="ml-2" />
            <span className="ml-2">{cart.products.length}</span>
          </Button>
          :
          <FormControl
            type="text"
            placeholder="your name?"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                // dispatch the action!
                setReduxUsername(username)
              }
            }}
          />
      }
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartIndicator));
