$(document).ready(function () {
    $("#AddToCustomList").click(function () {
        let listName = $('#ListName').val()
        var checkedBoxes = $('input[name="customListItems"]:checked');
        let tobaccoIds = checkedBoxes.map(function () {
            return $(this).val()
        }).get();
        if (!listName || !checkedBoxes.length) return
        $('span.listMessage').text('adding to list...')
        $.ajax({
            url: "/TobaccoBlends/AddToCustomList",
            method: 'POST',
            data: {
                tobaccoIds: tobaccoIds,
                listName: listName
            }
        }).then(res => {
            $('span.listMessage').text(res)
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
            $("input[name=customListItems]:checked").prop("checked", false)
        }).catch(err => {
            $('span.listMessage').text(err.responseText)
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
        })
    })
    $("#AddToCustomListSticky").click(function () {
        let listName = $('#ListNameSticky').val()
        var checkedBoxes = $('input[name="customListItems"]:checked');
        let tobaccoIds = checkedBoxes.map(function () {
            return $(this).val()
        }).get();
        if (!listName || !checkedBoxes.length) return
        $('span.listMessage').text('adding to list...')
        $.ajax({
            url: "/TobaccoBlends/AddToCustomList",
            method: 'POST',
            data: {
                tobaccoIds: tobaccoIds,
                listName: listName
            }
        }).then(res => {
            $('span.listMessage').text(res)
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
            $("input[name=customListItems]:checked").prop("checked", false)
        }).catch(err => {
            $('span.listMessage').text(err.responseText)
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
        })
    })
})