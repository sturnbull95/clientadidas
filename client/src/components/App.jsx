import React from "react";
import styles from "../css/app.css";
import TopHeader from "./TopHeader.jsx";
import BottomHeader from "./BottomHeader.jsx";
import SubHeader from "./SubHeader.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    // We set the axios baseURL here so that api requests will got to the
    // right location even when we are making them from a proxy server
    axios.defaults.baseURL = "http://ec2-13-57-28-162.us-west-1.compute.amazonaws.com:3000";
  }

  render() {
    return (
      <div className={styles.navbar} >
        <div className={styles.headerDesktop}>
          <TopHeader />
          <BottomHeader />
          <SubHeader />
        </div >
      </div>
    );
  }
}

module.exports = App;
