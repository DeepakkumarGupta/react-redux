import Navbar from "./components/Navbar";
import AddForm from "./components/AddForm";
import FilterBox from "./components/FilterBox";
import CourseList from "./components/CourseList";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <AddForm />
        <FilterBox />
        <CourseList />
      </main>
    </>
  );
}
