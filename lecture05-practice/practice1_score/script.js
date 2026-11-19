const input = document.getElementById("num");
const button = document.getElementById("run");
const result = document.getElementById("result");

// show("文字") で、結果に1行ずつ表示します
function show(text) {
  const li = document.createElement("li");
  li.textContent = text;
  result.appendChild(li);
}

button.addEventListener("click", () => {
  result.innerHTML = "";
  const score = Number(input.value);
  judge(score);
});

// ===== 上記は さわらなくて OK =====
// ===== ここから下を AI に書いてもらう =====
function judge(score) {
  if (score >= 60) {
    show("合格");
  } else {
    show("不合格");
  }
}
