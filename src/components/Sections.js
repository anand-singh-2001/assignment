import React, { useCallback, useState } from "react";
import Cards from "./Cards";
import data from "../data.json";

const Sections = ({ dark }) => {
  const [showMore, setShowMore] = useState([]);

  const handleShow = useCallback((sec_no) => {
    setShowMore((prev) => {
      if (prev.includes(sec_no)) {
        return prev.filter((ele) => ele !== sec_no);
      }
      return [...prev, sec_no];
    });
  }, []);

  return (
    <div className="sections">
      {data.section_Array.map((sec) => (
        <div className={(dark && "dark_mode section") || "section"}>
          <h2>{sec.title}</h2>
          <div
            className={(dark && "dark_mode cards_section") || "cards_section"}>
            {data.Card_array.filter((card) => card.parent_sec_no === sec.sec_no)
              .slice(0, 3)
              .map((ele, id) => (
                <Cards card={ele} key={id} />
              ))}

            {showMore.includes(sec.sec_no) &&
              data.Card_array.filter(
                (card) => card.parent_sec_no === sec.sec_no
              )
                .slice(3)
                .map((ele, id) => <Cards card={ele} dark={dark} key={id} />)}

            {data.Card_array.filter((card) => card.parent_sec_no === sec.sec_no)
              .length > 3 && (
              <button
                onClick={() => handleShow(sec.sec_no)}
                className="show_btn">
                {showMore.includes(sec.sec_no) ? "See Less..." : "See More..."}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sections;
