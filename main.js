function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let currentDate = new Date(start);
    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
    const monthlyTargets = [];
    let totalDaysWorked = 0;

    while (currentDate <= end) {
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();

        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDaysInMonth = 0;
        let daysWorkedInCurrentMonth = 0;

        for (let day = 1; day <= daysInMonth; day++) {
            let date = new Date(year, month, day);

            if (date.getDay() !== 5) {
                workingDaysInMonth++;
                if (date >= start && date <= end) {
                    daysWorkedInCurrentMonth++;
                }
            }
        }

        daysExcludingFridays.push(workingDaysInMonth);
        daysWorkedExcludingFridays.push(daysWorkedInCurrentMonth);
        totalDaysWorked += daysWorkedInCurrentMonth;
        
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(1);
    }

    const dailyTarget = totalAnnualTarget / totalDaysWorked;
    daysWorkedExcludingFridays.forEach(days => {
        monthlyTargets.push(dailyTarget * days);
    });

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget: dailyTarget * totalDaysWorked
    };
}

// Example usage for a 4-month range
const result = calculateTotalTarget('2024-01-01', '2024-03-30', 5220);
console.log(result);