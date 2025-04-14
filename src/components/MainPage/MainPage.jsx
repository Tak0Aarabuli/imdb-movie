import { useNavigate, Link } from "react-router-dom";

import styles from "./MainPage.module.css";
import { useAuth } from "../../contexts/AuthContext";

const MainPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleExplore = () => {
    navigate("/movies");
  };

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Top 100 IMDb Movies</h1>
          <p className={styles.subtitle}>
            {isAuthenticated ? (
              <>
                🎉 Congratulations, you are registered! You can now explore the
                movie list below.
              </>
            ) : (
              <>
                🎬 If you want to see the movie list, please{" "}
                <Link to="/login" className={styles.loginLink}>
                  log in
                </Link>
                first.
              </>
            )}
          </p>
          {isAuthenticated && (
            <button className={styles.button} onClick={handleExplore}>
              Explore Movies
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
