import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';

class SignIn extends Component{

    constructor(props) {
        super(props);

        // reset login status
        

        this.state = {
            username: '',
            password: '',
            //submitted: false
            credentials:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onClick(e){
        axios.get(`http://localhost:3000/data`)
        .then(res =>{
           const credentials= res.data.user;
           console.log(credentials);
        

})      

    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
   
/*
        const registration= {username: this.state.username, Password:this.state.password};
            axios.post('http://localhost:8080/public/dummy/value.json', registration)
            .then(res =>{

                console.log(res);
            })
                
        alert('aname submitted',JSON.stringify(registration));*/
        e.preventDefault();

       // this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        return (
          <div className="container-fluid">
            <form onSubmit={this.handleSubmit}>
            <img src="/public/img/logo.jpg" alt="logo" /><br /><br/>
            <FormGroup controlId="UserName" bsSize="large" >
            <div className="form-group">
                <ControlLabel ><strong>UserName:</strong></ControlLabel><br/><br/>
                <FormControl
                  autoFocus
                  className="formstyle"
                  type="text"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
               {/*submitted && !username &&
                            <div className="help-block">Username is required</div>
               */}
                        </div>
              </FormGroup><br/>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel><strong>Password</strong></ControlLabel><br/><br/>
                <FormControl
                className="formstyle"
                  /*value={this.state.password}
                  onChange={this.handleUserInput}*/
                  type="password"
                />
              </FormGroup><br/>
             <Button onClick={this.onClick}
                block
                bsSize="large"
                className="formstyle"
                //disabled={!this.state.formValid}
                type="submit">
                Create your professional account
              </Button><br/> <br/>
              </form>
          </div>
        );
      }
    }
    
    export default SignIn;