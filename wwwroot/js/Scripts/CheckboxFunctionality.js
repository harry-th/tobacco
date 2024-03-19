$(document).ready(function () {
    function changeColor(checkbox, checkboxId) {
        if (!checkbox.val().includes("+") && !checkbox.val().includes("-")) {
            // checkbox.data("clicked", "1");
            checkbox.prop("checked", true)
            checkbox.val("+" + checkbox.val());
            checkbox.css("accent-color", "green");
        } else if (checkbox.val().includes("+")) {
            checkbox.prop("checked", true)
            //checkbox.data("clicked", "2");
            checkbox.val("-" + checkbox.val().slice(1, checkbox.val().Length));
            checkbox.css("accent-color", "red");
        } else {
            // checkbox.data("clicked", "undefined");
            checkbox.val(checkbox.val().slice(1, checkbox.val().Length));
        }

    }
    let checkboxes = document.querySelectorAll('input[name="tobaccoTypes"], input[name="flavorTypes"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', function () {
            let checkboxId = $(this).attr('id');
            let checkbox = $(this);
            changeColor(checkbox, checkboxId);
        });
    }
    let namesOfCheckBoxGroups = ["tobaccoTypes", "flavorTypes"];
    namesOfCheckBoxGroups.forEach(item => {
        $(`.Clear${item}`).click((e) => {
            e.preventDefault();
            let checkboxes = document.querySelectorAll(`input[name="${item}"]`);

            for (let i = 0; i < checkboxes.length; i++) {
                let checkB = $(checkboxes[i])
                checkB.prop("checked", false)
                if (checkB.val().includes("+") || checkB.val().includes("-")) {
                    checkB.val(checkB.val().slice(1, checkB.val().Length));
                }
            }
        })
    })
})