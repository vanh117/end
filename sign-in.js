// function check() {
//   let id = document.getElementsByTagName("input")[2];
//   alert(id.value);
// }
// let content = [];
//         // example {id:1592304983049, title: 'Deadpool', year: 2015}
//         let addMovie = (ev)=>{
//             ev.preventDefault();  //to stop the form submitting
//             let pass = {
//                 pass: document.getElementById('content').value
//             }
//             movies.push(movie);
//             document.forms[0].reset(); // to clear the form for the next entries
//             //document.querySelector('form').reset();

//             //for display purposes only
//             console.warn('added' , {movies} );
//             let pre = document.querySelector('#msg pre');
//             pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

//             //saving to localStorage
//             localStorage.setItem('MyMovieList', JSON.stringify(content) );
//         }
//         document.addEventListener('DOMContentLoaded', ()=>{
//             document.getElementById('btn').addEventListener('click', addMovie);
//         });
let pass = document.getElementById("content");
let check = document.getElementById("check");
let user = document.getElementById("name");
let a = document.getElementById("sign");
let b = [];

a.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(user.value);
  //   console.log(check.value);
  //   console.log(user.value);
});
if (check.value == user.value) {
  let tk = {
    pass: [" "],
    user: [" "],
    check: [" "],
  };


//   localStorage.setItem("create", JSON.stringify(pass));
//   let create = [pass];
//   localStorage.setItem("create", JSON.stringify(pass));
//   console.log(create);
//   menu.food.push(y);
}
