import { useReducer } from "react";

type CounterType = {
  count: number;
};

type CounterResetActionType = {
  type: "reset";
};

type CounterUpdateActionType = {
  payload: CounterType;
  type: "increase" | "decrease";
};

type CounterActionType = CounterUpdateActionType | CounterResetActionType;

export default function Counter() {
  const initialCount: CounterType = {
    count: 0,
  };
  const counterReducer = (state: CounterType, action: CounterActionType) => {
    console.log(action.payload);
    switch (action.type) {
      case "increase":
        return { count: state.count + action.payload.count };
      case "decrease":
        return { count: state.count - action.payload.count };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [count, dispatchCount] = useReducer(counterReducer, initialCount);

  return (
    <section>
      <p className="text-3xl font-bold">{count.count}</p>
      <div>
        <button
          onClick={(): void =>
            dispatchCount({ payload: { count: 1 }, type: "increase" })
          }
          className="bg-emerald-600 p-4 mx-2 rounded-md"
        >
          Increase
        </button>
        <button
          onClick={(): void =>
            dispatchCount({ payload: { count: 1 }, type: "decrease" })
          }
          className="bg-emerald-600 p-4 mx-2 rounded-md"
        >
          Decrease
        </button>
      </div>
      <div>
        <button
          onClick={(): void =>
            dispatchCount({ payload: { count: 5 }, type: "increase" })
          }
          className="text-zinc-50 bg-emerald-600 p-4 mx-2 rounded-md"
        >
          Increase by 5
        </button>
        <button
          onClick={(): void =>
            dispatchCount({ payload: { count: 5 }, type: "decrease" })
          }
          className="text-zinc-50 bg-emerald-600 p-4 mx-2 rounded-md"
        >
          Decrease by 5
        </button>
      </div>
      <button onClick={() => dispatchCount({ type: "reset" })}>Reset</button>
    </section>
  );
}
