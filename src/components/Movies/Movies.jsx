import useFetch from "../../hooks/useFetch";
import styles from "./Movies.module.css";

const Movies = () => {
  const { data, loading, error } = useFetch(
    "https://imdb-top-100-movies.p.rapidapi.com/"
  );

  if (loading) return <p className={styles.status}>Loading movies...</p>;
  if (error) return <p className={styles.status}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top 100 IMDb Movies</h2>
      <div className={styles.grid}>
        {data?.map((movie, index) => (
          <div className={styles.card} key={index}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <p className={styles.rating}>⭐ {movie.rating}</p>
              <p className={styles.year}>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
