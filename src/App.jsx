import { createRoot } from "react-dom/client";

const Profile = () => {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
};

const App = () => {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
