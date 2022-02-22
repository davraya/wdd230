function date_diff(start, end) {
    const date1 = start;
    const date2 = end;

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2 - date1;

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

const diff = document.querySelector(".date");


let saved_date = window.localStorage.getItem("visits-ls");
 
let todays_date = Date.now();


if (saved_date == null){
    diff.textContent = `Number of days between visits: none`
}
else{
    diff.textContent = `Number of days between visits: ${date_diff(saved_date,todays_date)}`
    
    
}


localStorage.setItem("visits-ls", todays_date);