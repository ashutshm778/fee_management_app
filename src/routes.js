import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Student from './components/student/Student';
import AddStudent from './components/student/AddStudent';

const routes = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/student',
    component: Student,
    exact: true
  },
  {
    path: '/add-student',
    component: AddStudent,
    exact: true
  },
 // and so on for other routes in your project
]

export default routes;