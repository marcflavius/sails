import { Box, Button, Heading, Text } from 'grommet';
import React, { Component }           from 'react';
import { connect }                    from 'react-redux';
import { Event }                      from '../../App';
import '../../styles/Modal.css';

let openModal;
let closeModal;

class Modal extends Component {
  state = {
    modalShow: false,
    action: null,
    modalLinkTo: '/',
    message: 'Je confirme ma saisie'
  };

  openModal = (location, message, action) => {

    this.setState({
      modalShow: true,
      modalLinkTo: location,
      message,
      action
    });
  };

  closeModal = () => {
    this.setState({modalShow: false});
  };

  componentDidMount() {
    openModal = Event.on('modal.open', (location, message, action) => {
      this.openModal(location, message, action);
    });

    closeModal = Event.on('modal.close', () => {
      this.closeModal();
    });

  }

  componentWillUnmount() {
    Event.removeListener('modal.open', openModal);
    Event.removeListener('modal.close', closeModal);
  }

  render() {
    const modal = <div className={'Modal'}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '13vh',
        height: '100vh',
        minWidth: '300px'
      }}>

        {this.props.type === 'confirmed'
          ? <Box round pad={'small'} color={'brand'} background={'light'}>
            <Box flex justify={'center'}>
              <Heading alignSelf={'center'} level={3}>Confirmer</Heading>
              <Text flex style={{width: 300}} margin={'small'}>{this.state.message}</Text>
              <Box flex>
                <Box direction={'row'} justify={'between'}>
                  <Button type={'submit'} label={'Annuler'} onClick={() => {
                    Event.emit('modal.close');
                  }} />
                  <Button horizontal={'xlarge'} label={this.props.success
                    ? this.props.success
                    : 'Confirmer'} color={'#00CC66'} onClick={() => {
                    if (this.state.action) {
                      Event.emit('modal.close');
                      return this.props.dispatch(this.state.action());
                    }
                    this.props.history.push(this.state.modalLinkTo);
                    Event.emit('modal.close');
                  }} />
                </Box>
              </Box>
            </Box>
          </Box>
          : null}
      </div>
    </div>;
    return this.state.modalShow === true
      ? modal
      : null;
  }
}

export default connect()(Modal);
