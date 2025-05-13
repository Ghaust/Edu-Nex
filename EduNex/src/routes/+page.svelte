<section class="ml-5 rounded-b-full rounded-l-full bg-[#6b1f1b] bg-blend-multiply">
	<div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
		<h1
			class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
		>
			Chercher le <span class="border-b-8 border-[#ffdedc] italic">Cours</span> qui vous correspond
		</h1>
		<br />
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
			<form action="" class="mt-12 w-full">
				<div
					class="relative flex flex-col gap-0 rounded-full border border-red-200 bg-white p-0 shadow-md md:flex-row md:items-center md:justify-between w-full"
				>
					<!-- Matière Dropdown -->
					<select
						name="categorie"
						class="rounded-l-full border-none px-4 py-2 text-black focus:outline-none focus:ring-0 focus:border-[#6b1f1b] w-full md:w-1/2 bg-[#f8f8f8] hover:bg-[#f1f1f1]"
					>
						<option value="">Matière</option>
						<option value="math">Mathématiques</option>
						<option value="science">Sciences</option>
						<option value="informatique">Informatique</option>
						<option value="langues">Langues</option>
					</select>

					<!-- Difficulté Dropdown -->
					<select
						name="difficulte"
						class="rounded-r-full border-none px-4 py-2 text-black focus:outline-none focus:ring-0 focus:border-[#6b1f1b] w-full md:w-1/2 bg-[#f8f8f8] hover:bg-[#f1f1f1]"
					>
						<option value="">Niveau</option>
						<option value="debutant">Débutant</option>
						<option value="intermediaire">Intermédiaire</option>
						<option value="avance">Avancé</option>
					</select>

					<!-- Submit Button -->
					<button
						type="submit"
						title="Search"
						class="rounded-full bg-[#ffdedc] px-6 py-3 text-center font-medium text-black hover:bg-red-300 focus:bg-[#6b1f1b] focus:text-white md:px-12"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
