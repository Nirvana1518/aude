import { Link } from "react-router";
import { AppRoutes } from "./app/routes";
import "./app/styles/index.scss";
import { Container } from "./shared/ui/container";

const App = () => {
  return (
    <Container>
      <div className="app">
        <Link to="/user/:userId">Мой профиль</Link>
        <Link to="/gallery/:userId">Галерея</Link>
        <AppRoutes />
      </div>
    </Container>
  );
};

export default App;
