let basename = '/app';
let adminPath = '/app/admin';
let examsSlug = 'exams';
let sessionSlug = 'sessions';

export default {
  back: {
    ADMIN: `${adminPath}`,
    ADMIN_LIST_EXAMS: `${adminPath}/${examsSlug}`,
    CREATE_EXAM: `${adminPath}/${examsSlug}/creer`,
    ADMIN_SHOW_EXAM: `${adminPath}/${examsSlug}/:id/voir`,
    ADMIN_EDIT_QUESTION: `${adminPath}/${examsSlug}/:id/questions/:questionId`,
    CREATE_SESSION: `${adminPath}/${sessionSlug}/creer`,
    ADMIN_SHOW_SESSION: `${adminPath}/${sessionSlug}/:id/voir`,
    ADMIN_LIST_SESSIONS: `${adminPath}/${sessionSlug}`,
    SETTINGS: `${adminPath}/settings`
  },

  front: {
    HOME: `${basename}`,
    ADMIN_LOGIN: `${basename}/login`,
    TEST: `${basename}/test`,
    DONE: `${basename}/terminer`,
    INFO: `${basename}/info`
  }
};
