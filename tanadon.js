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

  // Initialize everything
  renderSnacks();
  renderBeverages();