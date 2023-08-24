// regex textName
if (valueInput.search(/[0-9!@#{}$%'^&*`.~+)(,<>/\";\[\]:?=-]/g) > -1) {
}
//regex Email
if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
}

// sắp xếp mảng từ số bé đến số lớn
let arrayLengthSort = xx.sort((a, b) => {
  return a - b;
});

//sắp xếp mảng từ số bé đến lớn theo giá trị có số và chữ;
let newArray = array.sort((a, b) => {
  // a-b 1 > 10 \\ b-a 10 > 1;
  return parseInt(a) - parseInt(b);
});



//Tạo 1 comment vào mọi vị trí của element (index, element or comment)
Element.insertAdjacentHTML("beforebegin", "<!--this ís comment-->");

// xử lý giảm số lần gọi hàm khi dùng sự kiện scroll,
window.addEventListener('scroll', CallReduction(handleEvent, 100))
function handleEvent() {
  let xxx = window.scrollY
  console.log(xxx);
}
function CallReduction(handle, timer) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(handle, timer);
  };
}
// handle time count or -count

// xử lý JSON khi có function trong chuỗi JSON ( đây là cách sử dụng được function)
for (i of Object.keys(Object)) {
  if (Object[i].includes('function') || Object[i].includes('()')) {
    Object[i] = eval(("(" + Object[i] + ")")) // dịch function ra dùng nhé 
  }
}

//xử lý function trước khi chuyển thành JSON 
for (i of Object.keys(obj)) {
  if ((typeof obj[i]) === "function") {
    obj[i] = obj[i].toString() //chuyển đỗi function thành String
  }
}





// let button = document.querySelector("button");
// let count = document.querySelectorAll("h2");
// let done = document.querySelector("h1");

// let timerId = null;
// let time = new Date(00, 00, 00, 24, 00, 00); // Khởi tạo một đối tượng Date với giờ, phút, giây bằng 0
// button.addEventListener("click", myFunction);

// let objects = {
//     setTime: "Thời gian 1 phút",
//     endTime: "Hết Giờ",
//     stop: 'Stop',
//     start: 'Start',
//     timer: 10
// }

// function myFunction() {
//     if (timerId === null) {
//         button.innerText = objects.stop;
//         done.innerText = objects.setTime;
//         timerId = setInterval(() => {
//             count[0].innerHTML = `${time.getHours()} Ngày :${time.getHours()}Giờ : ${time.getMinutes()} Phút :${time.getSeconds()} Giây`; // Sử dụng template literals và các phương thức của đối tượng Date
//             time.setSeconds(time.getSeconds() + 1); // Tăng giây lên 1 đơn vị
//         }, objects.timer);
//     } else {
//         clearInterval(timerId);
//         timerId = null;
//         button.innerText = objects.start;
//     }
// }
////////////////////////~~~~~~~~~~~~~~~~~~~~~~~~





//form Register
const formElementRegister = document.getElementById("register"); //RGT

const inputElementsRGT = formElementRegister.querySelectorAll(".forms_register input");
const iputNameRGT = formElementRegister.querySelector("#firstName");
const inputEmailRGT = formElementRegister.querySelector("#email");
const inputPasswordRGT = formElementRegister.querySelector("#password");
const inputPassword_confirmRGT = formElementRegister.querySelector("#password_confirm");

const submitElemenRGT = formElementRegister.querySelector("#submit_register");
//end from Register

//SUBMIT ALL ElementInputs
let items = [...inputElementsRGT];
let user = {};

function isIputNameRGT() {
  let regex = /[0-9!@#{}$%'^&*`.~+)(,<>/\";\[\]:?=-]/g;
  let value = iputNameRGT.value.replace(/\s+/g, " ");
  if (regex.test(value)) {
    iputNameRGT.nextElementSibling.innerHTML =
      "Bạn có chắc đây là Họ tên của bạn ?";
    iputNameRGT.classList.add("invalid");
  }
  if (value.length <= 1) {
    iputNameRGT.nextElementSibling.innerHTML =
      "Bạn có chắc đây là Họ tên của bạn ?";
    iputNameRGT.classList.add("invalid");
  }
}

function isInputEmailRGT() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(inputEmailRGT.value)) {
    inputEmailRGT.nextElementSibling.innerHTML =
      "Bạn có chắc đây là Email của bạn ?";
    inputEmailRGT.classList.add("invalid");
  }
}

function isInputPasswordRGT() {
  let regex0 = /[0-9]/g,
    regex1 = /[a-z]/g,
    regex2 = /[!@#{}$%'^&*`.~+)(,<>/\";\[\]:?=-]/g,
    regex3 = /[A-Z]/g;
  let value = inputPasswordRGT.value,
    length = value.length,
    MaxLength = 8;

  user[inputPasswordRGT.id] = value;
  if (!(regex0.test(value) && regex1.test(value) && regex2.test(value) && regex3.test(value) && length > MaxLength)) {
    inputPasswordRGT.nextElementSibling.innerHTML = `Mật khẩu cần có
    (tối thiểu ${MaxLength} ký tự,Có chữ hoa, chữ thường, số và ký tự đặc biệt)`;
    inputPasswordRGT.classList.add("invalid");
  }
}

function isInputPassword_confirmRGT() {
  if (!(inputPassword_confirmRGT.value === user.password)) {
    inputPassword_confirmRGT.nextElementSibling.innerHTML =
      "Vui lòng kiểm tra lại. Mật khẩu không khớp";
    inputPassword_confirmRGT.classList.add("invalid");
  }
}

items.forEach((item) => {
  item.addEventListener("input", (e) => {
    let input = e.target;
    input.nextElementSibling.innerHTML = "";
    input.classList.remove("invalid");
  });

  item.addEventListener("blur", (e) => {
    let input = e.target;
    let value = input.value
    let length = value.length;
    if (input == iputNameRGT && length >= 1) {
      isIputNameRGT();
    } if (input == inputEmailRGT && length >= 1) {
      isInputEmailRGT();
    } if (input == inputPasswordRGT && length >= 1) {
      isInputPasswordRGT();
    } if (input == inputPassword_confirmRGT && length >= 1) {
      isInputPassword_confirmRGT();
    }
  });
});

//Event submit Click
submitElemenRGT.addEventListener("click", (e) => {
  e.preventDefault();

  //test all input is has space
  items.forEach((item) => {
    if (item.value == "") {
      item.nextElementSibling.innerHTML = "Vui lòng nhập thông tin";
      item.classList.add("invalid");
    } else {
      item.classList.remove("invalid");
      item.nextElementSibling.innerHTML = "";
    }
  });

  //check error input
  if (iputNameRGT.value.length >= 1) {
    isIputNameRGT();
  }
  if (inputEmailRGT.value.length >= 1) {
    isInputEmailRGT();
  }
  if (inputPasswordRGT.value.length >= 1) {
    isInputPasswordRGT();
  }
  if (inputPassword_confirmRGT.value.length >= 1) {
    isInputPassword_confirmRGT();
  }

  //reutrn all values input for submit
  let ValueInputUser = items.every((item) => {
    return item.classList.contains("invalid")
      ? false
      : (user[item.id] = item.value);
  });
  if (ValueInputUser) {
    console.log(user);
    /// nếu valueInputUser == true thì ta sẽ chuyển trang cho người dùng
    //và return user {}
  }
});
///end form register









// Mảng chứa các URL của các ảnh
// tự động chạy theo lượng thẻ img có trên html = vòng lặp 
function http(URL, resolev, reject) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4)
      if (xmlHttp.status == 212300) {
        resolev(xmlHttp)
      } else {
        reject('error')
      }
  };
  xmlHttp.open("GET", URL, true);
  xmlHttp.send(null);

};////////////////////
const displayImages = async () => {

  const imgElements = document.querySelectorAll(' img')
  const imgElemetnLength = imgElements.length;

  const theURLimg = []
  try { // check error
    ///handle
    for (i = 0; i < imgElemetnLength; i++) {
      theURLimg.push('https://picsum.photos/200/300',)

      const promesi = new Promise((resolve, reject) => {
        (http(theURLimg[i], resolve, reject))
      });
      const response = await promesi;
      imgElements[i].setAttribute('src', response.responseURL)
    }
  } catch (error) { // if error
    console.log(error);
  }
}
displayImages();

///xử lý nhiều promise cùng lúc 
//( nếu số lượng ít hẳng dùng nếu nhiều quá web sẽ không load kịp)
let imgs = document.querySelectorAll('img')
let promise = []
for (i = 0; i < imgs.length; i++) {
  if (promise.length < imgs.length) {
    promise.push(new Promise(resolev => {
      http('https://picsum.photos/200/300', resolev)
    }))
  }
}
Promise.all(promise)
  .then(([...promises]) => {
    for (i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('src', promises[i].responseURL)
      console.log(i);
    }
  }).catch(error => {

  })



/// Tính ngày giờ 
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);