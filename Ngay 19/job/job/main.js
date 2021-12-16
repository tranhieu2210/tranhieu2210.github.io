const job = document.querySelector('.jobs')
const jobCard  = document.querySelector('.job-card')

const jobCard2 = jobCard.cloneNode(true)
const jobCard3 = jobCard.cloneNode(true)
const jobCard4 = jobCard.cloneNode(true)


job.appendChild(jobCard2)
job.appendChild(jobCard3)
job.appendChild(jobCard4)


jobCard2.querySelector('h3').textContent = 'JavaScript Developer'
jobCard3.querySelector('h3').textContent = 'Java Developer'
jobCard4.querySelector('h3').textContent = 'Python Developer'

const newA = document.querySelectorAll('.job-card')
document.querySelector('#jobs-listed span').textContent = newA.length


const searchJob = document.querySelector('#search')
console.log(searchJob);

const nameJob = document.querySelectorAll('.job-card h3')
console.log(nameJob );


searchJob.addEventListener('input', function(e) {
    
})

