let elFormContent = document.getElementById('formContent'); // form
let elFormInput = document.getElementById('formInput'); // input
let elFormList = document.getElementById('formList'); // ul
let elFormItem = document.querySelector('.formItem'); // li
let elFormText = document.querySelector('.formText'); // p
let elFormCheck = document.getElementsByClassName('formCheck');
let elShowList = document.getElementById('showList');
let arr = [];

elFormContent.addEventListener('submit', addItem); // li qoshish uchun event
elFormList.addEventListener('click', removeItem); // li ni ochirib tashlash uchun event
elFormList.addEventListener('click', changeIcon); // li ga iconni ozgartirish
elShowList.addEventListener('click', addActive);

function addItem(e) {
  e.preventDefault();

  let newObj = {
    text : elFormInput.value,
    complete: false
  }

  arr.push(newObj);
  arr.forEach(item => {
    if (elFormInput.value == "") {
    }
    else if (elFormInput.value != "") {
      let newItem = elFormInput.value; // valuesini tenglash
      li = document.createElement('li'); // tag yaratish
      li.className = "formItem d-flex justify-content-between align-items-center inComplete"; // yaratilgan tagga class larini qoshish
      
      let inputText = document.createElement('p'); // valuesini tenglash
      inputText.appendChild(document.createTextNode(newItem)); // newItemni valuesini inputTextga bolasi orqali tenglash
      li.appendChild(inputText) // li ga textni qoshish
      inputText.className = 'formText'; // class ni tenglash
      
      let checkBtn = document.createElement('i'); // valuesini tenglash
      li.appendChild(checkBtn) // li ga textni qoshish
      checkBtn.className = 'formCheck far fa-times-circle delete'; // yaratilgan tagga class larini qoshish
      elFormList.appendChild(li); // li ga textni qoshish
    }
    elFormInput.value = ''; // inputni tozalab tashlash
  })
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) { // delete digan classni topib u bosilganda ishlidigan holat
    let li = e.target.parentElement; // li ga holatni tenglash
    elFormList.removeChild(li); // li ni ochirib tashlash
  }
}

function changeIcon(e) {
  if (e.target.classList.contains('formItem')) {
    if(e.target.lastChild.classList.contains('fa-check-circle')) {
      e.target.lastChild.className = 'formCheck far fa-times-circle delete'; 
      e.target.className = 'formItem d-flex justify-content-between align-items-center inComplete';
      console.log(e.target.className);
    } 
    else {
      e.target.className = 'formItem d-flex justify-content-between align-items-center inComplete complete';
      e.target.lastChild.className = 'formCheck far fa-check-circle delete';
      console.log(e.target.className);
    }
  } 
}

function addActive(e) {
  console.log(1)
  if (e.target.classList.contains('showItem')) {
    if (e.target.lastChild.classList.contains('showBtn')) {
      e.target.lastChild.className = 'btnActive';
      console.log(e.target.lastChild.className);
    }
    else {
      e.target.lastChild.className = 'showBtn';
      // console.log(e.target);
    }
  } 
}

