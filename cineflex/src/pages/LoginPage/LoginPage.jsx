import NavBar from "../../components/NavBar/NavBar";
import LoginForm from '../../components/LoginForm/LoginForm';
import style from './LoginPage.module.css';
export const LoginPage = ({ setLoginStatus,loginStatus }) => {
  return (
    <>
  <NavBar/>
    <div className={style["login-page-container"]}>
      <div className={style["login-form-container"]}>
        <LoginForm setLoginStatus={setLoginStatus} loginStatus={loginStatus}/>
      </div>
    </div>

    </>
  );
};
export default LoginPage;
