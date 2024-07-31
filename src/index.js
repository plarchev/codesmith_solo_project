import React from "react";
import App from "./App";
import "./App.scss";
import { createRoot } from 'react-dom/client';

const el = document.getElementById("app");

const root = createRoot(el); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);