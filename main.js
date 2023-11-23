document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.querySelector(".bill-input");
    const tipButtons = document.querySelectorAll(".tip-amount button");
    const customInput = document.querySelector(".custom-input");
    const peopleInput = document.querySelector(".people-input");
    const result1Number = document.querySelector(".result-1-number");
    const result2Number = document.querySelector(".result-2-number");
    const resetBtn = document.querySelector(".reset-btn");
    const peopleTitle = document.querySelector(".people-title");

    function calculateTip() {
        const billAmount = parseFloat(billInput.value);
        let tipPercentage;

        tipButtons.forEach(button => {
            button.addEventListener("mouseover", function () {
                button.style.backgroundColor = "#9FE8DF";
            });

            button.addEventListener("mouseout", function () {
                if (!button.classList.contains("active")) {
                    button.style.backgroundColor = "";
                }
            });

            if (button.classList.contains("active")) {
                button.style.backgroundColor = "#26C2AE";
                button.style.color = "#00474B";
                tipPercentage = parseFloat(button.textContent);
            } else {
                button.style.backgroundColor = "";
                button.style.color = "";
            }
        });

        if (!isNaN(parseFloat(customInput.value))) {
            tipPercentage = parseFloat(customInput.value);
        }

        const numberOfPeople = parseInt(peopleInput.value);

        const tipPerPerson = (billAmount * (tipPercentage / 100)) / numberOfPeople;
        const totalTip = billAmount * (tipPercentage / 100);

        result1Number.textContent = `$${tipPerPerson.toFixed(2)}`;
        result2Number.textContent = `$${totalTip.toFixed(2)}`;

        if (numberOfPeople <= 0) {
            peopleTitle.style.color = "red";
            peopleInput.style.border = "2px solid red";
            resetBtn.disabled = true;
            resetBtn.style.opacity = "0.5";
        } else {
            peopleTitle.style.color = "";
            peopleInput.style.border = "2px solid #26C2AE";
            resetBtn.disabled = false;
            resetBtn.style.opacity = "1";
        }
    }

    tipButtons.forEach(button => {
        button.addEventListener("click", function () {
            tipButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.style.backgroundColor = "";
                btn.style.color = "";
            });
            button.classList.add("active");
            calculateTip();
        });
    });

    customInput.addEventListener("input", function () {
        tipButtons.forEach(btn => {
            btn.classList.remove("active");
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });
        calculateTip();
    });

    peopleInput.addEventListener("input", function () {
        calculateTip();
    });

    resetBtn.addEventListener("click", function () {
        billInput.value = "";
        tipButtons.forEach(button => {
            button.classList.remove("active");
            button.style.backgroundColor = "";
            button.style.color = "";
        });
        customInput.value = "";
        peopleInput.value = "";
        result1Number.textContent = "$0.00";
        result2Number.textContent = "$0.00";
        peopleTitle.style.color = "";
        peopleInput.style.border = "";
        resetBtn.disabled = true;
        resetBtn.style.opacity = "0.5";
    });

    resetBtn.addEventListener("mouseover", function () {
        resetBtn.style.backgroundColor = "#9FE8DF";
    });

    resetBtn.addEventListener("mouseout", function () {
        resetBtn.style.backgroundColor = "";
    });

    const allInputs = document.querySelectorAll("input");
    const allButtons = document.querySelectorAll("button");

    allInputs.forEach(input => {
        input.style.cursor = "pointer";

        input.addEventListener("click", function () {
            input.style.border = "2px solid #26C2AE";
        });
    });

    allButtons.forEach(button => {
        button.style.cursor = "pointer";
    });
});
