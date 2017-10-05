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

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });


  onSubmit = () => {
    const errors = this.validate(this.state.data);
    console.log(errors);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors }));
      console.log(this.state);
    }
  };

  validate = (data) => {
    const errors = {}
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if (!data.password) errors.password = "Can't be blank";
    return errors
  }

  render() {
    const { data, errors } = this.state;
    console.log(errors);
    return (
      <Form onSubmit={this.onSubmit}>
      { errors.global && <Message negative>
      <Message.Header>Something went wrong</Message.Header>
      <p>{errors.global}</p>
      </Message>}
      <Form.Field error={!!errors.email}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          value={data.email}
          onChange={this.onChange}/>
      </Form.Field>
      {errors.email && <InlineError text={errors.email} />}
      <Form.Field error={!!errors.password}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="make it secure"
          value={data.password}
          onChange={this.onChange}/>
        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
