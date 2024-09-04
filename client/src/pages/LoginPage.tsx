import { useEffect, useState } from "react";

export default function LoginPage() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkApiHealth() {
      try {
        const response = await fetch("/api/v1/health", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("", data);
        setHealth(data);
      } catch (err) {
        setError(err.message);
      }
    }
    checkApiHealth();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!health) return <div>Loading...</div>;

  return (
    <div>
      <p>API Health: {JSON.stringify(health)}</p>
    </div>
  );
}
