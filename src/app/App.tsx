import { Link } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Container } from "../shared/ui/container";

export const App = () => {
  // TODO: Заменить 'currentUserId' на реальный ID пользователя из состояния
  const currentUserId = "123";

  return (
    <Container>
      <div className="app">
        <Link to={`/user/${currentUserId}`}>Мой профиль</Link>
        <Link to={`/gallery/${currentUserId}`}>Галерея</Link>
        <AppRoutes />
      </div>
    </Container>
  );
};
