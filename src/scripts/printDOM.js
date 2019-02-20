function printDOM() {
    document.querySelector("#DOM").innerHTML = ""
fetch("http://localhost:8088/contacts", {
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(employees => employees.json())
    .then(employeeData => {

        employeeData.forEach(Element => {



       document.querySelector("#DOM").innerHTML += `<fieldset class="form">
            <legend>Contact #${Element.id}</legend>
            <div>Name: ${Element.name}</div>
            <div>Phone: ${Element.phone}</div>
            <div>Address: ${Element.address}</div></fieldset>`

    })
    })}

export default printDOM
