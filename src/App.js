import Navigation from "./navigation";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation className="app__bg" />
    </div>
  );
}

export default App;

// let students = [
//   { name: "kareem", roll: 31, marks: 80 },
//   { name: "marc", roll: 67, marks: 69 },
//   { name: "mohamed", roll: 21, marks: 35 },
//   { name: "mark", roll: 44, marks: 55 },
// ];

// const totalMarks = students
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, curr) => {
//     return acc + curr.marks;
//   }, 0);

// console.log(totalMarks);

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   inner(i);
// }

// CURRING IN JAVASCRIPT //

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "subtract") return a - b;
//       else return "kareem will fuk YOU";
//     };
//   };
// }
// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("subtract")(4)(2));
// console.log(evaluate("")( )());

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
// console.log(add(1)(2)(5)(5)(6)(7)());

// const calc = {
//   total: 0,
//   add(a) {
//     this.total = this.total + a;
//     return this;
//   },

//   multi(a) {
//     this.total = this.total * a;
//     return this;
//   },
//   subtract(a) {
//     this.total = this.total - a;
//     return this;
//   },
// };

// const result = calc.add(10).multi(5).subtract(30).add(10);
// console.log(result.total);

// for (var i = 0; i < 5; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   inner(i);
// }
