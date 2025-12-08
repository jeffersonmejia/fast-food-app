import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Swal from 'sweetalert2'

function aplicarAnimacion(id, anim) {
	const el = document.getElementById(id)
	el.classList.remove('animate__animated', 'animate__' + anim)
	void el.offsetWidth
	el.classList.add('animate__animated', 'animate__' + anim)

	el.addEventListener(
		'animationend',
		() => {
			Swal.fire('Animación aplicada: ' + anim).then(() => {
				el.classList.remove('animate__animated', 'animate__' + anim)
			})
		},
		{ once: true }
	)
}

document.querySelectorAll('img').forEach((img) => {
	const anim = img.id.replace('anim-', '')
	img.addEventListener('click', () => aplicarAnimacion(img.id, anim))
})
