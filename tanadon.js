const snacks = [
    { id: "snack1", name: "Kanomkoe black", price: 3 },
    { id: "snack2", name: "Kanomkoe green", price: 3 },
    { id: "snack3", name: "Kanomkoe pink", price: 3 },
    { id: "snack4", name: "Kanomkoe blue", price: 3 },
    { id: "snack5", name: "Kanomkoe rainbow", price: 3 }
  ];
const beverages = [
    {id: "beverage1", name:"Chanom",price: 3},
    {id: "beverage2", name:"Nomyen",price: 3}
];
  const snackAmounts = {};
  const beverageAmounts = {};
  
  function renderSnacks() {
    const container = document.getElementById("snack-container");
    container.innerHTML = ""; // clear previous content if needed
  
    for (let snack of snacks) {
      snackAmounts[snack.id] = 0;
  
      const snackHTML = `
        <div class="product-card">
        <div class="product-category"></div>  
        <img src="${snack.id}.png" alt="${snack.name}"/> 
          <h3>${snack.name}</h3>
          <p>${snack.price} Baht</p>
          <p>Amount: <span id="${snack.id}-amount">0</span></p>
          <button onclick="superincrement('${snack.id}')">+10</button>
          <button onclick="increment('${snack.id}')">+</button>
          <button onclick="decrement('${snack.id}')">-</button>
          <button onclick="superdecrement('${snack.id}')">-10</button>
          <button onclick="submit('${snackAmounts[snack.id]}')">submit</button>
        </div>
      `;
      container.innerHTML += snackHTML;
    }
  }
  function renderBeverages(){
    const bcontainer = document.getElementById("beverage-container");

    for(let beverage of beverages){
        beverageAmounts[beverage.id] = 0;
        const beverageHTML = `
        <div class="product-card">
        <div class="product-category"></div>
        <img src="${beverage.id}.png" alt="${beverage.name}"/>
          <h3>${beverage.name}</h3>
          <p>${beverage.price} Baht</p>
          <p>Amount: <span id="${beverage.id}-amount">0</span></p>
          <button onclick="superbincrement('${beverage.id}')">+10</button>
          <button onclick="bincrement('${beverage.id}')">+</button>
          <button onclick="bdecrement('${beverage.id}')">-</button>
          <button onclick="superbdecrement('${beverage.id}')">-10</button>
          <button onclick="submit('${beverageAmounts[beverage.id]}')">submit</button>
          
        </div>
      `;
      bcontainer.innerHTML += beverageHTML;
    }
  }
  function increment(id) {
    snackAmounts[id]++;
    document.getElementById(`${id}-amount`).textContent = snackAmounts[id];
  }
  function bincrement(id) {
    beverageAmounts[id]++;
    document.getElementById(`${id}-amount`).textContent = beverageAmounts[id];
  } 
  function decrement(id) {
    if (snackAmounts[id] > 0) {
      snackAmounts[id]--;
      if(snackAmounts<0)
        {
          document.getElementById(`${id}-amount`).textContent = snackAmounts[0];
        }
      document.getElementById(`${id}-amount`).textContent = snackAmounts[id];
    }
  }
  function bdecrement(id) {
    if (beverageAmounts[id] > 0) {
      beverageAmounts[id]--;
      if(beverageAmounts<0)
        {
          document.getElementById(`${id}-amount`).textContent = beverageAmounts[0];
        }
      document.getElementById(`${id}-amount`).textContent = beverageAmounts[id];
     }
  }
  function superincrement(id) {
    snackAmounts[id]+=10;
    document.getElementById(`${id}-amount`).textContent = snackAmounts[id];
  }
  function superdecrement(id) {
    if (snackAmounts[id] > 0) {
      snackAmounts[id]-=10;
      if(snackAmounts[id]<10)
        {
            snackAmounts[id]=0;
          document.getElementById(`${id}-amount`).textContent = snackAmounts[id];
        }
      
      document.getElementById(`${id}-amount`).textContent = snackAmounts[id];
    }
}
function superbincrement(id) {
    beverageAmounts[id]+=10;
    document.getElementById(`${id}-amount`).textContent = beverageAmounts[id];
}
function superbdecrement(id) {
    if (beverageAmounts[id] > 0) {
      beverageAmounts[id]-=10;
      if(beverageAmounts[id]<10)
        {
            beverageAmounts[id]=0;
          document.getElementById(`${id}-amount`).textContent = beverageAmounts[id];
        }
      document.getElementById(`${id}-amount`).textContent = beverageAmounts[id];
     }
}
function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
}

function showRegister() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('dashboard').classList.add('hidden');
}

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;

  // Dummy check for this demo
  if (user && pass) {
    window.location.href = "index.html";
  } else {
    alert("Please enter username and password");
  }
}

function register() {
  const user = document.getElementById('regUser').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPass').value;
  const confirm = document.getElementById('regConfirm').value;

  if (!user || !email || !pass || !confirm) {
    alert("ระบุ ชื่อและรหัสผ่าน");
    return;
  }

  if (pass !== confirm) {
    alert("ใส่รหัสใหม่");
    return;
  }

  alert("ลงทะเบียนสำเร็จ.");
  showLogin();
}

function logout() {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
}
function submit()
{
  function submit() {
    let snackSummary = "";
    let totalSnackCost = 0;
  
    for (let snack of snacks) {
      const amount = snackAmounts[snack.id];
      if (amount > 0) {
        const cost = amount * snack.price;
        snackSummary += `${snack.name}: ${amount} pcs = ${cost} Baht\n`;
        totalSnackCost += cost;
      }
    }
  
    let beverageSummary = "";
    let totalBeverageCost = 0;
  
    for (let bev of beverages) {
      const amount = beverageAmounts[bev.id];
      if (amount > 0) {
        const cost = amount * bev.price;
        beverageSummary += `${bev.name}: ${amount} pcs = ${cost} Baht\n`;
        totalBeverageCost += cost;
      }
    }
  
    const total = totalSnackCost + totalBeverageCost;
  
    const message = `🧾 Your Order Summary:\n\n${snackSummary}${beverageSummary}\nTotal: ${total} Baht`;
    alert(message);
  
    // Optionally: clear after submit
    // resetAmounts();
  }
  
}
  // Initialize everything
  renderSnacks();
  renderBeverages();
