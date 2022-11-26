const form1 = document.querySelector("form");

form1.addEventListener("submit", async function (evt) {
  evt.preventDefault();

  const formData = new FormData(form1);
  const data = Object.fromEntries(formData);
  console.log(data);

  fetch("https://spec-backend.onrender.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});
