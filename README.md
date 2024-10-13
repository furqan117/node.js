#    Student Information
Name: furqaan  farxaan daahir
Class ID: C1211013
Class Name: CA211
------


Calculate Total Target Based on Working Days
This JavaScript function, calculateTotalTarget, calculates the monthly and total target values for a specified time range, excluding Fridays from the working days. This is useful for calculating monthly targets in workplaces where Fridays are not considered working days.

Description
The calculateTotalTarget function takes a start date, end date, and an annual target as input. It then calculates:

The number of working days in each month (excluding Fridays).
The number of working days within the specified date range (excluding Fridays).
The monthly target based on the proportion of working days in each month.
The total target over the period.
This can be helpful for annual or periodic planning, especially when specific weekdays need to be excluded from calculations.

How It Works
Input Parameters:

startDate: The beginning date of the target period.
endDate: The ending date of the target period.
totalAnnualTarget: The total target for the year.
Processing:

Calculates the total working days in each month and within the date range.
Excludes Fridays (day 5 in JavaScript's Date.getDay() function).
Determines a daily target based on the total annual target and the total number of working days.
Calculates monthly targets by multiplying the daily target with the working days in each month within the specified period.
Output:

An object containing:
daysExcludingFridays: The working days in each month.
daysWorkedExcludingFridays: The working days within the date range for each month.
monthlyTargets: The target for each month based on working days.
totalTarget: The total target for the specified date range.
Usage
Here's how to use the function with a 4-month range:

{ "daysWorkedExcludingFridays": [Number, ...], 


// Array of working days per month (excluding Fridays) "monthlyTargets": [Number, ...], 
// Array of monthly targets for months with working days "totalTarget": Number 
// Sum of all the distributed monthly targets } 
Example javascript console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220)); Output:

json { "daysWorkedExcludingFridays": [ 22, // January 21, // February 21 // March ], 
"monthlyTargets": [ 435, // January 435, // February 435 // March ], "totalTarget": 1305 
// Sum of monthly targets for January to March }

Instructions
Run the code:

Copy the function into a JavaScript file or an environment that supports JavaScript (e.g., Node.js or a web browser console).
Call the function with appropriate arguments.
Install Node.js (if running in Node environment):

Download and install Node.js from https://nodejs.org/.
Run the code using node <your-file-name.js>.
GitHub Submission:

Upload this code to a GitHub repository.
Include this README file for instructions and clarity.
Assumptions and Limitations
This function assumes that Fridays are non-working days.
The totalAnnualTarget should represent the target for a complete year.
If the date range crosses multiple years, the function will calculate days monthly but will not differentiate by year.
Example of a Real-Life Use Case
Consider a company that sets annual performance targets for employees, but only considers weekdays (excluding Fridays) as working days. This function can help calculate the monthly and total targets based on the actual working days within the specified period.







