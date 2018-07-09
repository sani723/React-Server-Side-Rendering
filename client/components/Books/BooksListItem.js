import css from "./Books.css";

const Book = ({ item }) => {
  return (
    <div className="col-xs-12 col-sm-3">
      <div className={css.book}>
        <div className={css.book__thumbnail}>
          <img
            src={item.volumeInfo.imageLinks.thumbnail}
            alt={item.volumeInfo.title}
          />
        </div>

        <div className={css.book__meta}>
          <strong>{item.volumeInfo.title}</strong>
          <span>By: {item.volumeInfo.authors}</span>
          <span>Publisher: {item.volumeInfo.publisher}</span>
          <span>{item.volumeInfo.publishedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
