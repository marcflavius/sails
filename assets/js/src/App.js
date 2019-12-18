import { ConnectedRouter }  from 'connected-react-router';
import EventEmitter         from 'eventemitter3';
import { Grommet }          from 'grommet';
import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { Switch }           from 'react-router';
import { Route }            from 'react-router-dom';
import { AppConfig }        from './AppConfig';
import AdminInterface       from './components/AdminContainer/AdminInterface';
import { ShowAdmin }        from './components/AdminContainer/Main/Contents/Admin/ShowAdmin';
import CreateExam           from './components/AdminContainer/Main/Contents/Exams/CreateExam';
import EditQuestion         from './components/AdminContainer/Main/Contents/Exams/EditQuestion';
import ListExams            from './components/AdminContainer/Main/Contents/Exams/ListExams';
import { ShowExam }         from './components/AdminContainer/Main/Contents/Exams/ShowExam';
import { CreateSession }    from './components/AdminContainer/Main/Contents/Sessions/CreateSession';
import ListSessions         from './components/AdminContainer/Main/Contents/Sessions/ListSessions';
import { ShowSession }      from './components/AdminContainer/Main/Contents/Sessions/ShowSession';
import TestInterface        from './components/ExamContainer/ExamInterface';
import { PrivateRoute }     from './components/HOC/PrivateRoute';
import Cgu                  from './components/SinglePage/Cgu';
import Done                 from './components/SinglePage/Done';
import InfoForm             from './components/SinglePage/InfoForm';
import { is404 }            from './components/SinglePage/is404';
import LoginForm            from './components/SinglePage/LoginForm';
import { Flash }            from './components/UI/Flash';
import Page                 from './components/UI/Page';
import routes               from './Constants/routes';
import store, { history }   from './redux/store';

const customTheme = AppConfig.theme;

class App extends Component {

  /*
   * Affichage de la raccine de l'admin
   */
  renderAdmin = (Cnt) => <AdminInterface>
    <Cnt />
  </AdminInterface>;

  /*
   *  Affichage de la raccine du front
   */

  renderAppLayout = (Cnt) => <Page>
    <Cnt />
  </Page>;

  render() {
    return (<Grommet theme={customTheme} full>
      <ConnectedRouter history={history}>
        <Switch history={history}>

          {/*BACK*/}
          <PrivateRoute exact path={routes.back.SETTINGS} renderer={this.renderAdmin} com={is404} />
          <PrivateRoute exact path={routes.back.ADMIN_LIST_EXAMS} renderer={this.renderAdmin} com={ListExams} />
          <PrivateRoute exact path={routes.back.ADMIN_SHOW_EXAM} renderer={this.renderAdmin} com={ShowExam} />
          <PrivateRoute exact path={routes.back.CREATE_EXAM} renderer={this.renderAdmin} com={CreateExam} />
          {/*questions*/}
          <PrivateRoute exact path={routes.back.ADMIN_EDIT_QUESTION} renderer={this.renderAdmin} com={EditQuestion} />
          {/*admin/sessions*/}
          <PrivateRoute exact path={routes.back.ADMIN_LIST_SESSIONS} renderer={this.renderAdmin} com={ListSessions} />
          <PrivateRoute exact path={routes.back.CREATE_SESSION} renderer={this.renderAdmin} com={CreateSession} />
          <PrivateRoute exact path={routes.back.ADMIN_SHOW_SESSION} renderer={this.renderAdmin} com={ShowSession} />

          <Route path={'/app/*'} component={is404} />

          {/*FRONT*/}
          <Route exact path={routes.front.ADMIN} renderer={this.renderAdmin} com={ShowAdmin} />
          <Route exact path={routes.front.HOME} component={Cgu} />
          <Route exact path={routes.front.TEST} render={() => this.renderAppLayout(TestInterface)} />
          <Route exact path={routes.front.DONE} component={Done} />
          <Route exact path={routes.front.INFO} component={InfoForm} />
          <Route exact path={routes.front.ADMIN_LOGIN} component={LoginForm} />

        </Switch>
      </ConnectedRouter>
      <Flash />
    </Grommet>);
  }
}

function root() {
  return <Provider store={store}>
    <App />
  </Provider>;
}

export default (root);

export const Event = new EventEmitter();
