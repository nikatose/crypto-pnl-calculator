function calculate() {
  const buyPrice = Number(document.getElementById("buyPrice").value);
  const sellPrice = Number(document.getElementById("sellPrice").value);
  const amount = Number(document.getElementById("amount").value);
  const fee = Number(document.getElementById("fee").value);

  if (!buyPrice || !sellPrice || !amount) {
    alert("Please enter buy price, sell price and amount.");
    return;
  }

  const investment = buyPrice * amount;
  const grossProfit = (sellPrice - buyPrice) * amount;

  const fees =
    (investment + sellPrice * amount) * (fee / 100);

  const pnl = grossProfit - fees;
  const roi = (pnl / investment) * 100;

  document.getElementById("investment").textContent =
    `$${investment.toFixed(2)}`;

  document.getElementById("pnl").textContent =
    `${pnl >= 0 ? "+" : ""}$${pnl.toFixed(2)}`;

  document.getElementById("roi").textContent =
    `${roi >= 0 ? "+" : ""}${roi.toFixed(2)}%`;

  document.getElementById("result").classList.remove("hidden");
}
