// JavaScript Distributore - Minimal & Moderno

let bevandaSelezionata = null;
let zuccheroSelezionato = 0;
let dimensioneCaffe = 'normale';
let isCoffee = false;

document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById('sugarModal');
    const coffeeSizeSection = document.getElementById('coffeeSize');
    
    // Selezione bevanda
    const bottoniSeleziona = document.querySelectorAll('.btn-select');
    bottoniSeleziona.forEach(function(bottone) {
        bottone.addEventListener('click', function() {
            const card = this.closest('.drink-card');
            bevandaSelezionata = card.querySelector('h4').textContent;
            
            // Controlla se è caffè (ha attributo data-type="coffee")
            isCoffee = card.hasAttribute('data-type');
            
            // Mostra il nome della bevanda
            document.getElementById('selectedDrink').textContent = bevandaSelezionata;
            
            // Mostra/nascondi sezione dimensione
            if (isCoffee) {
                coffeeSizeSection.style.display = 'block';
            } else {
                coffeeSizeSection.style.display = 'none';
            }
            
            // Reset selezioni
            resetSelections();
            
            // Apri modale
            modal.classList.add('show');
        });
    });
    
    // Selezione dimensione caffè
    const bottoniDimensione = document.querySelectorAll('.option-btn[data-size]');
    bottoniDimensione.forEach(function(bottone) {
        bottone.addEventListener('click', function() {
            bottoniDimensione.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            dimensioneCaffe = this.getAttribute('data-size');
        });
    });
    
    // Selezione zucchero
    const bottoniZucchero = document.querySelectorAll('.sugar-btn');
    bottoniZucchero.forEach(function(bottone) {
        bottone.addEventListener('click', function() {
            bottoniZucchero.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            zuccheroSelezionato = this.getAttribute('data-sugar');
        });
    });
    
    // Bottone X per chiudere
    document.getElementById('closeModal').addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    // Bottone Annulla
    document.querySelector('.btn-modal-cancel').addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    // Bottone Conferma
    document.querySelector('.btn-modal-confirm').addEventListener('click', function() {
        let messaggio = 'Preparazione in corso!\n\nBevanda: ' + bevandaSelezionata;
        
        if (isCoffee) {
            messaggio += '\nDimensione: ' + dimensioneCaffe;
        }
        
        messaggio += '\nZucchero: ' + zuccheroSelezionato;
        
        alert(messaggio);
        modal.classList.remove('show');
    });
    
    // Chiudi cliccando fuori
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Funzione per resettare le selezioni
    function resetSelections() {
        // Reset zucchero a 0
        bottoniZucchero.forEach(function(btn) {
            btn.classList.remove('active');
        });
        document.querySelector('.sugar-btn[data-sugar="0"]').classList.add('active');
        zuccheroSelezionato = 0;
        
        // Reset dimensione caffè a normale
        bottoniDimensione.forEach(function(btn) {
            btn.classList.remove('active');
        });
        document.querySelector('.option-btn[data-size="normale"]').classList.add('active');
        dimensioneCaffe = 'normale';
    }
});