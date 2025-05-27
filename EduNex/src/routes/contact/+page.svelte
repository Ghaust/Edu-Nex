<script>
    import titre from '../../lib/support_titre.png';
</script>
<div class="flex flex-col min-h-screen">
<section class="bg-[#ffe9e5] py-12">
    <div class="mx-auto max-w-screen-xl px-4 text-center">
        <!-- Titre de la page avec image -->
        <h1 class="text-4xl font-extrabold text-[#6b1f1b] mb-8">
            <img src="{titre}" class="mx-auto w-80" alt="Support Titre">
        </h1>
        <!-- Informations de contact -->
        <div class="mb-12 space-y-4 text-lg">
            <p class="text-[#6b1f1b]">Si vous avez besoin d'aide, n'hésitez pas à nous contacter !</p>
            <p>Email : <a href="mailto:contact@eptm.ch" class="text-[#cb4141] hover:underline">contact@eptm.ch</a></p>
            <p>Téléphone : <a href="tel:+0276064530" class="text-[#cb4141] hover:underline">027 552 10 52</a></p>
            <p>Adresse : Chemin Saint-Hubert 2, 1950 Sion</p>
        </div>

        <!-- Formulaire de contact -->
        <div class="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-[#6b1f1b] mb-4">Envoyer un message</h2>
            <form action="#" method="POST" class="space-y-4">
                <!-- Nom -->
                <div>
                    <label for="name" class="block text-left text-[#6b1f1b] font-medium">Nom</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b1f1b]" required>
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-left text-[#6b1f1b] font-medium">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b1f1b]" required>
                </div>

                <!-- Sujet -->
                <div>
                    <label for="subject" class="block text-left text-[#6b1f1b] font-medium">Sujet</label>
                    <input type="text" id="subject" name="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b1f1b]" required>
                </div>

                <!-- Message -->
                <div>
                    <label for="message" class="block text-left text-[#6b1f1b] font-medium">Message</label>
                    <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b1f1b]" required></textarea>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full py-3 bg-[#6b1f1b] text-white rounded-lg hover:bg-[#cb4141] transition-all focus:outline-none">
                    Envoyer
                </button>
            </form>
        </div>
    </div>
</section>
</div>
