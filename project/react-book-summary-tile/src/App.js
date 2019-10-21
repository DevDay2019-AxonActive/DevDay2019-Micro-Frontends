import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import fontawesome from "font-awesome/css/font-awesome.css";
import React from "react";
import Style from "style-it";

import styles from "./App.css";
import { propTypes } from "./componentProperties";

const App = props => {
  /*
   * This is a workaround to import external css files as @import does not work properly
   */
  const cssStyles = styles
    .toString()
    .concat(fontawesome.toString())
    .concat(bootstrap.toString());

  return (
    <Style>
      {cssStyles.toString()}
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col col-sm-2 thumbnail">
              <img
                src="https://salt.tikicdn.com/cache/w1200/ts/product/af/a1/4b/92477ec9b6688060b2b5d2022a60d3e6.jpg"
                className="img-fluid"
                alt="Book Thumbnail"
              />
            </div>
            <div className="col summary">
              <h1>
                <strong>{props.componentTitle}</strong>
              </h1>
              <blockquote className="blockquote">
                <p className="mb-0 text-muted">
                  Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối
                  cùng
                </p>
                <footer className="blockquote-footer">
                  <strong>Nguyễn Nhật Ánh</strong>
                </footer>
              </blockquote>
              <div className="footer">
                <span className="rating text-warning">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
                <strong>
                  Bình luận (<i className="text-muted">35</i>)
                </strong>
                <strong>Nguồn: Tiki</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

App.propTypes = propTypes;

export default App;
