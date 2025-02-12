// Définition de l'URL de base de l'API Pixela
const API_URL = "https://pixe.la/v1/users";

// Lorsque la page est chargée, vérifie si l'utilisateur est déjà connecté
$(document).ready(function () {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if (username && token) {
        $("#auth-section").hide(); // Cache la section d'authentification
        $("#dashboard").show(); // Affiche le tableau de bord
        loadGraphs(); // Charge les graphes existants
    }
});

// Gestion du formulaire de connexion
$("#auth-form").on("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    const username = $("#username").val();
    const token = $("#token").val();

    if (!username || !token) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Stockage des informations dans le localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);

    $("#auth-section").hide();
    $("#dashboard").show();
    loadGraphs(); // Charge les graphes après connexion
});

// Gestion du bouton d'inscription
$("#register").on("click", function () {
    const username = $("#username").val();
    const token = $("#token").val();

    if (!username || !token) {
        alert("Veuillez remplir tous les champs pour créer un compte.");
        return;
    }

    // Requête AJAX pour créer un compte Pixela
    $.ajax({
        type: "POST",
        url: `${API_URL}`,
        contentType: "application/json",
        data: JSON.stringify({
            token: token,
            username: username,
            agreeTermsOfService: "yes",
            notMinor: "yes"
        }),
        success: function () {
            alert("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
        },
        error: function (xhr) {
            alert("Erreur lors de l'inscription : " + xhr.responseText);
        }
    });
});

// Gestion de la déconnexion
$("#logout").on("click", function () {
    localStorage.removeItem("username"); // Suppression des infos utilisateur
    localStorage.removeItem("token");
    location.reload(); // Recharge la page pour revenir à l'état initial
});

// Fonction pour charger et afficher les graphes de l'utilisateur
function loadGraphs() {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    $.ajax({
        url: `https://pixe.la/v1/users/${username}/graphs`, // URL de récupération des graphes
        method: "GET",
        headers: { "X-USER-TOKEN": token },
        success: function (response) {
            let graphsHtml = "";
            if (response.graphs && response.graphs.length > 0) {
                response.graphs.forEach(function (graph) {
                    graphsHtml += `
                        <div class="graph-item border p-2 my-2">
                            <strong>ID :</strong> ${graph.id}<br>
                            <strong>Nom :</strong> ${graph.name}<br>
                            <strong>Unité :</strong> ${graph.unit}<br>
                            <strong>Type :</strong> ${graph.type}<br>
                            <strong>Couleur :</strong> ${graph.color}<br>
                            <img class="graph-svg img-fluid mt-2" src="https://pixe.la/v1/users/${username}/graphs/${graph.id}" alt="Graph ${graph.id}">
                        </div>
                    `;
                });
            } else {
                graphsHtml = "<p>Aucun graphe trouvé.</p>";
            }
            $("#graphs-list").html(graphsHtml);
        },
        error: function () {
            alert("Erreur lors du chargement des graphes.");
        }
    });
}

// Gestion du formulaire de création de graphe
$("#create-graph-form").on("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    const graphId = $("#graph-id").val();
    const graphName = $("#graph-name").val();

    // Requête AJAX pour créer un nouveau graphe
    $.ajax({
        type: "POST",
        url: `${API_URL}/${username}/graphs`,
        headers: { "X-USER-TOKEN": token },
        contentType: "application/json",
        data: JSON.stringify({
            id: graphId,
            name: graphName,
            unit: "commit",
            type: "int",
            color: "shibafu"
        }),
        success: function () {
            alert("Graphe créé !");
            loadGraphs(); // Recharge la liste des graphes après ajout
        },
        error: function () {
            alert("Erreur lors de la création du graphe.");
        }
    });
});
