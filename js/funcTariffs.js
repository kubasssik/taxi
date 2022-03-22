//Тарифы
const rateRadioFunc = function (a) {


    for (let i = 0; i < a.length; i++) {
        a[i].value = i;
        a[i].addEventListener('change', () => {
            if (a[i].value == 0) {

                console.log('Эконом, до 2 чел.вкл., без Д/К, нет кондиционера');
            } else if (a[i].value == 1) {

                console.log('Комфорт до 4 чел.вкл., 1  Д/К - бесплатно');
            }
            else if (a[i].value == 2) {

                console.log('Комфорт + до 4 чел.вкл., 1 Д/К - бесплатно');
            }
            else if (a[i].value == 3) {

                console.log('Минивэн  до 6 чел.вкл., 1-2 Д/К - бесплатно');
            }
            else if (a[i].value == 4) {

                console.log('Миниавтобус  до 8 чел.вкл., 1-3 Д/К - бесплатно');
            }
            else if (a[i].value == 5) {

                console.log('Бизнес  до 3 чел.вкл., без Д/К, только предвпарительно');
            }
            else if (a[i].value == 6) {
                console.log('V.I.P.  до 3 чел.вкл., без Д/К, только предвпарительно');
            }
            else if (a[i].value == 7) {
                console.log('Индивидуально, только предвпарительно');
            }

        })
    }
}
export { rateRadioFunc };