import './css/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    AOS.init()
  }, 500);
});
hljs.highlightAll()

const avatar = document.querySelector('#avatar')

// Frorm
const form = document.querySelector('#sendMeForm')
const email = form.querySelector('#email')
const subject = form.querySelector('#subject')
const message = form.querySelector('#message')
const submitBtn = form.querySelector('#submitBtn')
const loading = form.querySelector('#loading')

//Notify
const successNotify = document.querySelector('#success')
const errorNotify = document.querySelector('#error')

//Homework
const decision = document.querySelector('#decision')
const decisionBtn = document.querySelector('#decisionBtn')
const lightBulb = document.querySelector('#lightbulb')
const lightBulbActive = document.querySelector('#lightbulb-active')

avatar.addEventListener('mouseenter', () => {
  avatar.classList.remove('aos-animate')

  setTimeout(() => {
    avatar.classList.add('aos-animate')
  }, 500)
})


form.addEventListener('submit', (event) => {
  event.preventDefault()

  loading.classList.remove('hidden')
  submitBtn.classList.add('hidden')

  const templateParams = {
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  emailjs.send('service_el5bzrs','template_ngijajq', templateParams, 'vznJVuq7DYqH83GKN')
  .then((response) => {
    successNotify.classList.add('animate-notify')
    setTimeout(() => successNotify.classList.remove('animate-notify'), 5000)
  })
  .catch(err => {
    errorNotify.querySelector('p').textContent = err.text
    errorNotify.classList.add('animate-notify')
    setTimeout(() => successNotify.classList.remove('animate-notify'), 5000)
  })
  .finally(() => {
    loading.classList.add('hidden')
    submitBtn.classList.remove('hidden')
  })

  email.value = ''
  subject.value = ''
  message.value = ''
})

decisionBtn.addEventListener('click', () => {
  lightBulb.classList.toggle('hidden')
  lightBulbActive.classList.toggle('hidden')

  decision.classList.toggle('animate-show')
  decision.classList.toggle('animate-hide')

  if (decision.classList.contains('animate-show')) {
    decision.classList.remove('hidden')
  } else {
    setTimeout(() => decision.classList.add('hidden'), 400)
  }
})

function fibonacci(length) {
  const fibArray = [];
  for (let i = 0; i < length; i++) {
    fibArray.push(i < 2 ? i : fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

console.log(fibonacci(0));