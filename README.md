# FORGE · Lecture 07 · Redux Toolkit — Project

Four runnable steps. Each one is the previous step plus ONE new idea.

| Step | Folder | New idea |
|------|--------|----------|
| 1 | `step-1-counter`    | slice, store, Provider, useSelector, useDispatch; two components sharing one store |
| 2 | `step-2-courses`    | array state, `action.payload`, add / delete; local `useState` for input text |
| 3 | `step-3-favourites` | second slice; Navbar badge and CourseCard share state with NO props |
| 4 | `step-4-final`      | filter slice, derived data, persistence (`preloadedState` + `store.subscribe`) |

## Run any step

```bash
cd step-1-counter
npm install
npm run dev
```

Install the **Redux DevTools** browser extension and open its tab while you click.

## How to teach with it

Open step N-1 in your editor and type the new code live so it grows into step N.
Use the next folder as your answer key. Provoke the planned bugs: remove `<Provider>`,
write `dispatch(increment)` without `()`, `push` and `return` in one reducer case.
