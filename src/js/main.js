import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'animate.css/animate.min.css'
import Swal from 'sweetalert2'

const ANIMATION_DURATION = '5s'
const ANIMATION_TIMEOUT = 1000

function aplicarAnimacion(
	id,
	anim,
	duration = ANIMATION_DURATION,
	timeout = ANIMATION_TIMEOUT
) {
	const el = $('#' + id)
	el.css('animation-duration', duration)
	el.removeClass('animate__animated animate__' + anim)
	void el[0].offsetWidth
	el.addClass('animate__animated animate__' + anim)

	setTimeout(() => {
		Swal.fire('Animación aplicada: ' + anim).then(() => {
			el.removeClass('animate__animated animate__' + anim)
			el.css('animation-duration', '')
		})
	}, timeout)
}

$('img').each(function () {
	const anim = this.id.replace('anim-', '')
	$(this).on('click', () => aplicarAnimacion(this.id, anim))
})
