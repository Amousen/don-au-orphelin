// script.js
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupérer le montant entré par l'utilisateur
    const amount = document.getElementById('amount').value;

    if (amount <= 0) {
        alert("Le montant doit être supérieur à zéro.");
        return;
    }

    // Initialisation de FedaPay avec ta clé API publique
    FedaPay.init({
        apiKey: 'TA_CLÉ_API',  // Remplace par ta clé API FedaPay
        currency: 'XOF',       // Devise (par exemple, XOF pour CFA)
        amount: amount
    });

    // Créer une transaction de paiement
    FedaPay.createPayment({
        amount: amount,  // Montant de la transaction
        currency: 'XOF', // Devise
        // D'autres paramètres peuvent être ajoutés selon les besoins
    })
    .then(response => {
        if (response.status === 'success') {
            // Rediriger l'utilisateur vers la page de paiement
            window.location.href = response.paymentUrl;  // URL de la page de paiement FedaPay
        } else {
            alert("Erreur dans la création du paiement. Réessayez.");
        }
    })
    .catch(error => {
        console.error("Erreur de paiement:", error);
        alert("Une erreur est survenue lors du paiement.");
    });
});
