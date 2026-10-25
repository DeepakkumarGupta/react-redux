import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../features/courses/coursesSlice";

export default function AddForm() {
  // Typing is LOCAL, temporary UI state -> useState is the right tool
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Easy");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addCourse({ id: Date.now(), title: title.trim(), level }));
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New course title" />
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
