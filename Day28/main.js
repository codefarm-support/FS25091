const API_BASE_URL = "https://api-class-o1lo.onrender.com/api/huytq";
const productsEl = document.getElementById("product-list");
const paginationEl = document.getElementById("pagination");
const statusSelectEl = document.getElementById("status-select");

const params = { _page: 1, _limit: 2 };

async function fetchProducts() {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/todos`, {
      params,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function showProducts() {
  try {
    const data = await fetchProducts();
    let elementProduct = "";
    let elementPagination = "";
    if (data.data.length) {
      data.data.forEach((element) => {
        elementProduct += `<div>${element.title}
        <p>${element.status}</p></div>`;
      });
      if (elementProduct) productsEl.innerHTML = elementProduct;
      Array.from({ length: data.meta.totalPages }).forEach((_, index) => {
        elementPagination += `<button onclick="handleClickPagination(${
          index + 1
        })" class="${
          index + 1 === data.meta.page && "active-pagination-btn"
        }">${index + 1}</button>`;
      });
      if (elementPagination) paginationEl.innerHTML = elementPagination;
    }
  } catch (error) {}
}

showProducts();
function handleClickPagination(page) {
  params._page = page;
  showProducts();
}

statusSelectEl.addEventListener("change", (e) => {
  e.preventDefault();
  params._page = 1;
  params.status = e.target.value;
  showProducts();
});
