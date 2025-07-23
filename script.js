// script.js

document.getElementById("personalityForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value.trim().toLowerCase();
    const skill = document.getElementById("skill").value.trim();
    const goal = document.getElementById("goal").value;
  
    const altLives = [
      `كنت تصمم روبوتات في اليابان وتكتب كود وأنت تسمع Lo-Fi 🎧`,
      `كنت رائد أعمال في سان فرانسيسكو تطلق شركة ناشئة 🚀`,
      `كنت فنان رقمي في برلين ترسم لوحات AI 🎨`,
      `كنت تتجول حول العالم تعمل عن بعد من شاطئ 🏝️`,
      `كنت تدرّس برمجة في كوريا وتنشر دروس على اليوتيوب 💻`,
      `كنت في النرويج تصنع ألعاب إنديز مشهورة 🎮`
    ];
  
    let chosenLife = "";
    if (goal === "freedom") chosenLife = altLives[3];
    else if (goal === "money") chosenLife = altLives[1];
    else if (goal === "comfort") chosenLife = altLives[5];
    else if (goal === "tech") chosenLife = altLives[0];
  
    const resultText = `لو كنت شخصًا آخر غير من ${country}، عمرك ${age} سنة ومهارتك هي ${skill}... ${chosenLife}`;
  
    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
      <p>${resultText}</p>
      <div class="result-buttons">
        <button onclick="copyResult()">📋 انسخ النتيجة</button>
        <button onclick="restartForm()">🔄 جرّب مرة أخرى</button>
      </div>
    `;
    resultBox.style.display = "block";
  });
  
  function copyResult() {
    const text = document.querySelector("#resultBox p").innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ تم نسخ النتيجة!");
    });
  }
  
  function restartForm() {
    document.getElementById("personalityForm").reset();
    document.getElementById("resultBox").style.display = "none";
  } 
  