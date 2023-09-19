import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/routes';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
