import axios from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

const apiKey = ''

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number, lng: number } } }[],
    status: 'OK' |'ZERO_RESULTS'
}

function searchAddressHandler (event: Event) {
  event.preventDefault()
  const addressEntered = addressInput.value
  axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(addressEntered)}&key=${apiKey}`)
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch locayion')
      }
      const coordinates = response.data.results[0].geometry.location
    })
    .catch(error => {
      alert(error.message)
      console.log(error)
    })
}

form.addEventListener('submit', searchAddressHandler)
