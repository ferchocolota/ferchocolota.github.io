class Calc {
    constructor(data) {
        this._data = data;
        if (data) {
            this.currentSlide = 0;
            let list = document.querySelector('.navigation-list');
            this.data.forEach(() => {
                let li = document.createElement('li');
                list.appendChild(li)
            });
        }
        this.appending(0);
        this.events();
    }

    get data() {
        return this._data
    }
    
    appending(idx) {
        if (isNaN(idx)) {
            if (idx === 'up') {
                this.currentSlide = this.currentSlide === 0 ? this.data.length - 1 : this.currentSlide - 1;

            }
            else if (idx === 'down') {
                this.currentSlide = this.currentSlide === this.data.length - 1 ? 0 : this.currentSlide + 1;
            }
        } else {
            this.currentSlide = idx
        }
        let data = this.data[this.currentSlide],
            container = document.querySelector('.container-carusel'),
            activeItem = container.querySelectorAll('.navigation-list li');
        for (let i in data) {
            if (container.querySelector(`[data-type=${i}]`).tagName === 'IMG') {
                container.querySelector(`[data-type=${i}]`).setAttribute('src', `./images/vapes/${data[i]}`);
            } else {
                container.querySelector(`[data-type=${i}]`).innerHTML = data[i];
            }
        }
        activeItem.forEach(item => {
            item.classList.remove('active')
        });
        activeItem[this.currentSlide].classList.add('active');
    }

    calculating() {
        let inputCount = 0,
            input = document.querySelectorAll('.order-items input'),
            price = document.querySelector('.order-finishing-total__price span');

        input.forEach(item => {
            if (item.value < 0)
                item.value = 0;

            inputCount += parseInt(item.value) ? parseInt(item.value) : 0;
            if (inputCount) {
                document.querySelector('.order-finishing-total__amount span').innerHTML = inputCount;
                price.innerHTML = (inputCount * 900).toFixed(2);
            } else {
                document.querySelector('.order-finishing-total__amount span').innerHTML = 0;
                price.innerHTML = 0
            }
            if (inputCount >= 50) {
                price.innerHTML = (inputCount * 1500).toFixed(2);
            }
            if (inputCount >= 75) {
                price.innerHTML = (inputCount * 900).toFixed(2);
            }
            if (inputCount >= 100) {
                price.innerHTML = (inputCount * 900).toFixed(2);
            }
        })
    }

    events() {
        document.querySelector('.navigation-arrow-up').onclick = () => {
            this.appending('up')
        };

        document.querySelector('.navigation-arrow-down').onclick = () => {
            this.appending('down')
        };
        document.querySelectorAll('.navigation-list li').forEach((item, i) => {
            item.onclick = () => {
                this.appending(i)
            }
        });

        let input = document.querySelectorAll('.order-items input');
        input.forEach(elem => {
            elem.addEventListener("change", () => {
                this.calculating();
            });
            elem.addEventListener("keyup", () => {
                this.calculating();
            });
        });
    }
}