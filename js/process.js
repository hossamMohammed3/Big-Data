

let parentCount = document.querySelector(".our-skills");

function onReachTarget() {


function startCounters(duration) {
    const counters = document.querySelectorAll(".our-skills .cardes span"); 
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target"); 
        const increment = target / (duration / 10); 
        let current = 0; 

        const interval = setInterval(() => {
            current += increment; 
            if (current >= target) {
                counter.innerText = target + "%";
                clearInterval(interval); 
            } else {
                counter.innerText = Math.ceil(current);
            }
        }, 10); 
    });
}

startCounters(3000);

}

function handlerScroll() {
    const numStudentPosition = parentCount.getBoundingClientRect().top; 
    const windowHeight = window.innerHeight; 

    if (numStudentPosition < windowHeight) {
        onReachTarget(); 
        window.removeEventListener('scroll', handlerScroll); 
    }
}

window.addEventListener('scroll', handlerScroll);
        



// start gemini ai


import { GoogleGenerativeAI } from "@google/generative-ai";


    const genAI = new GoogleGenerativeAI('AIzaSyC8mSq6BO6e5LPujP5BkuQbtIO0HXAZA0o');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    document.getElementById('muBTN').addEventListener('click', async function () {

const userInput = document.getElementById('value').value;

    if (!userInput.trim()) {
    document.getElementById('display').textContent = "يرجى إدخال سؤال شكلك نسيت ولا ايه ! ";
    return;
    }

    document.getElementById('display').textContent = " من فضلك انتظر...";

    try {

    const prompt = `أجب عن السؤال التالي: ${userInput}`;
    const result = await model.generateContent(prompt);
    const response = result.response.text(); 


    document.getElementById('display').textContent = await response;

    } catch (error) {

    console.error("Error:", error);
    document.getElementById('display').textContent = "An error occurred while processing your request.";
    }
});

// start map

// إنشاء خريطة
const map = L.map('map').setView([20, 0], 2); // الإحداثيات الافتراضية


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 18,
attribution: '© OpenStreetMap contributors'
}).addTo(map);

const locations = [
{
    coords: [48.8566, 2.3522],
    text: "في أوروبا، يتم استخدام البيانات الضخمة على نطاق واسع لتحسين النقل والرعاية الصحية والمدن الذكية."
},
{
    coords: [35.6895, 139.6917], 
    text: "في آسيا، تعمل البيانات الضخمة على دعم التجارة الإلكترونية والتقنيات المالية والتخطيط الحضري."
},
{
    coords: [40.7128, -74.0060], 
    text: "في أمريكا الشمالية، تعمل البيانات الضخمة على دفع تطوير الذكاء الاصطناعي وتحليلات التسويق والحوسبة السحابية."
},
{
coords: [-1.2921, 36.8219], 
text: "في أفريقيا، يتم استخدام البيانات الضخمة لتحسين الزراعة والوصول إلى الرعاية الصحية وإدارة الموارد."
},
{
coords: [-23.5505, -46.6333], 
text: "في أمريكا الجنوبية، تدعم البيانات الضخمة تحليل إزالة الغابات، ومراقبة المناخ، والتخطيط الحضري الذكي."
},
{
coords: [-33.8688, 151.2093], 
text: "في أستراليا، تساعد البيانات الضخمة في حماية البيئة وتحسين التعدين والحفاظ على الحياة البرية."
},
{
coords: [-90.0000, 0.0000], 
text: "في القارة القطبية الجنوبية، يتم استخدام البيانات الضخمة في أبحاث المناخ ومراقبة الغطاء الجليدي والاستكشاف العلمي."
}
];


locations.forEach(location => {
L.marker(location.coords)
    .addTo(map)
    .bindPopup(location.text)
    .openPopup();
});

// end map 

