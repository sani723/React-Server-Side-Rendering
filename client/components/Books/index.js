import Book from "./BooksListItem";
import css from "./Books.css";

class Books extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.props.books.items.map((item, index) => (
            <Book key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Books;
