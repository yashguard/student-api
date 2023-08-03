const uimaker = ((data) => {
    document.getElementById("ui").innerHTML = "";
    data.map((item) => {
        // let img=document.createElement("img");
        // img.src=
        let gr = document.createElement("h3");
        gr.innerHTML = item.gr;
        let name = document.createElement("h2");
        name.innerHTML = item.name;
        let email = document.createElement("h4");
        email.innerHTML = item.email;
        let pass = document.createElement("h4");
        pass.innerHTML = item.pass;
        let course = document.createElement("h4");
        course.innerHTML = item.course;
        let mono = document.createElement("h5");
        mono.innerHTML = item.mono;
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener("click", () => {
            dlt(item.id);
        });
        let btn1=document.createElement("button");
        btn1.innerHTML="Update";
        btn1.addEventListener("click",()=>{
            upt(item.id);
        });
        let div = document.createElement("div");
        div.append(gr, name, email, pass, course, mono, btn,btn1);
        document.getElementById("ui").append(div);
    });
});

const dlt = async (id) => {
    fetch(`http://localhost:8090/student/${id}`, {
        method: "DELETE"
    });
}

const upt=async(id)=>{
    
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let student = {
        img:document.getElementById("img").value,
        gr: document.getElementById("gr").value,
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("passwd").value,
        course: document.getElementById("course").value,
        mono: document.getElementById("mono").value
    }
    console.log(student);

    fetch("http://localhost:8090/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
});

fetch("http://localhost:8090/student", {

})
    .then((response) => response.json())
    .then((data) => uimaker(data));