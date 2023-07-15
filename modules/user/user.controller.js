import fs from 'fs'
const data = JSON.parse(fs.readFileSync('./modules/data/users.json'));


export function user(req, res) {
    console.log(data["users"]);
    res.json({message: 'User page'});
};

var newuser = {
    "id": "c5b49242-9ad4-4ff1-b8cc-6d1e6bfc8bc1",
    "email": "user11@example.com",
    "age": 29,
    "country": "koria"
}

export function addUser(req, res) {

    console.log("length before Add : " + data["users"].length );
    data["users"].push(newuser);
    fs.writeFileSync('./modules/data/users.json',JSON.stringify(data))
    console.log("length After Add : " + data["users"].length);
    res.json({ message: "Add page" })
};

export function updateUser(req, res) {
    const update =req.body
    for (let i = 0; i < data["users"].length ;i++){
        if (update.id == data["users"][i].id ){
            data["users"][i].id = update.id;
            data["users"][i].email = update.email;
            data["users"][i].age = update.age;
            data["users"][i].country = update.country;
        }
        
    }
    fs.writeFileSync('./modules/data/users.json', JSON.stringify(data))
    res.json({ message: "Update page" })
};

export function deleteUser(req, res) {
    console.log("length before Add : " + data["users"].length);
    data["users"].splice(0,1)
    fs.writeFileSync('./modules/data/users.json', JSON.stringify(data))
    console.log("length After Add : " + data["users"].length);
    res.json({ message: "Delete page" })
};