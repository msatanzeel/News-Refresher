import React from "react";

export default function Newsitem(props) {
  let { title, description, imageUrl, newsUrl } = props;
  if (imageUrl === null) {
    imageUrl =
      "https://unsplash.com/assets/api/applications/square-6531fda77b2ef5fe9f827bbe7030fdf5d0b6eefd4112f3c8d746b3fe6507803f.jpg";
  }
  return (
    <div>
      <div className="card my-3 mx-2">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"margin-left":"-4rem","margin-top":"0.3rem"}}>
          {props.sourceName}
          <span class="visually-hidden">unread messages</span>
        </span>
        <img
          src={imageUrl}
          className="card-img-top"
          style={{ height: "14rem" }}
          alt="#"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
          <p class="card-text">
            <small class="text-muted">
              By {!props.author ? "unknown" : props.author} on{" "}
              {new Date(props.publishedAt).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
