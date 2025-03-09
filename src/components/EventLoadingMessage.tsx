import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useReducer } from "react";

const messages = [
  ["Waking up the app", "😴"],
  ["Curating the best tech events","🧐"],
  ["Refining the UI and... ","🎨"],
  ["Refining the UI and...","✨"],
 [ "Ready!","🚀"],
];

type State = { index: number; isRunning: boolean };
type Action = { type: "NEXT" } | { type: "STOP" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NEXT":
      return state.index < messages.length - 1
        ? { ...state, index: state.index + 1 }
        : { ...state, isRunning: false };
    case "STOP":
      return { ...state, isRunning: false };
    default:
      return state;
  }
};

const EventLoadingMessage = () => {
  const [state, dispatch] = useReducer(reducer, { index: 0, isRunning: true });

  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      dispatch({ type: "NEXT" });
    }, 2500);

    return () => clearInterval(interval);
  }, [state.isRunning]);


  return (
    <div className="d-flex align-items-center gap-3 m-3">
      <FontAwesomeIcon className="text-danger" icon={faSpinner} spin size="2xl" />
      <div className="" >
        <p className="m-0 fw-semibold">Loading events, please wait... </p>
        <p className="m-0"><span className="fst-italic">{messages[state.index][0]}</span> {messages[state.index][1]}</p>
      </div>
    </div>
  );
};

export default EventLoadingMessage;