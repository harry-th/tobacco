$(document).ready(function () {
    $("#likelist").click(function (e) {
        e.preventDefault();
        let ListId = $('#ListId').val()
        $.ajax({
            url: "/User/LikeList",
            method: 'POST',
            data: {
                ListId: ListId
            }
        }).then(res => {
            $('span.listMessage').text(res)
            setTimeout(() => { location.reload() }, 500)
        }).catch(err => {
            console.log(err)
            $('span.listMessage').text('something went wrong')
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
        })
    })
    $("#dislikelist").click(function (e) {
        e.preventDefault();
        let listId = $('#ListId').val()
        $.ajax({
            url: "/User/DislikeList",
            method: 'POST',
            data: {
                listId
            }
        }).then(res => {
            $('span.listMessage').text(res)
            setTimeout(() => { location.reload() }, 500)
        }).catch(err => {
            $('span.listMessage').text('something went wrong')
            setTimeout(() => { $('span.listMessage').text('') }, 3000)
        })
    })
})