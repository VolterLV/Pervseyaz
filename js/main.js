/* -------------Меню Бургер --------------*/
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		)
	},
}
if (isMobile.any()) {
}

if (location.hash) {
	var hsh = location.hash.replace('#', '')
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh)
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate(
			{ scrollTop: $('div.' + hsh).offset().top },
			500,
			function () {}
		)
	}
}
$('.wrapper').addClass('loaded')

var act = 'click'
if (isMobile.iOS()) {
	var act = 'touchstart'
}

$('.menu-header__icon').click(function (event) {
	$(this).toggleClass('active')
	$('.header__menu').toggleClass('active')
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop())
	}
	$('body').toggleClass('lock')
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	}
})

// Slowly scroll to block start
$('a[href="#calc"').on('click', function () {
	let href = $(this).attr('href')
	$('html, body').animate({
		scrollTop: $(href).offset().top - 60,
	})
	return false
})
// Slowly scroll to block end

// Button comeback to top start
let btn = $('#back-to-top')
$(window).scroll(function () {
	if ($(window).scrollTop() > 400) {
		btn.addClass('show')
	} else {
		btn.removeClass('show')
	}
})
btn.on('click', function (e) {
	e.preventDefault()
	$('html, body').animate({ scrollTop: 0 }, '300')
})
// Button comeback to top end

// Reviews gallery start
$('.reviews__content').magnificPopup({
	closeOnBgClick: true,
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
	},
	gallery: {
		enabled: true,
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function (element) {
			return element.find('img')
		},
	},
})
// Reviews gallery end

// Popup logic start
$('.popup__media').on('click', function () {
	let changeMessanger = $(this).attr('data-value')
	$('.input-select-messanger').attr('value', changeMessanger)
	$('.popup__media').removeClass('active')
	$(this).addClass('active')
})

$('.popup-load-file').on('change', function () {
	let changeInputFile = $(this).val()
	if (changeInputFile) {
		$('.file-custom').css('background-image', 'url(images/onload-file.png)')
	} else {
		$('.file-custom').css('background-image', 'url(images/load-file.png)')
	}
})
// Popup logic end

// Modal window start
$(document).ready(function () {
	/* 	-----Попат телефон */
	$(document).on('click', '[data-toggle="modal"]', function () {
		var target = $(this).attr('data-target')
		console.log(target)
		$(target).addClass('show')
		return false
	})

	$('.modal ._close').on('click', function () {
		$(this).closest('.modal').removeClass('show')
		return false
	})
	/* 	-----Попат телефон */
	/* 	-----Попат телефон */
	$(document).on('click', '[data-toggle="modal"]', function () {
		var target = $(this).attr('data-target')
		console.log(target)
		$(target).addClass('show')
		return false
	})

	$('.modal-p ._close').on('click', function () {
		$(this).closest('.modal-p').removeClass('show')
		return false
	})
	/* 	-----Попат телефон */

	/* 	-----Попат Политика */

	$('.popup-open').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false
				} else {
					this.st.focus = '#name'
				}
			},
		},
	})
	$(document).on('click', '.popup-dismiss', function (e) {
		e.preventDefault()
		$.magnificPopup.close()
	})
})
// Modal window end

// Range input update value start
const slideValue = document.querySelector('#dinamic-input')
const inputSlider = document.querySelector('#range')
inputSlider.oninput = () => {
	let value = inputSlider.value
	slideValue.value = value
}
// Range input update value end

// Custom select start
var x, i, j, l, ll, selElmnt, a, b, c
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName('custom-select')
l = x.length
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName('select')[0]
	ll = selElmnt.length
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement('DIV')
	a.setAttribute('class', 'select-selected')
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
	x[i].appendChild(a)
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement('DIV')
	b.setAttribute('class', 'select-items select-hide')
	for (j = 1; j < ll; j++) {
		/* For each option in the original select element,
  create a new DIV that will act as an option item: */
		c = document.createElement('DIV')
		c.innerHTML = selElmnt.options[j].innerHTML
		c.addEventListener('click', function (e) {
			/* When an item is clicked, update the original select box,
      and the selected item: */
			var y, i, k, s, h, sl, yl
			s = this.parentNode.parentNode.getElementsByTagName('select')[0]
			sl = s.length
			h = this.parentNode.previousSibling
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i
					h.innerHTML = this.innerHTML
					y = this.parentNode.getElementsByClassName('same-as-selected')
					yl = y.length
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute('class')
					}
					this.setAttribute('class', 'same-as-selected')
					break
				}
			}
			h.click()
		})
		b.appendChild(c)
	}
	x[i].appendChild(b)
	a.addEventListener('click', function (e) {
		/* When the select box is clicked, close any other select boxes,
  and open/close the current select box: */
		e.stopPropagation()
		closeAllSelect(this)
		this.nextSibling.classList.toggle('select-hide')
		this.classList.toggle('select-arrow-active')
	})
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
except the current select box: */
	var x,
		y,
		i,
		xl,
		yl,
		arrNo = []
	x = document.getElementsByClassName('select-items')
	y = document.getElementsByClassName('select-selected')
	xl = x.length
	yl = y.length
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove('select-arrow-active')
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add('select-hide')
		}
	}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect)
// Custom select end



$(function () {

	// Calculate start
	let currnetPage = 1
	$('#arrow-left').on('click', function () {
		if (currnetPage == 1) {
			return
		}
		currnetPage = 1
		$(this).css('cursor', 'auto')
		$(this).siblings().css('cursor', 'pointer')
		$(this).siblings().addClass('active')
		$(this).removeClass('active')

		$('#dot-left').addClass('active')
		$('#dot-right').removeClass('active')

		$('#calc-1').css('display', 'block')
		$('#calc-2').css('display', 'none')
	})
	$('#arrow-right').on('click', function () {
		if (currnetPage == 2) {
			return
		}
		currnetPage = 2
		$(this).css('cursor', 'auto')
		$(this).siblings().css('cursor', 'pointer')
		$(this).siblings().addClass('active')
		$(this).removeClass('active')

		$('#dot-right').addClass('active')
		$('#dot-left').removeClass('active')

		$('#calc-1').css('display', 'none')
		$('#calc-2').css('display', 'block')
	})

	// Animation element
	$('.calc__themes-block').on('click', function () {
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
	})
	$('.calc__format-block').on('click', function () {
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
	})

	// Logic
	let themeAttr = 1
	let langFirst = 0
	let langSecond = 0
	let pages = 1
	let photo = 1
	let package = 1
	let times = 24
	let sales = 0

	$('.calc--themes').on('click', function () {
		themeAttr = $(this).attr('data-value')
	})

	$('#dinamic-input').on('input keyup', function () {
		let dinamicInput = $(this).val()
		$('#range').val(dinamicInput)
	})

	$('.calc__format-block').on('click', function () {
		photo = $(this).attr('data-value')
	})

	$('#checkbox--unique').on('click', function () {
		$('#checkbox--unique').prop('checked', true)
		$('.sales--procent').removeClass('active')

		sales = $(this).attr('data-value')
		$('#topSales').html(sales)
	})

	$('.sales--procent').on('click', function () {
		$('#checkbox--unique').prop('checked', false)

		$(this).siblings().removeClass('active')
		$(this).addClass('active')

		sales = $(this).attr('data-value')
		$('#topSales').html(sales)
	})

	$('.calc--package').on('click', function () {
		$(this).siblings().removeClass('active')
		$(this).addClass('active')

		package = $(this).attr('data-value')
		if (package == '1') {
			times = 24
		}
		if (package == '1.5') {
			times = 12
		}
		if (package == '2') {
			times = 6
		}
	})

	function calcPrice() {
		let txtlang1 = $("#lang-1 option:selected").text();
		let txtlang2 = $("#lang-2 option:selected").text();
		langFirst = $('#lang-1').val()
		langSecond = $('#lang-2').val()
		let lang_1 = 0
		let lang_2 = 0

		pages = $('#dinamic-input').val()

		if (themeAttr == 1) {
			if (langFirst == 69 || langFirst == 90) {
				lang_1 = 0
			} else {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-popular') *
					pages
			}

			if (langSecond == 69 || langSecond == 90) {
				lang_2 = 0
			} else {
				lang_2 =
					$('#lang-2 option[value=' + langSecond + ']').attr('data-popular') *
					pages
			}

			if (langFirst == langSecond) {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-popular') *
					pages
				lang_2 = 0
			}

			if (lang_1 == 0 && lang_2 == 0) {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-popular') *
					pages
				lang_2 = 0
			}

			let sumLang = lang_1 + lang_2
			let sumPhoto = sumLang * photo
			let sumPackage = Math.round(sumPhoto * package)
			let sumPackageua = Math.round(sumPhoto * 0.37 * package)
			$('#sum').html(sumPackage)
			$('#sumua').html(sumPackageua)
			let calcSales = (sumPackage / 100) * sales
			let sumSales = Math.round(sumPackage - calcSales)
			let sumSalesua = Math.round(sumPackage * 0.37 - calcSales)
			$('#totally').html(sumSales)
			$('#totallyua').html(sumSalesua)
			let workTime

			if (langFirst != 0 || langSecond != 0) {
				if (pages > 10) {
					workTime = Math.round((times / 10) * pages)
					$('#times').html(workTime)
				} else {
					$('#times').html(times)
				}
			}

			$('#price-popup').html(sumSales)
			$('#price-popupua').html(sumSalesua)
			$('#popup-submit-price').val(sumSales)
			$('#popup-submit-priceua').val(sumSalesua)
			$('#popup-submit-lang1').val(txtlang1)
			$('#popup-submit-lang2').val(txtlang2)
		}
		if (themeAttr == 2) {
			if (langFirst == 69 || langFirst == 90) {
				lang_1 = 0
			} else {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-eco') * pages
			}

			if (langSecond == 69 || langSecond == 90) {
				lang_2 = 0
			} else {
				lang_2 =
					$('#lang-2 option[value=' + langSecond + ']').attr('data-eco') * pages
			}

			if (langFirst == langSecond) {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-eco') * pages
				lang_2 = 0
			}

			if (lang_1 == 0 && lang_2 == 0) {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-eco') * pages
				lang_2 = 0
			}

			let sumLang = lang_1 + lang_2
			let sumPhoto = sumLang * photo
			let sumPackage = Math.round(sumPhoto * package)
			let sumPackageua = Math.round(sumPhoto * 0.37 * package)
			$('#sum').html(sumPackage)
			$('#sumua').html(sumPackageua)
			let calcSales = (sumPackage / 100) * sales
			let sumSales = Math.round(sumPackage - calcSales)
			let sumSalesua = Math.round(sumPackage * 0.37 - calcSales)
			$('#totally').html(sumSales)
			$('#totallyua').html(sumSalesua)
			let workTime

			if (langFirst != 0 || langSecond != 0) {
				if (pages > 10) {
					workTime = Math.round((times / 10) * pages)
					$('#times').html(workTime)
				} else {
					$('#times').html(times)
				}
			}

			$('#price-popup').html(sumSales)
			$('#price-popupua').html(sumSalesua)
			$('#popup-submit-price').val(sumSales)
			$('#popup-submit-priceua').val(sumSalesua)
		}
		if (themeAttr == 3) {
			if (langFirst == 69 || langFirst == 90) {
				lang_1 = 0
			} else {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-exp') * pages
			}

			if (langSecond == 69 || langSecond == 90) {
				lang_2 = 0
			} else {
				lang_2 =
					$('#lang-2 option[value=' + langSecond + ']').attr('data-exp') * pages
			}

			if (langFirst == langSecond) {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-exp') * pages
				lang_2 = 0
			}

			if (lang_1 == 0 && lang_2 == 0) {
				lang_1 =
					$('#lang-1 option[value=' + langFirst + ']').attr('data-exp') * pages
				lang_2 = 0
			}

			let sumLang = lang_1 + lang_2
			let sumPhoto = sumLang * photo
			let sumPackage = Math.round(sumPhoto * package)
			let sumPackageua = Math.round(sumPhoto * 0.37 * package)
			$('#sum').html(sumPackage)
			$('#sumua').html(sumPackageua)
			let calcSales = (sumPackage / 100) * sales
			let sumSales = Math.round(sumPackage - calcSales)
			let sumSalesua = Math.round(sumPackage * 0.37 - calcSales)
			$('#totally').html(sumSales)
			$('#totallyua').html(sumSalesua)
			let workTime

			if (langFirst != 0 || langSecond != 0) {
				if (pages > 10) {
					workTime = Math.round((times / 10) * pages)
					$('#times').html(workTime)
				} else {
					$('#times').html(times)
				}
			}

			$('#popup-submit-priceua').val(sumSalesua)
			$('#price-popup').html(sumSales)
			$('#price-popupua').html(sumSalesua)
			$('#popup-submit-price').val(sumSales)
		}

		setTimeout(calcPrice, 50)
	}

	calcPrice()

	$('#button-order').on('click', function () {
		$('.popup__sumbit').addClass('active')
	})

	$('.popup__btn-close').on('click', function () {
		$('.popup__sumbit').removeClass('active')
	})
	// Calculate end

	// Custom input type file start
	const realFileBtn = document.getElementById('real-file')
	const customBtn = document.getElementById('custom-button')
	const customTxt = document.getElementById('custom-text')

	if (customBtn) {
		customBtn.addEventListener('click', function () {
			realFileBtn.click()
		})
	}

	if (realFileBtn) {
		realFileBtn.addEventListener('change', function () {
			if (realFileBtn.value) {
				customTxt.innerHTML = realFileBtn.value.match(
					/[\/\\]([\w\d\s\.\-\(\)]+)$/
				)[1]
			} else {
				customTxt.innerHTML = 'Прикрепить документ'
			}
		})
	}
	// Custom input type file end

	// Burger mobile menu start
	$('.menu-burger__header').click(function () {
		$('.menu-burger__header').toggleClass('open-menu')
		$('.header__nav').toggleClass('open-menu')
		$('body').toggleClass('fixed-page')
	})

	$('header a').on('click', function () {
		$('.menu-burger__header').toggleClass('open-menu')
		$('.header__nav').toggleClass('open-menu')
		$('body').toggleClass('fixed-page')
	})

	$('.header__menu li a').on('click', function () {
		document.querySelector('.hamRotate').classList.toggle('active')
		document.querySelector('.header__wrap-menu').classList.toggle('active')
		/* document.querySelector('body').classList.toggle('active-fixed') */
	})

	// Burger mobile menu end
})

$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass('sticky')
		$('.header-sticky-fix').addClass('active')
	} else {
		$('header').removeClass('sticky')
		$('.header-sticky-fix').removeClass('active')
	}
})

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]')
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (
		item,
		index,
		self
	) {
		return !item.dataset.spollers.split(',')[0]
	})
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular)
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (
		item,
		index,
		self
	) {
		return item.dataset.spollers.split(',')[0]
	})

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = []
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers
			const breakpoint = {}
			const paramsArray = params.split(',')
			breakpoint.value = paramsArray[0]
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max'
			breakpoint.item = item
			breakpointsArray.push(breakpoint)
		})

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return (
				'(' +
				item.type +
				'-width: ' +
				item.value +
				'px),' +
				item.value +
				',' +
				item.type
			)
		})
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index
		})

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(',')
			const mediaBreakpoint = paramsArray[1]
			const mediaType = paramsArray[2]
			const matchMedia = window.matchMedia(paramsArray[0])

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true
				}
			})
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia)
			})
			initSpollers(spollersArray, matchMedia)
		})
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init')
				initSpollerBody(spollersBlock)
				spollersBlock.addEventListener('click', setSpollerAction)
			} else {
				spollersBlock.classList.remove('_init')
				initSpollerBody(spollersBlock, false)
				spollersBlock.removeEventListener('click', setSpollerAction)
			}
		})
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]')
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex')
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1')
					spollerTitle.nextElementSibling.hidden = false
				}
			})
		}
	}
	function setSpollerAction(e) {
		const el = e.target
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller')
				? el
				: el.closest('[data-spoller]')
			const spollersBlock = spollerTitle.closest('[data-spollers]')
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller')
				? true
				: false
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock)
				}
				spollerTitle.classList.toggle('_active')
				_slideToggle(spollerTitle.nextElementSibling, 500)
			}
			e.preventDefault()
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector(
			'[data-spoller]._active'
		)
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active')
			_slideUp(spollerActiveTitle.nextElementSibling, 500)
		}
	}
}
//========================================================================================================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide')
		target.style.transitionProperty = 'height, margin, padding'
		target.style.transitionDuration = duration + 'ms'
		target.style.height = target.offsetHeight + 'px'
		target.offsetHeight
		target.style.overflow = 'hidden'
		target.style.height = 0
		target.style.paddingTop = 0
		target.style.paddingBottom = 0
		target.style.marginTop = 0
		target.style.marginBottom = 0
		window.setTimeout(() => {
			target.hidden = true
			target.style.removeProperty('height')
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-top')
			target.style.removeProperty('margin-bottom')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('_slide')
		}, duration)
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide')
		if (target.hidden) {
			target.hidden = false
		}
		let height = target.offsetHeight
		target.style.overflow = 'hidden'
		target.style.height = 0
		target.style.paddingTop = 0
		target.style.paddingBottom = 0
		target.style.marginTop = 0
		target.style.marginBottom = 0
		target.offsetHeight
		target.style.transitionProperty = 'height, margin, padding'
		target.style.transitionDuration = duration + 'ms'
		target.style.height = height + 'px'
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		window.setTimeout(() => {
			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('_slide')
		}, duration)
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration)
	} else {
		return _slideUp(target, duration)
	}
}
function IncreaseHeight() {
	var first = Document.getElementById('Right').style.height
	var second = Document.getElementById('Left').style.height

	if (first < second)
		Document.getElementById('Right').style.height =
			Document.getElementById('Left').style.height
	else
		Document.getElementById('Left').style.height =
			Document.getElementById('Right').style.height
}
function showDiv() {
   document.getElementById('thanksDiv').style.display = "block";
}
function hideDiv() {
   document.getElementById('thanksDiv').style.display = "none";
}