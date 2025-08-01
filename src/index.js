import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./reset.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Contexts/AuthContext";
import { TimerProvider } from "./Contexts/TimerProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<TimerProvider>
				<App />
			</TimerProvider>
		</AuthProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
