function count() {
    const ranks = ['Чебурек', 'Чебурек+', 'Чурбан', 'Чурбан+', 'Чурбан PREMIUM']
    let value = 0
    let rankCount = 0
    const el = document.querySelector('.counter')
    const rank = document.querySelector('.rank span')
    const body = document.querySelector('body')

    body.addEventListener('click', () => {
        value++
        if (value == 60) {
            value = 0
            rankCount++
        }

        if (rankCount == 4) {
            el.innerHTML = 'THE END!'
            body.removeEventListener('click')
            return;
        }
        el.innerHTML = value
        rank.innerHTML = ranks[rankCount]
    })
}
count()
