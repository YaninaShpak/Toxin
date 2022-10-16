export const createMasks = function () {
  document.addEventListener('DOMContentLoaded', () => {

    const mask = (dataValue, options) => {
      const elements = document.querySelectorAll(`[data-mask="${dataValue}"]`)
      if (!elements) return
  
      elements.forEach(el => {
        IMask(el, options)
      })
    }
  
    // Маска для номера телефона
    mask('phone', {
      mask: '+{7}(000)000-00-00'
    });
  
    // Маска для даты
    mask('date', {
      mask: Date,
      min: new Date(1900, 0, 1), // минимальная дата 01.01.1900
    });
  
    // Маска для числа
    mask('number', {
      mask: Number,
      thousandsSeparator: ' ' // разделитель тысяч в числе
    });

    // Маска для количества гостей
    mask('guests', {
      mask: '#0',
      min: '1',
      definitions: {
        '#': /[1-9]/
      }
    })
  
  });
}