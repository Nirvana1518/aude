import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Container } from "../shared/ui/container";

export const App = () => {
  // TODO: Заменить 'currentUserId' на реальный ID пользователя из состояния
  const currentUserId = "123";
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/registration";

  return (
    <div className="app light">
      <Container>
        {!isAuthPage && (
          <nav>
            <Link to={`/user/${currentUserId}`}>Главная</Link>
            <Link to={`/gallery/${currentUserId}`}>Галерея</Link>
            <Link to={`/contacts/${currentUserId}`}>Контакты</Link>
          </nav>
        )}
        <AppRoutes />
      </Container>
    </div>
  );
};
