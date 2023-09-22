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

export default class Fixtures extends Component {
  state = {
    error: false,
    loading: false,
    responseData: {},
  };

  async getResponseData() {
    this.setState({ loading: true });
    try {
      const response = await axios.get(url, config);
      this.setState({ responseData: response.data });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getResponseData();
  }

  render() {
    const { error, loading, responseData } = this.state;

    if (loading) {
      return <div className="fixture-title-bar">Checking live data...</div>;
    }

    if (error) {
      return <div className="error">Something went wrong</div>;
    }

    // handle async
    let fixturePanelComponent = null;
    if (!this.state.loading) {
      fixturePanelComponent = (
        <FixturePanel fixtureData={this.state.responseData} />
      );
    }
    return <div className="fixtures">{fixturePanelComponent}</div>;
  }
}
