import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../features/courses/coursesSlice";
import { toggleFavourite } from "../features/favourites/favouritesSlice";

export default function CourseCard({ course }) {
  const dispatch = useDispatch();
  const isFav = useSelector((state) => state.favourites.includes(course.id));

  return (
    <div className={isFav ? "card on" : "card"}>
      <div>
        <h3>{course.title}</h3>
        <small>{course.level}</small>
      </div>
      <div className="row">
        <button className="fav" onClick={() => dispatch(toggleFavourite(course.id))}>
          {isFav ? "♥" : "♡"}
        </button>
        <button className="del" onClick={() => dispatch(deleteCourse(course.id))}>✕</button>
      </div>
    </div>
  );
}
