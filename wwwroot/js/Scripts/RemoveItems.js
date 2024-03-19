$(document).ready(function () {
    $("#removeitems").click(function (e) {
        e.preventDefault();
        let listName = $('#ListName').val()
        var checkedBoxes = $('input[name="removedItems"]:checked');
        let removedItems = checkedBoxes.map(function () {
            return $(this).val()
        }).get();
        $('span.listMessage').text('removing from list...')
        $.ajax({
            url: "/User/RemoveItems",
            method: 'POST',
            data: {
                removedItems: removedItems,
                ListName: listName
            }
        }).then(res => {
            $('span.listMessage').text('removed')
            setTimeout(() => { location.reload() }, 500)
        }).catch(err => {
            $('span.listMessage').text('something went wrong')
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
        })
    })

})