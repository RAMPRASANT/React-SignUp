import React,{Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';

export default class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
      }
    
      handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
    

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="UserName" bsSize="large">
            <ControlLabel ><strong>UserName:</strong></ControlLabel><br/><br/>
            <FormControl
              autoFocus
              className="formstyle"
              type="text"
              value={this.state.userName}
              onChange={this.handleUserInput}
            />
          </FormGroup><br/>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel><strong>Email:</strong></ControlLabel><br/><br/>
            <FormControl
              autoFocus
              className="formstyle"
              type="email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </FormGroup><br/>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel><strong>Password</strong></ControlLabel><br/><br/>
            <FormControl
            className="formstyle"
              value={this.state.password}
              onChange={this.handleUserInput}
              type="password"
            />
          </FormGroup><br/>
          <FormGroup controlId="password1" bsSize="large">
            <ControlLabel><strong>Re-Enter Password:</strong></ControlLabel><br/><br/>
            <FormControl
            className="formstyle"
              autoFocus
              type="password"
              value={this.state.repassword}
              onChange={this.handleUserInput}
            />
            
          </FormGroup><br/>
          <Button onClick={this.onClick}
            block
            bsSize="large"
            className="formstyle"
            //disabled={!this.state.formValid}
            type="submit">
            Create your professional account
          </Button>
        </form>
      </div>
    );
  }
}

