const imgTop = document.querySelectorAll('.imgTop img')
const imgBottom = document.querySelectorAll('.imgBottom img')
const allimgs = document.querySelectorAll('img')

const module1 = document.querySelector('.module')
const endGame = document.querySelector('.endGame')
const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

imgBottom.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target === imgBottom[0]) {
            imgBottom[0].id = '1'
            imgBottom[0].setAttribute('style', 'transform: translateY(-100px);')
            imgBottom[1].setAttribute('style', 'display:none')
            imgBottom[2].setAttribute('style', 'display:none')
        } if (e.target === imgBottom[1]) {
            imgBottom[1].id = '1'
            imgBottom[0].setAttribute('style', 'display:none')
            imgBottom[1].setAttribute('style', 'transform: translateY(-100px);')
            imgBottom[2].setAttribute('style', 'display:none')
        } if (e.target === imgBottom[2]) {
            imgBottom[2].id = '1'
            imgBottom[0].setAttribute('style', 'display:none')
            imgBottom[1].setAttribute('style', 'display:none')
            imgBottom[2].setAttribute('style', 'transform: translateY(-100px);')
        }
        let random = (Math.random() * 100).toFixed()

        if (random <= 33) {
            imgTop[0].id = '2'
            imgTop[0].setAttribute('style', 'transform: translateY(-100px);')
            imgTop[1].setAttribute('style', 'display:none')
            imgTop[2].setAttribute('style', 'display:none')
        } if (random >= 34 && random <= 66) {
            imgTop[1].id = '2'
            imgTop[0].setAttribute('style', 'display:none')
            imgTop[1].setAttribute('style', 'transform: translateY(-100px);')
            imgTop[2].setAttribute('style', 'display:none')
        } if (random >= 67) {
            imgTop[2].id = '2'
            imgTop[0].setAttribute('style', 'display:none')
            imgTop[1].setAttribute('style', 'display:none')
            imgTop[2].setAttribute('style', 'transform: translateY(-100px);')
        }
        //check =?>>>>>>>>>>
        let r = [...allimgs].filter(e1 => {
            return e1.id
        })
        let result = r.sort((a, b) => {
            return a.id - b.id;
        })
        let you = result[0].className;
        let bot = result[1].className;

        if (you === bot) {
            h1.innerHTML = 'HÒA BẠN Ê';
        } if (you == 'bua' && bot == 'keo') {
            h1.innerHTML = 'YOU WIN ^^';
        } if (you == 'bua' && bot == 'bao') {
            h1.innerHTML = 'THUA THUA !';
        } if (you == 'keo' && bot == 'bao') {
            h1.innerHTML = 'YOU WIN ^^';
        } if (you == 'keo' && bot == 'bua') {
            h1.innerHTML = 'THUA THUA !';
        } if (you == 'bao' && bot == 'bua') {
            h1.innerHTML = 'YOU WIN ^^';
        } if (you == 'bao' && bot == 'keo') {
            h1.innerHTML = 'THUA THUA !';
        }
        module1.style.zIndex = "0"
        btn.addEventListener('click', e => {
            module1.style.zIndex = "-99";

            [...allimgs].forEach(e1 => {
                e1.removeAttribute('style')
                e1.removeAttribute('id')
            })
        })
    })

})
