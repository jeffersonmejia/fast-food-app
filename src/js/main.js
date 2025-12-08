import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Swal from 'sweetalert2'

function aplicarAnimacion(id, anim) {
	const el = $('#' + id)
	el.removeClass('animate__animated animate__' + anim)
	void el[0].offsetWidth
	el.addClass('animate__animated animate__' + anim)

	el.one('animationend', function () {
		Swal.fire('Animación aplicada: ' + anim).then(() => {
			el.removeClass('animate__animated animate__' + anim)
		})
	})
}

$('img').each(function () {
	const anim = this.id.replace('anim-', '')
	$(this).on('click', () => aplicarAnimacion(this.id, anim))
})
