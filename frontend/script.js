const API_URL = "http://127.0.0.1:8000";

document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();

  const form = document.getElementById("user-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;

    if (!name || !email || !dob) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, dob }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      console.log("User registered successfully");
      form.reset();
      fetchUsers();
    } catch (error) {
      console.error("Error:", error);
      alert("Email Should not be same as other user.");
    }
  });
});

async function fetchUsers() {
  try {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();
    const tbody = document.getElementById("users-body");
    tbody.innerHTML = "";

    users.forEach((user, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td><input type="text" value="${user.Name}" id="name-${user.ID}"></td>
        <td><input type="email" value="${user.Email}" id="email-${user.ID}"></td>
        <td><input type="date" value="${user.DateOfBirth}" id="dob-${user.ID}"></td>
        <td class="actions">
          <button onclick="updateUser(${user.ID})">Update</button>
          <button onclick="confirmDelete(${user.ID}, '${user.Name}')">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function updateUser(id) {
  const name = document.getElementById(`name-${id}`).value.trim();
  const email = document.getElementById(`email-${id}`).value.trim();
  const dob = document.getElementById(`dob-${id}`).value;

  if (!name || !email || !dob) {
    alert("Please fill all fields before updating.");
    return;
  }

  try {
    await fetch(`${API_URL}/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, dob }),
    });

    console.log(`User ${id} updated`);
    fetchUsers();
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

function confirmDelete(id, name) {
  const isConfirmed = confirm(`Are you sure you want to delete user "${name}"?`);
  if (isConfirmed) {
    deleteUser(id);
  }
}

async function deleteUser(id) {
  try {
    await fetch(`${API_URL}/delete/${id}`, {
      method: "DELETE",
    });
    console.log(`User ${id} deleted`);
    fetchUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
