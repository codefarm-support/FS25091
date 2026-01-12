const api = "https://api-class-o1lo.onrender.com/api/binh";

async function login(email, password) {
  try {
    const { data } = await axios.post(`${api}/auth/login`, { email, password });
    localStorage.setItem("user", JSON.stringify(data.data));
    alert("Đăng nhập thành công");
  } catch (error) {
    console.log(error);
    alert(error.response.data.message || error.message);
  }
}

async function register(email, password) {
  try {
    await axios.post(`${api}/auth/register`, { email, password });
    alert("Đăng ký thành công");
  } catch (error) {
    console.log(error);
    alert(error.response.data.message || error.message);
  }
}
