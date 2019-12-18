import TextField                      from '@material-ui/core/TextField';
import { Box, Button, Form, Heading } from 'grommet';
import React, { Component }           from 'react';
import { Event }                      from '../../App';
import MyMaskInput                    from '../ExamContainer/Control/Timer/Timer';
import Modal                          from '../UI/Modal';

class Cgu extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: ''
  };

  inputChange = (e, key) => {
    return this.setState({[key]: e.target.value});
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log('submited');
  };

  validate = (key) => !!this.state[key] !== true;

  render() {
    return (<Box background={'brand'} style={{height: '100vh'}}>
      <Box flex align={'center'} justify={'center'}>
        <Box width={'medium'} pad={'small'} background={'light'} round={'small'}>
          <Form onSubmit={(e) => this.submitHandler}>
            <Heading level={3}>Information cantidate</Heading>
            <Box>
              <TextField
                onChange={(e) => this.inputChange(e, 'firstName')}
                error={this.validate('firstName')}
                id="firstName"
                label="Prénom"
                type="text"
                autoComplete="current-firstName"
                margin="normal"
              />
              <TextField
                onChange={(e) => this.inputChange(e, 'lastName')}
                id="'lastName'"
                error={this.validate('lastName')}
                label="Nom"
                type="text"
                autoComplete="current-lastName"
                margin="normal"
              />
              <MyMaskInput />
            </Box>
            <Box direction="row" justify="end" margin={{top: 'medium'}}>
              <Button type="submit" label="Je valide" primary onClick={() => {
                Event.emit('modal.open', '/app/test', 'Je confirme les informations renseignées');
              }} />
            </Box>
          </Form>
        </Box>
        <Modal type={'confirmed'} history={this.props.history} />
      </Box>
    </Box>);
  }
}

export default Cgu;
