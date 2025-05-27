<script>
    import { onMount } from 'svelte';

    let lessons = [];
    let subject = "";
    let level = "";

    // Fonction pour récupérer les données de l'API en fonction des filtres
    async function fetchLessons() {
        try {
            let url = 'http://localhost:80/api/lesson';

            // Ajout des paramètres de filtre à l'URL si nécessaires
            if (subject || level) {
                url += `?subject=${subject}&level=${level}`;
            }

            const response = await fetch(url);
            lessons = await response.json();
        } catch (error) {
            console.error('Erreur lors de la récupération des leçons:', error);
        }
    }

    // Utilisez onMount pour charger les données côté client uniquement
    onMount(() => {
        fetchLessons();
    });

    // Fonction pour gérer la soumission du formulaire de recherche
    function handleSearch(event) {
        event.preventDefault();
        fetchLessons();
    }
</script>

<!-- Section de recherche -->
<div class="flex flex-col min-h-screen">
    <section class="ml-5 rounded-b-full rounded-l-full bg-[#6b1f1b] bg-blend-multiply">
        <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                Chercher le <span class="border-b-8 border-[#ffdedc] italic">Cours</span> qui vous correspond
            </h1>
            <br />
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <form on:submit={handleSearch} class="mt-12 w-full">
                    <div class="relative flex flex-col gap-0 rounded-full border border-red-200 bg-white p-0 shadow-md md:flex-row md:items-center md:justify-between w-full">
                        <!-- Matière Dropdown -->
                        <select
                            name="subject"
                            bind:value={subject}
                            class="rounded-l-full border-none px-4 py-2 text-black focus:outline-none focus:ring-0 focus:border-[#6b1f1b] w-full md:w-1/2 bg-[#f8f8f8] hover:bg-[#f1f1f1]"
                        >
						<option disabled value="">Matière</option>
                        <option value="">Toutes les matières</option>
						<option value="Math">Math</option>
						<option value="Science">Sciences</option>
						<option value="Anglais">Anglais</option>
						<option value="Français">Français</option>
                        </select>

                        <!-- Difficulté Dropdown -->
                        <select
                            name="level"
                            bind:value={level}
                            class="rounded-r-full border-none px-4 py-2 text-black focus:outline-none focus:ring-0 focus:border-[#6b1f1b] w-full md:w-1/2 bg-[#f8f8f8] hover:bg-[#f1f1f1]"
                        >
						<option disabled value="">Niveau</option>
                        <option value="">Tous les niveaux</option>
						<option value="Primaire">Primaire</option>
						<option value="CO">CO</option>
						<option value="Collège">Collège</option>
						<option value="Universite">Université</option>
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

    <!-- Cartes des leçons -->
    <div class="flex flex-wrap justify-center gap-6 mt-20">
        {#each lessons as lesson}
            <div class="max-w-xs p-6 bg-[#ffeeeb] border border-[#6b1f1b] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold text-[#6b1f1b]">{lesson.title}</h5>
                </a>
                <p class="mb-3 text-gray-800 text-sm">{lesson.description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#6b1f1b] bg-[#ffe9e5] rounded-lg hover:bg-[#e7b7b4]">
                    S'inscrire
                    <svg class="rtl:rotate-180 w-5 h-5 ms-2 text-[#6b1f1b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6"/>
                    </svg>
                </a>
            </div>
        {/each}
    </div>
</div>
