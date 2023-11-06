import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
//This component receives photos, making sure there is a photo if not it will return null "nothing". returning a section, white background, each section has a row, and from API we are requesting 9 photos.and for each photo we are creating 4 columns, we have 3 per column. and we have a link of the image of the orginal page, which will open to new a new page. and we are using image landscape, of classname img-fluid o make the width-size 100.
