"use strict"; //厳格モード
document.addEventListener("DOMContentLoaded", () => {
    console.log("in");
    class Fruits {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        showInfo() {
            return `${this.name}:${this.price}円`;
        }
    }
    //からっぽのリスト
    const fruitsList = [];
    //DOMの取得
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const bt = document.getElementById("bt");
    const ol = document.getElementById("list");

    bt.addEventListener("click", () => {
        const fruitsName = name.value;
        const fruitsPrice = parseInt(price.value);
        fruitsList.push(new Fruits(fruitsName, fruitsPrice));
        sortFruits();
        ol.textContent = null;//一回空にする（リストの順番が入れ替わるから）

        for (let fruit of fruitsList) {
            const li = document.createElement("li");
            li.textContent = fruit.showInfo();
            if (fruit.price >= 1000) {
                li.classList.add("red");
            }
            ol.append(li);
        }
        name.value = "";
        price.value = "";
        name.focus();
    });
    const sortFruits = () => {
        for (let i = 0; i < fruitsList.length - 1; i++) {
            for (let j = i + 1; j < fruitsList.length; j++) {
                if (fruitsList[i].price < fruitsList[j].price) {
                    const temp = fruitsList[i];
                    fruitsList[i] = fruitsList[j];
                    fruitsList[j] = temp;
                }
            }
        }
    };
});