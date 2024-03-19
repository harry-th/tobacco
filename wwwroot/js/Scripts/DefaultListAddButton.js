$(document).ready(function () {
    $(".tobaccoResults").on("click", "button.addDefault", function (e) {
        e.preventDefault();
        let tobaccoId = $(this).attr("name");
        let listName = $(this).val();
        $.ajax({
            url: "/TobaccoBlends/AddToDefaultList",
            method: 'POST',
            data: {
                tobaccoId: tobaccoId,
                listName: listName
            }
        }).then(res => {
            $(`button.addDefault[name="${tobaccoId}"][value="${listName}"]`).addClass("btn-danger")
        }).catch(err => {
            $('span.listMessage').text(err.responseText)
            console.log(err, 'error')
        })
    });
})