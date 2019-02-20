import apiManager from "./apiManager";
import printDOM from "./printDOM";

const saveContact = ()=> {document.querySelector("#save").addEventListener("click", ()=> {
    const name = document.querySelector("#name").value
    const phone = document.querySelector("#phone").value
    const address = document.querySelector("#address").value




      const newContact = {
       name:name,
       phone:phone,
       address:address,


    }
    console.log(newContact)
    apiManager.POSTcontact(newContact);
    apiManager.fetchAllContacts();
    printDOM();




})}

export default saveContact