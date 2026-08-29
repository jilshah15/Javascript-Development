/* Change the card title to Red */
// let ctitle=document.getElementsByClassName("card-title")[0];
// ctitle.style.color="red";
// let ctitle=document.getElementById("firstClassTitle");
// ctitle.style.color="red";


// let ctext=document.getElementsByClassName("card-text")[0];
// ctext.style.color="blue";

let ctitle=document.querySelectorAll(".card-title");
ctitle[0].style.color="red";
ctitle[1].style.color="green";
ctitle[2].style.color="blue";
console.log("ctitle",ctitle);
// ctitle.style.color="red";

document.querySelector(".this").style.color = "cyan";
document.querySelector(".this").style.background = "red";

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.body.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("Search"));
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }