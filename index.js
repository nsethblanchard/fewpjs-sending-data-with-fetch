// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   const configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });

function submitData(name, email){
    const formData = {
        name: name,
        email: email
      };
    
     const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
        };

    return fetch("http://localhost:3000/users", configObj) 
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            document.body.innerHTML = `${json.id}`
            
        })
        .catch(function(error) {
            document.body.innerHTML = `${error.message}`
        });
    

}


