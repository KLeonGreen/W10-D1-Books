import { Component } from "react";
import { Card } from "react-bootstrap";
import "../Components/SingleBook.css";
import CommentArea from "../Components/CommentArea.jsx";

class SingleBook extends Component {
  state = {
    clicked: false,
  };

  changeStatus = () => {
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
      // console.log(this.props.books.asin);
    } else {
      this.setState({ clicked: false });
    }
  };
  render() {
    // console.log(this.props);
    return (
      <>
        <Card style={{ border: this.state.clicked ? "4px solid lime" : "" }}>
          <Card.Img
            variant="top"
            src={this.props.books.img}
            onClick={() => {
              this.props.getBookID(this.props.books.asin);
              this.changeStatus();
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.books.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
