import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

export default function CourseList() {
  // Select the RAW facts...
  const courses = useSelector((state) => state.courses);
  const query = useSelector((state) => state.filter);

  // ...and DERIVE the rest here. Never store `visible` in Redux.
  const visible = courses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  if (visible.length === 0) return <p className="empty">No courses yet.</p>;

  return (
    <section>
      {visible.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </section>
  );
}
