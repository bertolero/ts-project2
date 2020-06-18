const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler (event: Event) {
  event.preventDefault()
  const addressEntered = addressInput.value
}

form.addEventListener('submit', searchAddressHandler)
