const data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    children: [
      {
        question: "Why use React?",
        answer:
          "React allows developers to build reusable UI components and manage state effectively.",
      },
      {
        question: "Who maintains React?",
        answer: "React is maintained by Meta (Facebook) and a large community of developers.",
      },
    ],
  },
  {
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing server-side JavaScript execution.",
    children: [
      {
        question: "Is Node.js single-threaded?",
        answer: "Yes, but it uses an event-driven, non-blocking I/O model for handling concurrency.",
      },
      {
        question: "Where is Node.js used?",
        answer: "Node.js is widely used in backend development, APIs, and real-time applications.",
      },
    ],
  },
  {
    question: "What is MongoDB?",
    answer: "MongoDB is a NoSQL database that stores data in JSON-like documents.",
    children: [
      {
        question: "Why choose MongoDB?",
        answer:
          "It provides high performance, scalability, and flexibility for handling unstructured data.",
      },
      {
        question: "Is MongoDB schema-less?",
        answer:
          "Yes, MongoDB is schema-less, meaning documents can have different fields.",
      },
    ],
  },
];

export default data;
