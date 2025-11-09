import { Link } from "react-router";
import styles from "./styles.module.scss";
import hello_humans from "../assets/hello_humans.png";

export const LandingPage = () => {
  return (
    <div className={styles.mainPage}>
      <h1 className={styles.title}>aude</h1>
      <img className={styles.hello_humans} src={hello_humans} alt="hello" />
      <div className={styles.login_panel}>
        <Link to="/login">Login</Link>
        <Link to="about">About</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
};
