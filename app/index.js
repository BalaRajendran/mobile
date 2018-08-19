import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../src/App";
import getTheme from "../src/theme/components";
import variables from "../src/theme/variables/commonColor";

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
