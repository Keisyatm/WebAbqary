function login() {
  const username = document.querySelector('#login input[type="text"]').value;
  const password = document.querySelector('#login input[type="password"]').value;

  if (username === "admin" && password === "admin") {
    alert("Login berhasil!");
    window.location.href = "#";
  } else {
    alert("Login gagal. Username atau password salah.");
  }
}