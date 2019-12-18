import React                   from 'react';
import { connect }             from 'react-redux';
import { Route }               from 'react-router-dom';
import Redirect                from 'react-router/Redirect';
import routes                  from '../../Constants/routes';
import { getLocalStorageAuth } from '../ExamContainer/services/localStorage';
import PropTypes               from 'prop-types';

export const PrivateRoute = connect(({auth}) => ({auth}))(({renderer, com, auth, ...rest}) => <Route
  {...rest}
  render={() => getLocalStorageAuth().state || false
    ? renderer(com)
    : <Redirect
      to={{
        pathname: routes.front.ADMIN_LOGIN
      }}
    />}
/>);

PrivateRoute.propTypes = {
  renderer: PropTypes.func.isRequired,
  com: PropTypes.any.isRequired
};
