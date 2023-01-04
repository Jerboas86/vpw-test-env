import { add } from "@vpwtest/tester";

onmessage = () => {
  console.log("4 + 7 = ", add(4, 7));
};

export {};
