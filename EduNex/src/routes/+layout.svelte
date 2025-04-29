<script>
	// @ts-ignore
	import logo from '../lib/logo_final.png';
</script>

<nav class="bg-[#ffe9e5] border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
	<a class="flex items-center space-x-3 rtl:space-x-reverse">
		<img src={logo} class="h-11" alt="Logo" />
	</a>
	<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
		
		<button type="button" class="text-white shadow-lg shadow-[#cb4141]-800/80  bg-[#6b1f1b] hover:bg-[#6b1f1b] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#cb4141] dark:hover:bg-[#c93030]">Contact</button>
	</div>
  </nav>

<slot />

	<footer class="bg-[#ffe9e5]">    
        <div class="flex flex-col mx-3 bg-[#ffe9e5] rounded-lg">
           <div class="w-full draggable">
    <div class="container flex flex-col mx-auto">
      <div class="flex flex-col items-center w-full my-20">
		<span class="mb-8">
			<img src={logo} class="h-10" alt="Logo" />
		</span>
        <div class="flex flex-col items-center gap-6 mb-2">
          <div class="flex flex-wrap items-center justify-center font-medium gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap">
            <a  class="text-black hover:text-gray-900">About</a>
            <a  class="text-black hover:text-gray-900">Features</a>
            <a  class="text-black hover:text-gray-900">Blog</a>
            <a  class="text-black hover:text-gray-900">Resources</a>
            <a  class="text-black hover:text-gray-900">Partners</a>
            <a class="text-black hover:text-gray-900">Help</a>
            <a  class="text-black hover:text-gray-900">Terms</a>
          </div>
          <div class="flex items-center gap-3">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>