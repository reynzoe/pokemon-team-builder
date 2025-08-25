import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TeamProvider } from "./contexts/TeamContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TeamProvider>
            <App />
        </TeamProvider>
    </React.StrictMode>
);