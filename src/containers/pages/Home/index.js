import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Nav,
  SectionHeader,
  SectionContent1,
  SectionContent2,
  SectionContent3,
  SectionContent4,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Norm Architects | YACHTBAU";
  }

  render() {
    return (
      <>
        <Header>
          <Nav />
          <SectionHeader />
        </Header>
        <Main>
          <SectionContent1 />
          <SectionContent2 />
          <SectionContent3 />
          <SectionContent4 />
        </Main>
      </>
    );
  }
}

export default index;
