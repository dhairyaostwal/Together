import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
export default class GithubTriangleCorner extends Component {
  render() {
    return (
      <div>
        <GithubCorner
          direction="left"
          href="https://github.com/dhairyaostwal/Together"
        />
      </div>
    );
  }
}
