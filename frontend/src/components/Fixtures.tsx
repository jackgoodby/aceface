import React, { Component } from "react";
import axios from "axios";
import FixturePanel from "./FixturePanel";

const config = {
  headers: {
    Accept: "application/json;",
    // Authorization: "Bearer " + access_token,
  },
};

const url = import.meta.env.VITE_API_URL + "/fixtures";

class Fixtures extends Component {
  state = {
    error: false,
    loading: false,
    liveFixtures: {},
  };

  async getLiveFixtures() {
    this.setState({ loading: true });
    try {
      const response = await axios.get(url, config);
      this.setState({ liveFixtures: response.data });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getLiveFixtures();
  }

  render() {
    const { error, loading, liveFixtures } = this.state;

    if (loading) {
      return <div className="spinner">LOADING</div>; // add a spinner or something until the posts are loaded
    }

    if (error) {
      return <div className="error">Something went wrong</div>;
    }

    return (
      <div id="fixtures">
        <FixturePanel fixtureData={liveFixtures} />
      </div>
    );
  }
}

export default Fixtures;
