export const appointmentData = [
  {
    id: 1,
    patient: "Barry Vermont",
    day: new Date().toISOString().slice(0, 10),
    consulted: true,
    doctor: "Dr. Hazel Valery",
  },
  {
    id: 2,
    patient: "Harry Coming",
    day: new Date().toISOString().slice(0, 10),
    consulted: false,
    doctor: "Dr. Jessica White",
  },
  {
    id: 3,
    patient: "Aaron Black",
    day: new Date().toISOString().slice(0, 10),
    consulted: true,
    doctor: "Dr. Jasmine Carpanter",
  },
];

export const doctorData = [
  {
    id: new Date().getTime(),
    name: "Dr.Hazel Valery",
    dep: "Cardiology",
    img: "./img/dr1.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Dr. Jasmine Carpanter",
    dep: "Radiolgy",
    img: "./img/dr2.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Dr. Arianna Mary",
    dep: "Orthopedy",
    img: "./img/dr3.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Dr. Jessica White",
    dep: "Gastroentogoly",
    img: "./img/dr4.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Harry Coming",
    dep: "Surgery",
    img: "./img/dr9.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Dr. Kristensen Abraham",
    dep: "Neurology",
    img: "./img/dr6.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Dr.Asley Graham",
    dep: "Pediatry",
    img: "./img/dr7.jpg",
  },
  {
    id: new Date().getTime(),
    name: "Dr. Mary Motley",
    dep: "Oncology",
    img: "./img/dr8.jpg",
  },
];
