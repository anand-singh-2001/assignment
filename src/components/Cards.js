import React from "react";

const Cards = ({ card, dark }) => {
  return (
    <div
      className={(dark && "dark_mode single_card") || "single_card"}
      style={{ cursor: card.cursor ? "pointer" : "none" }}>
      <h4>{card.card_title}</h4>

      {card.data === true && card.data_type === "number" ? (
        <span style={{ margin: "auto", fontSize: "200px" }}>
          {card.data_value}
        </span>
      ) : card.data_type === "text" ? (
        <span style={{ width: "250px", margin: "auto", padding: "5px" }}>
          {card.data_value}
        </span>
      ) : card.data_type === "image" ? (
        <img
          src={card.data_value}
          style={{ width: "100%", height: "100%", marginTop: "-20px" }}
        />
      ) : (
        <span style={{ width: "250px", margin: "auto", padding: "5px" }}>
          {card.data_value}
        </span>
      )}

      <div className="overlay">
        {card.link === true && <a href={card.redirect}>{card.link_name}</a>}
        {card.button === true && (
          <button className="btn">{card.button_name}</button>
        )}
        <p>{card.note}</p>
      </div>
    </div>
  );
};

export default Cards;
