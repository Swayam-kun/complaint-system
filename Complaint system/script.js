function login() {
    window.location.href = "dashboard.html";
}

function goToForm() {
    window.location.href = "form.html";
}

function goToStatus() {
    window.location.href = "status.html";
}

function submitComplaint() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push({ title, desc, status: "Pending" });

    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint Submitted!");
    window.location.href = "status.html";
}

function loadComplaints() {
    let container = document.getElementById("list");
    if (!container) return;

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    container.innerHTML = "";

    complaints.forEach(c => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            <span class="badge ${c.status === "Pending" ? "pending" : "resolved"}">
                ${c.status}
            </span>
        `;

        container.appendChild(div);
    });
}

loadComplaints();