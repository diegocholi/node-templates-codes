import { indexHandlers } from "../../indexHandlers";

const insertHandlers = () => {
  indexHandlers.map((item) => item());
};

export default insertHandlers;
