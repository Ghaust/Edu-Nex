<section class="ml-5 rounded-b-full rounded-l-full bg-[#6b1f1b] bg-blend-multiply">
	<div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
			<form action="" class="mt-12 w-full">
				<div
					class="relative flex flex-col gap-4 rounded-full border border-red-200 bg-white p-4 shadow-md md:flex-row md:items-center md:justify-end"
				>
					<select
						name="categorie"
						class="rounded-full border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#6b1f1b]"
					>
						<option value="">Matière</option>
						<option value="math">Mathématiques</option>
						<option value="science">Sciences</option>
						<option value="informatique">Informatique</option>
						<option value="langues">Langues</option>
					</select>

					<select
						name="difficulte"
						class="rounded-full border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#6b1f1b]"
					>
						<option value="">Difficulté</option>
						<option value="debutant">Débutant</option>
						<option value="intermediaire">Intermédiaire</option>
						<option value="avance">Avancé</option>
					</select>

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
