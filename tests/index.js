/* flow */
/* eslint-disable no-unused-vars, react/prop-types */

/* Just to test jsx rules */
import React from "react"; // eslint-disable-line

/**
 * @file Mock file to just test rules defined in the rules
 * @author Madiodio <papigaye1@gmail.com>
 */

// global-require
require("path");

// import/first
import path from "path";

// import/no-extraneous-dependencies
import fs from "fs";

// import/prefer-default-export
export { path };

// jsx-a11y/alt-text
(() => {
  let foo = <img src="" />;
})();

// jsx-a11y/accessible-emoji
(() => {
  let foo = (
    <div>
      <span>🐼</span>
      <i role="img" aria-label="Panda">
        🐼
      </i>
    </div>
  );
})();

// jsx-a11y/label-has-for
(() => {
  let Label = ({ children }) => <label>{children}</label>;
})();

// jsx-a11y/anchor-is-valid
(() => {
  let Link = ({ ...props }) => (
    <a href={null} {...props}>
      Haha!!
    </a>
  );
})();

// no-underscore-dangle
(() => {
  let _foo;
  let __bar__;
  let baz_;
})();

// no-console
(() => {
  console.log("foo");
})();

// no-unused-expressions
let tag = string => string === "Tag this";
tag`Tag this`;

// prefer-const
(() => {
  let foo;
})();

// react/jsx-filename-extension
(() => {
  let foo = <div />;
})();

// react/default-props-match-prop-types
(() => {
  const Hello = ({ name1, name2 }) => (
    <span>
      Hello {name1} and {name2}
    </span>
  );

  Hello.defaultProps = {
    name1: "Papi"
  };
})();

// react/display-name
export default () => <div />;

// react/no-danger
(() => {
  let foo = ({ htmlString }) => (
    <span dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
})();

// react/no-unescaped-entities
(() => {
  let foo = <span>Hello l'ami</span>;
})();

// react/no-unescaped-entities
(() => {
  class FooComponent extends React.Component {
    render() {
      return (
        <div>
          <span>Bad and Bougie</span>
        </div>
      );
    }
  }
})();
