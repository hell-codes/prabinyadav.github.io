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

function compressImage(file, maxWidth = 800, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("File read failed"));
    reader.onload = e => {
      const img = new Image();
      img.onerror = () => reject(new Error("Image load failed"));
      img.onload = () => {
        const scale  = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width  = Math.round(img.width  * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);

        let dataUrl = canvas.toDataURL("image/jpeg", quality);

        if (dataUrl.length > 700_000) {
          dataUrl = canvas.toDataURL("image/jpeg", 0.45);
        }

        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

window.addProject = async function () {
  const fileInput  = document.getElementById("imgFile");
  const titleInput = document.getElementById("title");
  const descInput  = document.getElementById("desc");
  const btn        = document.querySelector("button[onclick='addProject()']");

  const title = titleInput.value.trim();
  const desc  = descInput.value.trim();
  const file  = fileInput.files[0];

  if (!title) return alert("Enter a title");
  if (!desc)  return alert("Enter a description");
  if (!file)  return alert("Select an image");

  if (file.size > 5 * 1024 * 1024) {
    return alert("Image is too large. Please use an image under 5 MB.");
  }

  btn.textContent = "Compressing…";
  btn.disabled    = true;

  try {
    const imgData = await compressImage(file);

    if (imgData.length > 900_000) {
      btn.textContent = "+ Add Project";
      btn.disabled    = false;
      return alert("Image is still too large after compression. Please use a smaller image.");
    }

    btn.textContent = "Uploading…";

    await addDoc(collection(db, "projects"), {
      title,
      desc,
      img:       imgData,
      createdAt: Date.now()
    });

    titleInput.value = "";
    descInput.value  = "";
    fileInput.value  = "";

    btn.textContent = "+ Add Project";
    btn.disabled    = false;

    loadProjects();

  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload failed: " + err.message);
    btn.textContent = "+ Add Project";
    btn.disabled    = false;
  }
};

window.deleteProject = async function (id) {
  if (!confirm("Delete this project?")) return;
  await deleteDoc(doc(db, "projects", id));
  loadProjects();
};

if (adminList) loadProjects();
