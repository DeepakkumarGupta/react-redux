import Counter from "./components/Counter";
import Display from "./components/Display";

export default function App() {
  return (
    <>
      <nav><h1>FORGE · Redux step 1</h1></nav>
      <main>
        <h2>Counter</h2>
        <Counter />
        <h2>Somewhere else in the tree…</h2>
        <Display />
      </main>
    </>
  );
}
