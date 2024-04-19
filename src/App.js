import "./App.css";
function App() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <App />
      <App />
      <App />
    </section>
  );
}
