let carousel = getCarouselAndClasses().carousel;

if (carousel) {
	let
		ctrlLeft = carousel.querySelector('.carousel-control--left'),
		ctrlRight = carousel.querySelector('.carousel-control--right');

	setCarouselHeight();

	ctrlLeft.onclick = function(e) {
		e.preventDefault();

		let
			items = getCarouselItems(),
			classes = getCarouselAndClasses();

		items.left.classList.add(classes.right);
		items.left.classList.remove(classes.left);

		items.right.classList.add(classes.middle);
		items.right.classList.remove(classes.right);

		items.middle.classList.add(classes.left);
		items.middle.classList.remove(classes.middle);
	};

	ctrlRight.onclick = function(e) {
		e.preventDefault();

		let
			items = getCarouselItems(),
			classes = getCarouselAndClasses();

		items.right.classList.add(classes.left);
		items.right.classList.remove(classes.right);

		items.left.classList.add(classes.middle);
		items.left.classList.remove(classes.left);

		items.middle.classList.add(classes.right);
		items.middle.classList.remove(classes.middle);
	};
}

function getCarouselAndClasses() {
	return {
		left: 'carousel-item--left',
		middle: 'carousel-item--middle',
		right: 'carousel-item--right',
		carousel: document.querySelector('.carousel'),
	}
}

function getCarouselItems() {
	let classes = getCarouselAndClasses();

	return {
		left: carousel.querySelector('.' + classes.left),
		middle: carousel.querySelector('.' + classes.middle),
		right: carousel.querySelector('.' + classes.right),
	}
}

function setCarouselHeight() {
	let
		cAndC = getCarouselAndClasses(),
		carousel = cAndC.carousel,
		carouselHeight = carousel.querySelector('.' + cAndC.middle).offsetHeight,
		height = carouselHeight + 'px';

	carousel.style.height = height;
	carousel.querySelector('.carousel__items').style.height = height;
}

let carouselResizeTimeout;

window.onresize = function(e) {
	clearTimeout(carouselResizeTimeout);

	carouselResizeTimeout = setTimeout(function(){
		setCarouselHeight();
	}, 250);
};