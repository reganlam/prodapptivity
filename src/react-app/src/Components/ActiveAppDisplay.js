import React, { useState, useEffect } from "react";

const ActiveAppDisplay = () => {
  const [activeApp, setActiveApp] = useState("Loading...");

  useEffect(() => {
    const updateActiveApp = () => {
      // Use IPC to request the active app from the Electron main process
      window.ipcRenderer.invoke("getActiveApp").then((result) => {
        setActiveApp(result.title);
      });
    };

    // Initial update
    updateActiveApp();

    // Set up periodic updates (adjust the interval as needed)
    const interval = setInterval(updateActiveApp, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Active Application:</h2>
      <p>{activeApp}</p>
    </div>
  );
};

export default ActiveAppDisplay;
