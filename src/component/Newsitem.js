import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? ""
              : imageUrl
          }
          className="card-img-top"
          alt="Unable to load pic"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="badge bg-secondary m-2">{source}</span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-dark">{date}</small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
