const deleteButton = document.querySelectorAll('.fa-trash')
//console.log(deleteButton)

deleteButton.forEach(item => item.addEventListener('click', deleteWord) )


async function deleteWord() {
    //console.log('delete word!')
    const itemText = this.parentNode.childNodes[1].innerText
    //console.log(itemText)

    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              '_id': itemText
            })
          })
        const data = await response.json()
        console.log('data is...')
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }

}