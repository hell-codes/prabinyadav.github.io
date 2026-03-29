import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyC88KmP_zGtFuPh7lLmurCqYwtYyDw3Ff0",
  authDomain:        "prabin-portfolio-admin.firebaseapp.com",
  projectId:         "prabin-portfolio-admin",
  storageBucket:     "prabin-portfolio-admin.firebasestorage.app",
  messagingSenderId: "30623016582",
  appId:             "1:30623016582:web:b1ea62a0da6dad1752d307"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

const adminList = document.getElementById("projectAdminList");

async function loadProjects() {
  adminList.innerHTML = "<p style='color:var(--text-3);font-size:.85rem;'>Loading...</p>";

  const q    = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  adminList.innerHTML = "";

  if (snap.empty) {
    adminList.innerHTML = "<div class='empty-state'>No projects yet. Add one above.</div>";
    return;
  }

  snap.forEach(document => {
    const p  = document.data();
    const id = document.id;

    adminList.innerHTML += `
      <div class="projectItem">
        <span>${p.title}</span>
        <button onclick="deleteProject('${id}')">Delete</button>
      </div>`;
  });
}

window.addProject = async function () {
  const fileInput  = document.getElementById("imgFile");
  const titleInput = document.getElementById("title");
  const descInput  = document.getElementById("desc");
  const btn        = document.querySelector("button[onclick='addProject()']");

  if (!titleInput.value.trim()) return alert("Enter a title");
  if (!descInput.value.trim())  return alert("Enter a description");
  if (!fileInput.files[0])      return alert("Select an image");

  btn.textContent = "Adding...";
  btn.disabled    = true;

  const reader = new FileReader();

  reader.onload = async () => {
    await addDoc(collection(db, "projects"), {
      title:     titleInput.value.trim(),
      desc:      descInput.value.trim(),
      img:       reader.result,
      createdAt: Date.now()
    });

    titleInput.value    = "";
    descInput.value     = "";
    fileInput.value     = "";
    btn.textContent     = "+ Add Project";
    btn.disabled        = false;

    loadProjects();
  };

  reader.readAsDataURL(fileInput.files[0]);
};

window.deleteProject = async function (id) {
  if (!confirm("Delete this project?")) return;
  await deleteDoc(doc(db, "projects", id));
  loadProjects();
};

if (adminList) loadProjects();
