import { useDispatch } from "react-redux";
import { deleteCourse } from "../features/courses/coursesSlice";

export default function CourseCard({ course }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div>
        <h3>{course.title}</h3>
        <small>{course.level}</small>
      </div>
      <button className="del" onClick={() => dispatch(deleteCourse(course.id))}>✕</button>
    </div>
  );
}
