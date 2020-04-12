import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import "../src/styles/global.scss";
import { Theme } from "../src/styles/theme";

addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);
