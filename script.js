function count() {
    const ranks = ['Чебурек', 'Чебурек+', 'Чурбан', 'Чурбан+', 'Чурбан PREMIUM']
    let value = 0
    let rankCount = 0
    const el = document.querySelector('.counter')
    const rank = document.querySelector('.rank span')

    let interval = setInterval(() => {
        if (rankCount == 4) {
            el.innerHTML = 'The End!'
            clearInterval(interval)
        }
        
        if (value == 60) {
            value = 0
            rankCount++
        }
        el.innerHTML = value
        rank.innerHTML = ranks[rankCount]
        value++
    }, 1000)
}
count()