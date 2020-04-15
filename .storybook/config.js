import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import "../src/styles/global.scss";
import { Theme } from "../src/styles/theme";
import "emoji-mart/css/emoji-mart.css";

addDecorator((story) => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);
