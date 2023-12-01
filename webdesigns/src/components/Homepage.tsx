const Homepage: React.FC = () => {
	return (
		<section className="mt-[150px]">
			<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
				<div className="flex w-full mx-auto text-left">
					<div className="relative inline-flex items-center mx-auto align-middle">
						<div className="text-center">
							<h1 className="text-5xl font-bold leading-none tracking-normal text-black md:text-5xl lg:text-9xl ">Finally, a</h1>
							<h1 className="text-5xl font-bold leading-none tracking-tighter text-black md:text-5xl lg:text-9xl "> better reader</h1>
							<p className="max-w-xl mx-auto my-6 text-2xl text-[#969698]">
								Matter pulls everything you want to read into one beautiful place. With powerful tools, curation, seamless audio and
								more, we re building a reader for today s internet.
							</p>
							{/* <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
								<div className="mt-3 rounded-lg sm:mt-0">
									<button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-600 lg:px-10 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										Get bundle
									</button>
								</div>
								<div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
									<button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-indigo-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										See features
									</button>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<section id="intro">
					<div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
						<img
							className="object-cover object-center w-full rounded-xl"
							alt="hero"
							src="https://cdn.dribbble.com/users/1337379/screenshots/4149427/media/de22079977582581513254cef57f692c.png?resize=800x600&vertical=center"
						/>
					</div>
				</section>
			</div>
		</section>
	)
}
export default Homepage
