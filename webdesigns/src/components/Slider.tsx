
import React, { useRef, useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import ProjectsCards from './ProjectsCards'

interface Slide {
	index: number
	headline: string
	button: string
	src: string
}

interface SlideProps {
	slide: Slide
	current: number
	handleSlideClick: (index: number) => void
}

const Slide: React.FC<SlideProps> = ({ slide, current, handleSlideClick }) => {
	const slideRef = useRef<HTMLLIElement>(null)

	const handleMouseMove = (event: React.MouseEvent) => {
		const el = slideRef.current
		if (el) {
			const r = el.getBoundingClientRect()
			el.style.setProperty('--x', `${event.clientX - (r.left + Math.floor(r.width / 2))}`)
			el.style.setProperty('--y', `${event.clientY - (r.top + Math.floor(r.height / 2))}`)
		}
	}

	const handleMouseLeave = () => {
		if (slideRef.current) {
			slideRef.current.style.setProperty('--x', '0')
			slideRef.current.style.setProperty('--y', '0')
		}
	}

	const handleSlideClickInternal = () => {
		handleSlideClick(slide.index)
	}

	const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
		const target = event.target as HTMLImageElement
		if (target) {
			target.style.opacity = '1'
		}
	}

	let classNames = 'slide'

	if (current === slide.index) classNames += ' slide--current'
	else if (current - 1 === slide.index) classNames += ' slide--previous'
	else if (current + 1 === slide.index) classNames += ' slide--next'

	return (
		<li ref={slideRef} className={classNames} onClick={handleSlideClickInternal} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
			<div className="slide__image-wrapper">
				<img className="slide__image" alt={slide.headline} src={slide.src} onLoad={imageLoaded} />
			</div>

			<article className="slide__content">
				<h2 className="slide__headline">{slide.headline}</h2>
				<button className="slide__action btn">{slide.button}</button>
			</article>
		</li>
	)
}

interface SliderProps {
  heading: string;
  slides: Slide[];
  slideClass?: string; // Nueva prop para la clase del slide
  imageClass?: string; // Nueva prop para la clase de la imagen del slide
}

const Slider: React.FC<SliderProps> = ({ heading, slides, slideClass, imageClass }) => {
  const [current, setCurrent] = useState<number>(0);

	const handlePreviousClick = () => {
		const previous = current - 1
		setCurrent(previous < 0 ? slides.length - 1 : previous)
	}

	const handleNextClick = () => {
		const next = current + 1
		setCurrent(next === slides.length ? 0 : next)
	}

	const handleSlideClick = (index: number) => {
		if (current !== index) {
			setCurrent(index)
		}
	}

	const headingId = `slider-heading__${heading?.replace(/\s+/g, '-').toLowerCase()}`
	const wrapperTransform = {
		transform: `translateX(-${current * (100 / slides?.length)}%)`,
	}

  return (
    <div className={`slider ${slideClass}`} aria-labelledby={headingId}>
      <ul className={`slider__wrapper ${imageClass}`} style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden text-white">
          {heading}
        </h3>

        <div className="w-full flex gap-4 p-5">
          {slides?.map((slide) => (
            <ProjectsCards
              key={slide.index}
              title={slide.headline}
              imageSrc={slide.src}
              index={slide.index}
              category="Web Design"
              customClass={`slide ${current === slide.index ? 'slide--current' : ''} ${
                current - 1 === slide.index ? 'slide--previous' : ''
              } ${current + 1 === slide.index ? 'slide--next' : ''} ${slideClass || ''}`}
              imageClass={imageClass}
            />
          ))}
        </div>
      </ul>

      <div className="slider__controls w-full flex justify-center gap-10 text-5xl text-white">
        <button className="btn btn--previous" title="Go to previous slide" onClick={handlePreviousClick}>
          <FaArrowCircleLeft />
        </button>

        <button className="btn btn--next" title="Go to next slide" onClick={handleNextClick}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
}

export default Slider
