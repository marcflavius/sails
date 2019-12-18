import { Box, Button, Text }     from 'grommet';
import { Header }                from 'grommet-controls';
import React                     from 'react';
import { connect }               from 'react-redux';
import { withRouter }            from 'react-router';
import { Event }                 from '../../../App';
import routes                    from '../../../Constants/routes';
import { logoutAdminSagaAction } from '../../../redux/actions/saga/logoutAdminSaga.actions';
import { getLocalStorageAuth }   from '../../ExamContainer/services/localStorage';
import { AppButton }             from '../../UI/AppButton';
import Modal                     from '../../UI/Modal';

const topNavigation = (props) => <Header
  position='sticky'
  pad='small'
  style={{
    backgroundColor: 'layout'
  }}
>
  <Button label="Admin" width={10} onClick={() => {
    props.history.push('/app/login')
  }} />
  {!Object.values(routes.back).includes(props.history.location.pathname)
    ? null
    : <React.Fragment>
      <Text>Administration</Text>
      <React.Fragment>
        <Text>{`${getLocalStorageAuth().firstName} ${getLocalStorageAuth().lastName} - ${getLocalStorageAuth()
          .role
          .charAt(0).toUpperCase()}${getLocalStorageAuth().role.substring(1)}`}</Text>
        <Button
          label="Déconnexion"
          onClick={() => {
            Event.emit('modal.open', routes.front.ADMIN_LOGIN, 'Je confirme', logoutAdminSagaAction);
          }}
        />
        <Modal type={'confirmed'} history={props.history} />
      </React.Fragment>


    </React.Fragment>}
</Header>;

export default connect(({auth}) => auth)(withRouter(topNavigation));
