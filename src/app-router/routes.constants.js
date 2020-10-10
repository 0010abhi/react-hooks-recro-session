import Applications from "../pages/applications";
import Demo1 from "../pages/demo1";
import Home from "../pages/home";
import ActivateAccount from "../pages/on-boarding/ActivateAccount";
import ForgotPassword from "../pages/on-boarding/ForgotPassword";
import LogIn from "../pages/on-boarding/LogIn";
import ResetPassword from "../pages/on-boarding/ResetPassword";
import SignUp from "../pages/on-boarding/SignUp";

export const DEFAULT_ROUTE = '/home';

const APP_ROUTES = [{
  id: 'home',
  path: '/home',
  component: Home,
}, {
  id: 'demo1',
  path: '/demo1',
  component: Demo1,
}, {
  id: 'log_in',
  path: '/login',
  component: LogIn,
}, {
  id: 'sign_up',
  path: '/signup',
  component: SignUp,
}, {
  id: 'activate_account',
  path: '/activate-account',
  component: ActivateAccount,
},
{
  id: 'forgot_password',
  path: '/forgot-password',
  component: ForgotPassword,
}, {
  id: 'reset_password',
  path: '/reset-password',
  component: ResetPassword,
}, {
  id: 'dashboard_applications',
  path: '/dashboard/applications',
  component: Applications,
}]

export default APP_ROUTES;
