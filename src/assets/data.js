import avatar1 from "../assets/images/user3.jfif";
import avatar2 from "../assets/images/user5.jfif";
import avatar3 from "../assets/images/user6.jfif";

const xAxisData = [
  {
    name: "Jan",
    sale: 112_000,
  },
  {
    name: "Feb",
    sale: 99_000,
  },
  {
    name: "Mar",
    sale: 12_000,
  },
  {
    name: "Apr",
    sale: 80_000,
  },
  {
    name: "May",
    sale: 60_000,
  },
  {
    name: "Jul",
    sale: 40_000,
  },
  {
    name: "Agu",
    sale: 44_000,
  },
  {
    name: "sep",
    sale: 23_000,
  },
  {
    name: "Oct",
    sale: 62_000,
  },
  {
    name: "Nov",
    sale: 12_000,
  },
  {
    name: "Dec",
    sale: 12_000,
  },
];

const dataSemi = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const transActionData = [
  {
    id: 1,
    customer: "محمد نوری",
    date: "23 خرداد 1402",
    amount: 123,
    status: "نپذیرفتن",
    imge: avatar1,
  },
  {
    id: 2,
    customer: "نسیم عابدی",
    date: "30 تیر 1403",
    amount: 240,
    status: "پذیرفتن",
    imge: avatar2,
  },
  {
    id: 3,
    customer: "علی عابدی",
    date: "25 مهر 1401",
    amount: 300,
    status: "انتظار",
    imge: avatar3,
  },
  {
    id: 4,
    customer: "الناز مجیدی",
    date: "2 اردیبهشت 1401",
    amount: 170,
    status: "پذیرفتن",
    imge: avatar2,
  },
];

const NewMembers = [
  {
    id: 1,
    userName: "الناز نوری",
    title: "طراح ساختمان",
    imge: avatar1,
  },
  {
    id: 2,
    userName: "علی بابایی",
    title: "دکتر با مهارت بالا",
    imge: avatar2,
  },
  {
    id: 3,
    userName: "رضا گودرزی",
    title: "معلم عالی",
    imge: avatar3,
  },
  {
    id: 4,
    userName: "رحا اعتمادی",
    title: "بهترین پرستار",
    imge: avatar2,
  },
];

export { xAxisData, dataSemi, transActionData, NewMembers };
