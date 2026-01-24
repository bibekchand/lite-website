export default function Links({ url }) {
	return (
		<>
			<div className="h-fit border-2 rounded-2xl w-fit p-2 relative text-center m-auto hover:text-2xl hover:bg-amber-50 hover:text-black duration-300 ease-in">
				<a href={url} target="_blank">Location -&gt;</a>
			</div>
		</>
	);
}
