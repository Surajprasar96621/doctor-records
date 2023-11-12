const doctorForm = document.querySelector("#doctor-form");
const doctorTable = document.querySelector("#doctor-table");


doctorForm.addEventListener("submit", function(event) {
  event.preventDefault();

  
  const name = document.querySelector("#name").value;
  const docId = document.querySelector("#doc-id").value;
  const specialization = document.querySelector("#specialization").value;
  const experience = document.querySelector("#experience").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;

  
  let role = "";
  if (experience > 5) {
    role = "Senior";
  } else if (experience >= 2 && experience <= 5) {
    role = "Junior";
  } else {
    role = "Trainee";
  }

  
  const tableRow = document.createElement("tr");


  const nameCell = document.createElement("td");
  const docIdCell = document.createElement("td");
  const specializationCell = document.createElement("td");
  const experienceCell = document.createElement("td");
  const emailCell = document.createElement("td");
  const mobileCell = document.createElement("td");
  const roleCell = document.createElement("td");
  const deleteCell = document.createElement("td");

  
  nameCell.textContent = name;
  docIdCell.textContent = docId;
  specializationCell.textContent = specialization;
  experienceCell.textContent = experience;
  emailCell.textContent = email;
  mobileCell.textContent = mobile;
  roleCell.textContent = role;
  deleteCell.innerHTML = "<button class='delete-button'>Delete</button>";

  tableRow.appendChild(nameCell);
  tableRow.appendChild(docIdCell);
  tableRow.appendChild(specializationCell);
  tableRow.appendChild(experienceCell);
  tableRow.appendChild(emailCell);
  tableRow.appendChild(mobileCell);
  tableRow.appendChild(roleCell);
  tableRow.appendChild(deleteCell);

  doctorTable.querySelector("tbody").appendChild(tableRow);

  doctorForm.reset();
});

document.querySelectorAll(".delete-button").forEach(button => {
  button.addEventListener("click", function(event) {
    const tableRow = event.target.closest("tr");

    tableRow.remove();
  });
});
