import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="app">
      <div className="clock-card">
        <h1>My Color Clock</h1>

        <p className="time">
          {format(currentDate, "EEEE, MMMM do, yyyy h:mm:ss a")}
        </p>
      </div>
    </main>
  );
}

export default App;