import { useState, useEffect } from 'react'

interface MyRef<T> {
	current: T | null
}

function useOnScreen<T extends Element>(ref: MyRef<T>, threshold = 0.3): boolean {
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry?.isIntersecting ?? false)
			},
			{
				rootMargin: '0px',
				threshold,
			},
		)
		const currentRef = ref.current
		if (currentRef != null) {
			observer.observe(currentRef)
		}
		return () => {
			if (currentRef != null) {
				observer.unobserve(currentRef)
			}
		}
	}, [ref, threshold])

	return isIntersecting
}

export default useOnScreen
