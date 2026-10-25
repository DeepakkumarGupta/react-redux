import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const courses = useSelector((state) => state.courses);

  if (courses.length === 0) return <p className="empty">No courses yet.</p>;

  return (
    <section>
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </section>
  );
}
