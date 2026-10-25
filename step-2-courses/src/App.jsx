import Navbar from "./components/Navbar";
import AddForm from "./components/AddForm";
import CourseList from "./components/CourseList";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <AddForm />
        <CourseList />
      </main>
    </>
  );
}
