import { Box, Button, Heading }         from 'grommet';
import React, { Component }             from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { connect }                      from 'react-redux';
import { withRouter }                   from 'react-router';
import { loginAdminSagaAction }         from '../../redux/actions/saga/loginAdminSaga.actions';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e, key) => {
    return this.setState({[key]: e.target.value});
  };

  submitHandler = () => {
    this.props.dispatch(loginAdminSagaAction({
      email: this.state.email,
      password: this.state.password
    }));
  };

  validate = (key) => !!this.state[key] !== true;

  render() {
    const {email, password} = this.state;
    return (<Box background={'brand'} style={{height: '100vh'}}>
      <Box flex align={'center'} justify={'center'}>
        <Box width={'medium'} pad={'small'} background={'light'} round={'small'}>
          <ValidatorForm
            ref="form"
            onSubmit={this.submitHandler}
            onError={errors => console.log(errors)}
          >
            <Heading level={3}>Connexion</Heading>
            <Box>
              <TextValidator
                label="Email"
                type="text"
                id="email"
                value={email}
                errorMessages={['ce champ est requis', 'email invalide']}
                validators={['required', 'isEmail']}
                onChange={(e) => this.handleChange(e, 'email')}
                margin="normal"
              />
              <TextValidator
                label="Password"
                type="password"
                id="'password'"
                value={password}
                errorMessages={['ce champ est requis']}
                validators={['required']}
                onChange={(e) => this.handleChange(e, 'password')}
                margin="normal"
              />
            </Box>
            <Box direction="row" justify="end" margin={{top: 'medium'}}>
              <Button type="submit" label="Je valide" primary />
            </Box>
          </ValidatorForm>
        </Box>
      </Box>
    </Box>);
  }
}

export default connect()(withRouter(LoginForm));
