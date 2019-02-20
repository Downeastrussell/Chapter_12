const apiManager = {
    fetchAllContacts:() =>{
        return fetch("http://localhost:8088/contacts")
            .then(contact => contact.json())
    },
    POSTcontact : (newContact) =>{
        return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
    })
    }
}

export default apiManager;