let money = prompt("Ваш бюджет на месяц?");
let data = prompt("Введите дату в формате YYYY-MM-DD");
const expenKeey = prompt("Введите обязательную статью расходов в этом месяце");
const expensvalue = prompt("Во сколько обойдется?");
const appdata = {
    budjet: money,
    timedata: data,
    [expenKeey]: expensvalue,
    optionalExpenses:"",
    income:"",
    savings: false
};
console.log(appdata);
alert("Ваш бюджет на день: " + ((+money - +expensvalue) / 30));