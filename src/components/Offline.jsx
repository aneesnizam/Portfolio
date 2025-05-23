import React, { useState, useEffect } from "react";
import "./Offline.css";
export default function Offline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  if (!isOnline)
    return (
      <section id="offline">
        <p>You are offline</p>
      </section>
    );
  return null;
}
