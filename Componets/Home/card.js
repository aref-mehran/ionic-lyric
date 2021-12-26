import React from "react";
const styles = {
  card: {
    width: "25vw",
    height: "25vh",
    border: "1px  solid #000"
  }
};

class Card extends React.Component {
  render(props) {
    return (
      <div style={styles.card}>
        <span> Title</span>
      </div>
    );
  }
}
export default Card;
