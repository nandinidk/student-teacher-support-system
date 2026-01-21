let problems = JSON.parse(localStorage.getItem("problems")) || [];

function register() {
  localStorage.setItem("student", rname.value + "," + rpass.value);
  alert("Registered successfully");
  window.location = "index.html";
}

function login() {
  let role = document.getElementById("role").value;

  if (role === "student") {
    window.location = "student.html";
  } else {
    window.location = "teacher.html";
  }
}

function postProblem() {
  problems.push({ text: problem.value, reply: "" });
  localStorage.setItem("problems", JSON.stringify(problems));
  alert("Problem submitted");
  showStudentProblems();
}

function showStudentProblems() {
  let div = document.getElementById("studentProblems");
  div.innerHTML = "";
  problems.forEach(p => {
    div.innerHTML += `<div class="box">
      <b>Problem:</b> ${p.text}<br>
      <b>Reply:</b> ${p.reply || "Pending"}
    </div>`;
  });
}

function showTeacherProblems() {
  let div = document.getElementById("teacherProblems");
  div.innerHTML = "";
  problems.forEach((p, i) => {
    div.innerHTML += `<div class="box">
      <b>Problem:</b> ${p.text}<br>
      <input placeholder="Reply" onchange="reply(${i}, this.value)">
    </div>`;
  });
}

function reply(i, text) {
  problems[i].reply = text;
  localStorage.setItem("problems", JSON.stringify(problems));
}

if (document.getElementById("studentProblems")) showStudentProblems();
if (document.getElementById("teacherProblems")) showTeacherProblems();
