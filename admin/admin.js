
const ADMIN_EMAIL = "prabin.yadav.0.0.18@gmail.com";
const ADMIN_PASS = "adminpanelaccess18";

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("login-email").value;
        let pass = document.getElementById("login-password").value;

        if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
            localStorage.setItem("adminLoggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            alert("Access denied");
        }
    });
}

const adminList = document.getElementById("projectAdminList");
if (adminList) loadProjects();

function loadProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    adminList.innerHTML = "";

    projects.forEach((p, i) => {
        adminList.innerHTML += `
        <div class="projectItem">
            ${p.title}
            <button onclick="deleteProject(${i})">X</button>
        </div>`;
    });
}

function addProject() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    const fileInput = document.getElementById("imgFile");
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("desc");

    const file = fileInput.files[0];
    if (!file) return alert("Select image");

    const reader = new FileReader();

    reader.onload = () => {
        projects.push({
            title: titleInput.value,
            desc: descInput.value,
            img: reader.result
        });

        localStorage.setItem("projects", JSON.stringify(projects));
        loadProjects();
    };

    reader.readAsDataURL(file);
}

function deleteProject(i) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    projects.splice(i, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects();
}

function logout() {
    localStorage.removeItem("adminLoggedIn");
    location.href = "login.html";
}
