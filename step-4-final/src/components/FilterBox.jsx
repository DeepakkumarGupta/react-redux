import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../features/filter/filterSlice";

export default function FilterBox() {
  const query = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        placeholder="Search courses…"
      />
    </form>
  );
}
