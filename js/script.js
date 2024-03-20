const $ = (id) => document.getElementById(id)
let empID = $('id'), fullName = $('name'), ext = $('ext'), email = $('email'), dept = $('department'), submitForm = $('empForm')
submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(`ID: ${empID.value}\nName: ${fullName.value}\nExtension: ${ext.value}\nEmail: ${email.value}\nDepartment: ${dept.value}`)
})