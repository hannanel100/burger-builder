import React, { Component } from "react";

import axios from "../../axios-orders";
import Button from "../../components/UI/Button/Button";

import classes from "./ContactData.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      steet: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      costumer: {
        name: "Hannanel Gershinsky",
        address: {
          street: "Test 1",
          zipCode: "432432",
          country: "Israel",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          type="text"
          name="name"
          className={classes.Input}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          className={classes.Input}
          placeholder="Your Email"
        />
        <input
          type="text"
          name="street"
          className={classes.Input}
          placeholder="Your Street"
        />
        <input
          type="text"
          name="postal"
          className={classes.Input}
          placeholder="Your Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
