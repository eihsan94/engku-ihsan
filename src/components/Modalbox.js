import { useEffect, useState } from "react";
import { dataImage } from "../utility";

const Modalbox = ({ close, i, data }) => {
  const [index, setIndex] = useState(i);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}>
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <img
                      src={d.img}
                      alt={d.img}
                      style={{
                        height: "500px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "30px",
                        marginBottom: "2em",
                      }}
                    />
                    {d.desc}
                    <div>
                      <a
                        href={d.url}
                        target="_blank"
                        className="fn__link"
                        rel="noreferrer">
                        Visit Website
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? data.length : index - 1);
              }}>
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == data.length ? 1 : index + 1);
              }}>
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
