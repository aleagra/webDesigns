const Footer: React.FC = () => {
	return (
		<footer className="w-full h-[500px] bg-black text-white">
			<div className="flex flex-col h-full pt-10 text-center justify-center items-center">
				<h1 className="text-7xl font-semibold mb-6">Join Our Wailist</h1>
				<h3 className="text-base text-[#7b7b7c] font-semibold">By signing up, you agree to receive awesome emails and updates.</h3>
				<div className="mt-8 flex max-w-md gap-x-4">
					<label htmlFor="email-address" className="sr-only">
						Email address
					</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autoComplete="off"
						required
						className="min-w-0 flex-auto rounded-lg border-2 border-[#7b7b7c] bg-transparent px-16 py-2 text-white shadow-sm  sm:text-sm sm:leading-6 placeholder:text-[#7b7b7c]  focus:border-indigo-600 outline-none transition-colors duration-500   placeholder:text-base"
						placeholder="Your mail address"
					/>
					<button
						type="submit"
						className="flex-none rounded-full bg-indigo-600 px-5 py-2 text-sm  text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>
						Get Access
					</button>
				</div>
				<div className="w-full flex justify-evenly text-slate-600 mt-20">
					<p className="text-base font-semibold text-[#7b7b7c] hover:text-white transition-colors duration-500 cursor-pointer">
						hi@create.video
					</p>
					<p className="text-base font-semibold text-[#7b7b7c] hover:text-white transition-colors duration-500 cursor-pointer">a</p>
					<p className="text-base font-semibold text-[#7b7b7c] hover:text-white transition-colors duration-500 cursor-pointer">
						hi@create.video
					</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
