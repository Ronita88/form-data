const $ = document;

$addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");
});

$querySelector("contact-form").$addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await axios.post("http://localhost:3000/send-email", {
    firstname: $querySelector("#prénom").value,
    lastname: $querySelector("#nom").value,
    email: $querySelector("#email").value,
    subject: $querySelector("sujet").value,
    message: $querySelector("message").value,
  });
  console.log(response.data);
  alert("Merci et bienvenue");
});
