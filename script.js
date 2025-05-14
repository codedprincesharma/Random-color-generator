let box = document.querySelector('#box');
let btn = document.querySelector('button');


btn.addEventListener('click', function () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  box.style.backgroundColor = `rgb(${r},${g},${b})`
  btn.innerHTML = `Color change(${r} ,${g} ,${b})`
})