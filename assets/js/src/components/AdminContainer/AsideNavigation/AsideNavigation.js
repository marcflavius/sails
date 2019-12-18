import { Sidebar, VerticalMenu }                from 'grommet-controls';
import { Add, SchedulePlay, StackOverflow }     from 'grommet-icons';
import { Dashboard, Home, Inbox, UserSettings } from 'grommet-icons/es6';
import { Box }                                  from 'grommet/es6';
import React, { Component }                     from 'react';
import { withRouter }                           from 'react-router';
import routes                                   from '../../../Constants/routes';
import { getLocalStorageAuth }                  from '../../ExamContainer/services/localStorage';

class AsideNavigation extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.sessions !== this.props.sessions) {
      this.setState({sessions: this.props.sessions});
      this.forceUpdate();
      return true;
    }
    return false;
  }

  render() {
    const adminRole = getLocalStorageAuth().role;
    let admin = adminRole !== 'responsable de recrutement'
      ? {
        id: 'admin',
        onClick: (e) => {
          e.preventDefault();
          this.goto(routes.back.ADMIN)},
        label: 'Admin',
        icon: <Home />
      }
      : {};

    return (<Sidebar
      title='Fil rouge'
      width='280px'
      style={{
        backgroundColor: 'layout',
        height: '100vh'
      }}
    >
      <Box overflow='auto'>
        <VerticalMenu
          expandAll
          activeItem={{id: 'home'}}
          items={[
            admin, {
              id: 'exams',
              label: 'Sujets d\'examens',
              icon: <Dashboard />,
              items: [
                {
                  id: 'create',
                  onClick: (e) => {
                    e.preventDefault();
                    this.goto(routes.back.CREATE_EXAM)},
                  label: 'Créer un sujet',
                  widget: <Add />
                }, {
                  id: 'index',
                  onClick: (e) => {
                    e.preventDefault();
                    this.goto(routes.back.ADMIN_LIST_EXAMS)},
                  label: 'Liste des sujets',
                  widget: <Box><StackOverflow /></Box>
                }
              ]
            }, {
              id: 'session',
              label: 'Session',
              icon: <Inbox />,
              items: [

                {
                  id: 'expenses',
                  onClick: (e) => {
                    e.preventDefault();
                    this.goto(routes.back.CREATE_SESSION)},
                  label: 'Créer une Session',
                  widget: <Add />
                }, {
                  id: 'sessions',
                  onClick: (e) => {
                    e.preventDefault();
                    this.goto(routes.back.ADMIN_LIST_SESSIONS)},
                  label: 'Liste des sessions',
                  widget: <SchedulePlay />
                }
              ]

            }, {
              id: 'settings',
              label: 'Réglages',
              icon: <UserSettings />,
              onClick: (e) => {
                e.preventDefault();
                this.goto(routes.back.SETTINGS)}
            }
          ]}
        />
      </Box>
    </Sidebar>);
  }

  goto(location) {
    this.props.history.push(`${location}`);
  }
}

export default withRouter(AsideNavigation);
