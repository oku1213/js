window.onload = () => {
    const prices = [120, 50, 180];
    const result = document.getElementById("result");
    const fruits = document.getElementsByClassName("fruits");
    for (let i = 0; i < fruits.length; i++) {
        fruits[i].addEventListener("change", () => {
            let sum = 0;
            for (let i = 0; i < fruits.length; i++) {
                sum += fruits[i].value * prices[i];
            }
            result.textContent = sum + "円です！";
        });
    };
};