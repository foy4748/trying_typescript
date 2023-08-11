import { useReducer } from "react";
import Button from "../StyledComponents/Button";

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
  // Counter Reducer Setup
  const initialCount: CounterType = {
    count: 0,
  };
  const counterReducer = (state: CounterType, action: CounterActionType) => {
    console.log(action);
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

  // Event Handlers
  const increaseCount = (
    event: React.MouseEvent<HTMLButtonElement>,
    increaseBy: number
  ) => {
    console.log(event.target);
    dispatchCount({ type: "increase", payload: { count: increaseBy } });
  };
  const decreaseCount = (
    event: React.MouseEvent<HTMLButtonElement>,
    decreaseBy: number
  ) => {
    console.log(event.target);
    dispatchCount({ type: "decrease", payload: { count: decreaseBy } });
  };

  return (
    <section>
      <h1 className="text-3xl">{count.count}</h1>
      <div>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void =>
            increaseCount(e, 1)
          }
        >
          Increase
        </Button>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void =>
            decreaseCount(e, 1)
          }
        >
          Decrease
        </Button>
      </div>
      <div>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void =>
            increaseCount(e, 5)
          }
        >
          Increase by 5
        </Button>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void =>
            decreaseCount(e, 5)
          }
        >
          Decrease by 5
        </Button>
      </div>
      <Button onClick={() => dispatchCount({ type: "reset" })}>Reset</Button>
    </section>
  );
}
