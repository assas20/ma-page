function setLanguage(lang) {
    const schoolName = document.getElementById('school-name');
    const classInfo = document.getElementById('class-info');
    const seriesTitle = document.getElementById('series-title');

    if(lang === 'fr') {
        schoolName.textContent = "École Nationale Supérieure des Travaux Publics - Francis Jeanson";
        classInfo.textContent = "Classes Préparatoires Science et Technologie - 2ème Année 2CP-ENSTP";
        seriesTitle.textContent = "Série TD";
    } else if(lang === 'en') {
        schoolName.textContent = "High National School of Public Works - Francis Jeanson";
        classInfo.textContent = "Science and Technology Preparatory Class - 2nd Year 2CP-ENSTP";
        seriesTitle.textContent = "TD Series";
    } else if(lang === 'ar') {
        schoolName.textContent = "المدرسة العليا للأشغال العمومية - فرانسيس جانسون";
        classInfo.textContent = "السنة التحضيرية للعلوم والتكنولوجيا - السنة الثانية 2CP-ENSTP";
        seriesTitle.textContent = "سلسلة التمارين";
    }
}
