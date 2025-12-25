document.addEventListener("DOMContentLoaded", () => {

    const today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let employees = [];

    document.getElementById("today").innerText =
        "📅 " + today.toDateString();

    // ================= DAILY QUOTES =================
    const quotes = [
        "Success is built one day at a time.",
        "Small progress is still progress.",
        "Discipline beats motivation.",
        "Your future depends on what you do today.",
        "Hard work never goes unnoticed.",
        "Consistency creates results.",
        "Daily effort compounds over time.",
        "Focus on progress, not perfection.",
        "Show up even when it’s hard.",
        "Growth happens outside comfort zones.",

        "Effort today builds strength tomorrow.",
        "Discipline creates freedom.",
        "Small habits shape big futures.",
        "Action beats intention every time.",
        "Success rewards patience.",
        "Progress begins with discipline.",
        "Hard days build strong minds.",
        "Consistency outperforms talent.",
        "Your grind will pay off.",
        "Work quietly, succeed loudly.",

        "Every step forward matters.",
        "Momentum starts with action.",
        "Success favors persistence.",
        "Stay committed to the process.",
        "Discipline fuels progress.",
        "Results follow repetition.",
        "Daily habits define success.",
        "The work compounds over time.",
        "Focus creates momentum.",
        "Stay consistent, stay winning.",

        "Effort builds confidence.",
        "Progress requires patience.",
        "Small wins add up.",
        "Hard work builds character.",
        "Discipline drives results.",
        "Success is earned daily.",
        "Stay focused on the goal.",
        "Consistency builds momentum.",
        "Action creates clarity.",
        "Persistence pays dividends.",

        "Your effort matters.",
        "Progress rewards discipline.",
        "Daily work creates mastery.",
        "Stay disciplined, stay focused.",
        "Hard work builds momentum.",
        "Consistency sharpens skills.",
        "Discipline creates structure.",
        "Success is a daily choice.",
        "Keep moving forward.",
        "Progress beats excuses.",

        "Results follow discipline.",
        "Effort builds resilience.",
        "Success is built steadily.",
        "Consistency strengthens habits.",
        "Daily action builds confidence.",
        "Discipline beats comfort.",
        "Work ethic defines outcomes.",
        "Progress favors commitment.",
        "Persistence creates opportunity.",
        "Stay focused and consistent.",

        "Effort compounds quietly.",
        "Success loves preparation.",
        "Discipline sustains momentum.",
        "Habits shape destiny.",
        "Consistency builds trust in yourself.",
        "Progress is earned daily.",
        "Hard work builds belief.",
        "Stay disciplined under pressure.",
        "Focus fuels progress.",
        "Success rewards effort.",

        "Small steps lead to big change.",
        "Consistency unlocks potential.",
        "Discipline keeps you moving.",
        "Progress grows with patience.",
        "Effort sharpens discipline.",
        "Stay committed every day.",
        "Success comes from repetition.",
        "Daily habits create excellence.",
        "Hard work builds momentum.",
        "Progress follows discipline.",

        "Your grind defines your future.",
        "Consistency creates clarity.",
        "Discipline builds confidence.",
        "Effort builds endurance.",
        "Success favors preparation.",
        "Progress rewards action.",
        "Stay consistent, stay strong.",
        "Hard work compounds.",
        "Discipline fuels success.",
        "Daily effort matters.",

        "Persistence builds power.",
        "Consistency builds results.",
        "Progress starts with effort.",
        "Success follows discipline.",
        "Hard work builds focus.",
        "Daily discipline builds freedom.",
        "Small efforts lead to mastery.",
        "Stay patient and persistent.",
        "Progress beats stagnation.",
        "Effort defines outcomes.",

        "Discipline shapes success.",
        "Consistency builds discipline.",
        "Daily work builds excellence.",
        "Progress comes from effort.",
        "Hard work fuels confidence.",
        "Stay focused on progress.",
        "Success rewards consistency.",
        "Persistence drives progress.",
        "Discipline sustains growth.",
        "Daily habits matter.",

        "Effort creates opportunity.",
        "Consistency fuels momentum.",
        "Progress requires discipline.",
        "Success favors the consistent.",
        "Hard work creates leverage.",
        "Stay disciplined daily.",
        "Persistence beats resistance.",
        "Effort compounds over time.",
        "Consistency builds mastery.",
        "Progress grows steadily.",

        "Discipline strengthens resolve.",
        "Success is earned slowly.",
        "Daily effort builds trust.",
        "Hard work builds credibility.",
        "Progress follows structure.",
        "Consistency builds endurance.",
        "Effort builds momentum.",
        "Stay disciplined always.",
        "Success follows habits.",
        "Persistence shapes outcomes.",

        "Discipline is a lifestyle.",
        "Consistency wins long term.",
        "Progress loves patience.",
        "Hard work pays eventually.",
        "Daily action builds results.",
        "Stay focused and disciplined.",
        "Success grows from effort.",
        "Persistence builds confidence.",
        "Discipline creates stability.",
        "Progress follows commitment.",

        "Consistency beats bursts of effort.",
        "Hard work builds self-belief.",
        "Discipline drives performance.",
        "Progress grows daily.",
        "Stay consistent under pressure.",
        "Success follows structure.",
        "Effort strengthens discipline.",
        "Persistence builds strength.",
        "Daily habits create momentum.",
        "Discipline fuels growth.",

        "Consistency sharpens focus.",
        "Hard work builds patience.",
        "Progress demands discipline.",
        "Success follows effort.",
        "Stay disciplined over time.",
        "Persistence keeps you moving.",
        "Daily effort builds progress.",
        "Discipline beats excuses.",
        "Consistency builds success.",
        "Progress compounds daily.",

        "Hard work defines direction.",
        "Discipline sustains effort.",
        "Success is built daily.",
        "Consistency creates confidence.",
        "Progress grows with effort.",
        "Stay patient and disciplined.",
        "Persistence fuels results.",
        "Daily discipline builds momentum.",
        "Hard work creates progress.",
        "Consistency defines winners.",

        "Discipline builds clarity.",
        "Success favors routine.",
        "Progress rewards persistence.",
        "Hard work fuels results.",
        "Consistency builds strength.",
        "Daily effort builds discipline.",
        "Stay disciplined and focused.",
        "Persistence builds resilience.",
        "Progress grows steadily.",
        "Success follows consistency.",

        "Effort builds discipline.",
        "Consistency builds character.",
        "Progress comes from habits.",
        "Hard work builds purpose.",
        "Discipline sharpens focus.",
        "Daily action builds success.",
        "Persistence creates momentum.",
        "Consistency builds confidence.",
        "Progress follows effort.",
        "Success demands discipline.",

        "Discipline is the foundation.",
        "Consistency wins quietly.",
        "Progress requires effort.",
        "Hard work builds discipline.",
        "Stay consistent every day.",
        "Persistence defines progress.",
        "Daily effort builds strength.",
        "Discipline creates progress.",
        "Success follows daily action.",
        "Consistency compounds results.",

        "Effort builds success.",
        "Discipline sustains growth.",
        "Progress grows through work.",
        "Hard work builds momentum.",
        "Stay disciplined long term.",
        "Persistence fuels progress.",
        "Daily habits shape outcomes.",
        "Consistency drives excellence.",
        "Progress follows discipline.",
        "Success is built consistently."
    ];


    function showDailyQuote() {
        const q = document.getElementById("quote");
        let i = localStorage.getItem("quoteIndex");
        i = i ? parseInt(i) : 0;
        q.innerText = `"${quotes[i]}"`;
        localStorage.setItem("quoteIndex", (i + 1) % quotes.length);
    }
    showDailyQuote();

    // ================= 🎂 BIRTHDAY & 🏢 ANNIVERSARY POPUPS =================
    const todayKey =
        String(today.getDate()).padStart(2, "0") + "-" +
        String(today.getMonth() + 1).padStart(2, "0");

    if (todayKey === "18-11") {
        document.getElementById("birthdayPopup").classList.remove("hidden");
    }

    if (todayKey === "18-03") {
        document.getElementById("anniversaryPopup").classList.remove("hidden");
    }

    window.closeBirthday = () =>
        document.getElementById("birthdayPopup").classList.add("hidden");

    window.closeAnniversary = () =>
        document.getElementById("anniversaryPopup").classList.add("hidden");

    // ================= FESTIVALS (OLD CODE) =================
    const festivals = {

        "01-01": "🎉 Today is New Year’s Day — don’t forget to wish!",
        "12-01": "🧘 Today is National Youth Day — inspire someone!",
        "14-01": "🌾 Today is Pongal / Makar Sankranti — spread festive joy!",
        "23-01": " Today is Netaji Jayanti — remember a true hero!",
        "26-01": " Today is Republic Day — salute the Constitution!",
        "14-02": "❤️ Today is Valentine’s Day — express your love!",
        "08-03": "👩 Today is Women’s Day — appreciate women!",
        "22-03": "💧 Today is World Water Day — save water!",
        "07-04": "🩺 Today is World Health Day — care for your health!",
        "14-04": "📜 Today is Ambedkar Jayanti — honor equality!",
        "22-04": "🌍 Today is Earth Day — care for our planet!",
        "01-05": "👷 Today is Labour Day — respect every worker!",
        "21-06": "🧘 Today is Yoga Day — take a mindful break!",
        "15-08": "🇮🇳 Today is Independence Day — celebrate freedom!",
        "05-09": "📚 Today is Teachers’ Day — thank your mentor!",
        "02-10": "🕊️ Today is Gandhi Jayanti — follow peace!",
        "14-11": "👶 Today is Children’s Day — spread smiles!",
        "25-12": "🎄 Today is Christmas — don’t forget to wish!",
        "31-12": "✨ Today is Year End — reflect & celebrate!"

    };

    if (festivals[todayKey]) {
        document.getElementById("festivalTitle").innerText = festivals[todayKey];
        document.getElementById("festivalPopup").classList.remove("hidden");
    }

    window.closeFestival = () =>
        document.getElementById("festivalPopup").classList.add("hidden");

    // ================= EMPLOYEES + CALENDAR (UNCHANGED) =================
    function parseDate(str) {
        const [d, m, y] = str.split("-");
        return new Date(y, m - 1, d);
    }

    async function loadEmployees() {
        const res = await fetch("employees.csv");
        const txt = await res.text();

        employees = txt.split("\n").slice(1).map(r => {
            const [, name, b, j] = r.split(",");
            return { name, b, j };
        }).filter(e => e.name);

        notifications();
        calendar();
    }

    function notifications() {
        let html = "";

        employees.forEach(e => {
            const bd = parseDate(e.b);
            bd.setFullYear(today.getFullYear());
            const diff = Math.round((bd - today) / 86400000);

            if (diff > 0 && diff <= 3)
                html += `🎂 ${e.name} birthday in ${diff} day(s)<br>`;

            const jd = parseDate(e.j);
            jd.setFullYear(today.getFullYear());
            const adiff = Math.round((jd - today) / 86400000);

            if (adiff > 0 && adiff <= 3)
                html += `🏢 ${e.name} work anniversary in ${adiff} day(s)<br>`;
        });

        document.getElementById("notifications").innerHTML =
            html || "No upcoming notifications 🎯";
    }

    function calendar() {
        const cal = document.getElementById("calendar");
        const label = document.getElementById("monthLabel");
        cal.innerHTML = "";

        label.innerText = new Date(year, month)
            .toLocaleString("default", { month: "long", year: "numeric" });

        const first = new Date(year, month, 1).getDay();
        const days = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < first; i++)
            cal.appendChild(document.createElement("div"));

        for (let d = 1; d <= days; d++) {
            const cell = document.createElement("div");
            cell.className = "calendar-day";
            cell.innerText = d;

            const key =
                String(d).padStart(2, "0") + "-" +
                String(month + 1).padStart(2, "0");

            if (d === today.getDate() && month === today.getMonth())
                cell.classList.add("today");

            if (festivals[key]) cell.classList.add("festival");

            employees.forEach(e => {
                if (e.b.startsWith(key)) cell.classList.add("birthday");
                if (e.j.startsWith(key)) cell.classList.add("anniversary");
            });

            cell.onclick = () => openPopup(d, key);
            cal.appendChild(cell);
        }
    }

    window.openPopup = (d, key) => {
        let html = festivals[key] ? festivals[key] + "<br>" : "";

        employees.forEach(e => {
            if (e.b.startsWith(key)) html += `🎂 ${e.name} Birthday<br>`;
            if (e.j.startsWith(key)) html += `🏢 ${e.name} Work Anniversary<br>`;
        });

        document.getElementById("popupDate").innerText =
            `${String(d).padStart(2, "0")}-${String(month + 1).padStart(2, "0")}-${year}`;

        document.getElementById("popupBody").innerHTML =
            html || "No events";

        document.getElementById("eventPopup").classList.remove("hidden");
    };

    window.closePopup = () =>
        document.getElementById("eventPopup").classList.add("hidden");

    document.getElementById("prevMonth").onclick = () => {
        month--; if (month < 0) { month = 11; year--; }
        calendar();
    };

    document.getElementById("nextMonth").onclick = () => {
        month++; if (month > 11) { month = 0; year++; }
        calendar();
    };

    loadEmployees();
});
