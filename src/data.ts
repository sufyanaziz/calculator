type ActDataType = {
  name: string;
  value: string | number;
  className: "button-operator" | "button-number";
  type: "operator" | "number" | "positive/negative" | "percent";
};
export const actData: ActDataType[] = [
  {
    name: "remove",
    value: "clear",
    className: "button-number",
    type: "operator",
  },
  {
    name: "multiple",
    value: "*",
    className: "button-operator",
    type: "operator",
  },
  {
    name: "1",
    value: 1,
    className: "button-number",
    type: "number",
  },
  {
    name: "2",
    value: 2,
    className: "button-number",
    type: "number",
  },
  {
    name: "3",
    value: 3,
    className: "button-number",
    type: "number",
  },
  {
    name: "plus",
    value: "+",
    className: "button-operator",
    type: "operator",
  },
  {
    name: "4",
    value: 4,
    className: "button-number",
    type: "number",
  },
  {
    name: "5",
    value: 5,
    className: "button-number",
    type: "number",
  },
  {
    name: "6",
    value: 6,
    className: "button-number",
    type: "number",
  },
  {
    name: "minus",
    value: "-",
    className: "button-operator",
    type: "operator",
  },
  {
    name: "7",
    value: 7,
    className: "button-number",
    type: "number",
  },
  {
    name: "8",
    value: 8,
    className: "button-number",
    type: "number",
  },
  {
    name: "9",
    value: 9,
    className: "button-number",
    type: "number",
  },
  {
    name: "modulus",
    value: "%",
    className: "button-operator",
    type: "percent",
  },
  {
    name: "plus-minus",
    value: "+/-",
    className: "button-operator",
    type: "positive/negative",
  },
  {
    name: "0",
    value: 0,
    className: "button-number",
    type: "number",
  },
  {
    name: "dot",
    value: ".",
    className: "button-operator",
    type: "number",
  },
  {
    name: "amount",
    value: "=",
    className: "button-operator",
    type: "operator",
  },
];
