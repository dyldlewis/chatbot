import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
// import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {},
    };
  };

  componentWillMount() {

  }

  // onChange = e =>
  //   this.setState({
  //     data: { ...this.state.data, [e.target.name]: e.target.value }
  //   });


  // onSubmit = () => {
  //   const errors = this.validate(this.state.data);
  //   console.log(errors);
  //   this.setState({ errors });
  //   if (Object.keys(errors).length === 0) {
  //     this.props
  //       .submit(this.state.data)
  //       .catch(err => this.setState({ errors: err.response.data.errors }));
  //     console.log(this.state);
  //   }
  // };

  // validate = (data) => {
  //   const errors = {}
  //   if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
  //   if (!data.password) errors.password = "Can't be blank";
  //   return errors
  // }

  render() {
    var loginStyle = {
      marginTop: "200px"
    }
    return (
      <div style={loginStyle}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            onChange={this.onChange}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="make it secure"
            onChange={this.onChange}/>
        </Form.Field>
        <Button primary>Login</Button>
      </div>
    );
  }
}

// LoginForm.propTypes = {
//   submit: PropTypes.func.isRequired
// }

export default LoginForm;
