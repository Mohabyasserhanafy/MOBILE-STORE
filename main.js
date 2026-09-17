// selectors 

const inputName = document.querySelector(".name")
const inputPrice = document.querySelector(".price")
const formBtn = document.querySelector("form button")
const form = document.querySelector("form")
const table = document.querySelector("table")
const tableBody = document.querySelector("table tbody")



// vars 

const phones = JSON.parse(localStorage.getItem("phones")) || [] 

// functions

function createPhone() {
  const phone = {
    name: inputName.value,
    price: +inputPrice.value
  }
  phones.push(phone)

  localStorage.setItem("phones", JSON.stringify(phones))

  clearInputs()
  showPhones()
}

function clearInputs() {
  inputName.value = ""
  inputPrice.value = ""
}

function showPhones() {
  tableBody.innerHTML = ""
  phones.forEach((phone, i) => {
    tableBody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${phone.name}</td>
                <td>${phone.price}</td>
                <td>
                    <svg onclick="editPhone(${i})" class="text-primary" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2">
                            <path
                                d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                        </g>
                    </svg>
                    <svg onclick="deletePhone(${i})" class="text-danger" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024">
                            <path d="M0 0h1024v1024H0z" fill="none" />
                            <path fill="currentColor"
                                d="M352 192V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64zm64 0h192v-64H416zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32m192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32" />
                        </svg>
                </td>
            </tr>
        `
  })
}
showPhones()

function deletePhone(index) {
  phones.splice(index, 1)
  localStorage.setItem("phones", JSON.stringify(phones))
  showPhones()
}

function editPhone(index) {
  inputName.value = phones[index].name
  inputPrice.value = phones[index].price
  formBtn.innerText = "Edit"
  formBtn.setAttribute("onclick", `updatePhone(${index})`)
}

function updatePhone(index) {
  phones[index].name = inputName.value
  phones[index].price = +inputPrice.value
  formBtn.innerText = "Submit"
  formBtn.setAttribute("onclick", `createPhone()`)
  localStorage.setItem("phones", JSON.stringify(phones))
  showPhones()
  clearInputs()
}

// events 
form.addEventListener("submit", (e) => {
  e.preventDefault()
})