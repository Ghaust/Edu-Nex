<script lang="ts">
	import '../app.css';
	import logo from '../lib/logo_final.png';

	let { children } = $props();
</script>

<nav class="border-gray-200 bg-[#ffe9e5] dark:bg-gray-900">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src={logo} class="h-11" alt="Logo" />
		</a>
		<div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
			<button
				type="button"
				class="shadow-[#cb4141]-800/80 rounded-lg bg-[#6b1f1b] px-4 py-2 text-center text-sm font-medium text-white shadow-lg hover:bg-[#6b1f1b] dark:bg-[#cb4141] dark:hover:bg-[#c93030]"
				>Contact</button
			>
		</div>
	</div>
</nav>

{@render children()}

<footer class="bg-[#ffe9e5]">
	<div class="mx-3 flex flex-col rounded-lg bg-[#ffe9e5]">
		<div class="draggable w-full">
			<div class="container mx-auto flex flex-col">
				<div class="my-20 flex w-full flex-col items-center">
					<span class="mb-8">
						<img src={logo} class="h-10" alt="Logo" />
					</span>
					<div class="mb-2 flex flex-col items-center gap-6">
						<div
							class="flex flex-wrap items-center justify-center gap-5 gap-y-3 font-medium lg:flex-nowrap lg:gap-12"
						>
							<a class="text-black hover:text-gray-900">About</a>
							<a class="text-black hover:text-gray-900">Features</a>
							<a class="text-black hover:text-gray-900">Blog</a>
							<a class="text-black hover:text-gray-900">Resources</a>
							<a class="text-black hover:text-gray-900">Partners</a>
							<a class="text-black hover:text-gray-900">Help</a>
							<a class="text-black hover:text-gray-900">Terms</a>
						</div>
						<div class="flex items-center gap-3"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
