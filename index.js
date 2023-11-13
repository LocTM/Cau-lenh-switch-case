function checkDays() {
    let month = +document.getElementById("month").value;
    let days;
    switch (parseInt(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = "28 hoặc 29";
            break;
        default:
            alert("Điền trong khoảng 1-12");
            return;
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Có " + days + " ngày trong tháng " + month;
}