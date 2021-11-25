let elFormContent = document.getElementById('formContent'); // form
let elFormInput = document.getElementById('formInput'); // input
let elFormList = document.getElementById('formList'); // ul
let elFormItem = document.querySelector('.formItem'); // li
let elFormText = document.querySelector('.formText'); // p
let elFormCheck = document.getElementsByClassName('formCheck');
let arr = [];
console.log(elFormItem.firstElementChild)

elFormContent.addEventListener('submit', addItem); // li qoshish uchun event
elFormList.addEventListener('click', removeItem); // li ni ochirib tashlash uchun event
elFormItem.addEventListener('click', changeIcon);

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
      li.className = "formItem d-flex justify-content-between"; // yaratilgan tagga class larini qoshish
      
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
  if (e.target.classList.contains('formText')) {
    e.target.classList.remove('formCheck')
    console.log(1);
    // let elFormCheck = e.target.parentElement.classList = "formCheck";
    // let checkBtn = document.createElement('i'); // valuesini tenglash
    // li.appendChild(checkBtn) // li ga textni qoshish
    // checkBtn.className = 'formCheck far fa-times-circle delete'; // yaratilgan tagga class larini qoshish
    console.log(elFormCheck)
  }
}

