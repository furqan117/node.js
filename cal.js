function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
    const monthlyTargets = [];

    let currentDate = new Date(start);
    while (currentDate <= end) {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const totalDays = getWorkingDaysInMonth(year, month);
        const workedDays = getWorkedDaysInRange(currentDate, start, end);
        const monthlyTarget = (workedDays / totalDays) * (totalAnnualTarget / 12);

        // Ku dar console.log si aad u hubiso xogta bil kasta
        console.log(`Sanadka: ${year}, Bisha: ${month + 1} `);
        console.log(`Maalmaha shaqada bisha oo aan jimco ahayn: ${totalDays}`);
        console.log(`Maalmaha aad shaqeysay bisha: ${workedDays}`);
        console.log(`Bartilmaameedka bishan: ${monthlyTarget}`);

        daysExcludingFridays.push(totalDays);
        daysWorkedExcludingFridays.push(workedDays);
        monthlyTargets.push(monthlyTarget);

        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    const totalTarget = monthlyTargets.reduce((sum, value) => sum + value, 0);

    console.log(`Bartilmaameedka Guud: ${totalTarget}`);  // Xogta ugu dambeysa ee la xisaabiyay

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget
    };
}

// Tirada maalmaha shaqada ee bil kasta (Jimcaha laga saaray)
function getWorkingDaysInMonth(year, month) {
    let workingDays = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        if (date.getDay() !== 5) {  // Jimcaha waa 5
            workingDays++;
        }
    }

    // Ku dar console.log si aad u aragto natiijada
    console.log(`Sanadka: ${year}, Bisha: ${month + 1}, Maalmaha shaqada: ${workingDays}`);

    return workingDays;
}

// Tirada maalmaha shaqada ee dhexda ku jira (oo aan Jimcaha lahayn)
function getWorkedDaysInRange(currentDate, start, end) {
    let workedDays = 0;

    let date = new Date(currentDate);  // Nuqul cusub samee

    while (date <= end) {
        if (date.getDay() !== 5 && date >= start) {  // Jimcaha waa 5
            workedDays++;
        }
        date.setDate(date.getDate() + 1);  // Nuqulka kordhi
    }

    // Ku dar console.log si aad u aragto tirada maalmaha shaqada
    console.log(`Maalmaha shaqada ee dhexda ku jira: ${workedDays}`);

    return workedDays;
}