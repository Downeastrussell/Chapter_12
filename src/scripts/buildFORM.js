const contactForm = `<fieldset id="form">
<legend>Save New Contact</legend>

<div>
  <label>Name:</label> <input type="text" id="name" >
</div>
<div>
  <label>Phone #:</label> <input type="text" id="phone">
</div>
<div>
  <label>Address:</label> <input type="text" id="address">
</div>
</fieldset>`

const saveButton = `<div class="button">
<button type="submit" id="save">Save Contact</button>
</div>`



const build = {
    Form : () =>{document.querySelector("#formArea").innerHTML = contactForm},


    Button: () => {document.querySelector("#saveButton").innerHTML = saveButton}


}

export default build