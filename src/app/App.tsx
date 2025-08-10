import { Link } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Container } from "../shared/ui/container";

export const App = () => {
  // TODO: Заменить 'currentUserId' на реальный ID пользователя из состояния
  const currentUserId = "123";

  return (
    <div className="app light">
      <Container>
        <Link to={`/user/${currentUserId}`}>Мой профиль</Link>
        <Link to={`/gallery/${currentUserId}`}>Галерея</Link>
        <Link to="/login">Войти</Link>
        <Link to="/registration">Регистрация</Link>
        <AppRoutes />
      </Container>
    </div>
  );
};
