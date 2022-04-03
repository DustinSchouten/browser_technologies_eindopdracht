// document.forms[0].elements
// document.forms
// document.images
// document.links

function slaDataOpNaarLocalStorage() {
    const voornaam = document.querySelector('#voornaam').value; // We already checked if document.querySelector is supported at 'button_opslaan_data'
    const tussenvoegsel = document.querySelector('#tussenvoegsel').value;
    const achternaam = document.querySelector('#achternaam').value;
    const studentnummer = document.querySelector('#studentnummer').value;
    const vak = document.querySelector('#vak').value;
    const docenten = document.querySelector('#docenten').value;
    const eerste_week = document.querySelector('#eerste_week').value;
    const laatste_week = document.querySelector('#laatste_week').value;
    const beoordeling_vak = document.querySelector("input[name=beoordeling_vak]:checked").value;
    const moeilijkheid_lesstof = document.querySelector("input[name=moeilijkheid_lesstof]:checked").value;
    const moeilijkheid_lesstof_toelichting = document.querySelector('#moeilijkheid_lesstof_toelichting').value;
    const duidelijkheid_uitleg_vak = document.querySelector("input[name=duidelijkheid_uitleg_vak]:checked").value;
    const duidelijkheid_uitleg_vak_toelichting = document.querySelector('#duidelijkheid_uitleg_vak_toelichting').value;
    const eigen_inzicht = document.querySelector("input[name=eigen_inzicht]:checked").value;
    const eigen_inzicht_toelichting = document.querySelector("#eigen_inzicht_toelichting").value;

    if (typeof(window.localStorage) != 'undefined') { // Check if window.localStorage is supported
        localStorage.setItem('voornaam',voornaam);
        localStorage.setItem('tussenvoegsel',tussenvoegsel);
        localStorage.setItem('achternaam',achternaam);
        localStorage.setItem('studentnummer',studentnummer);
        localStorage.setItem('vak',vak);
        localStorage.setItem('docenten',docenten);
        localStorage.setItem('eerste_week',eerste_week);
        localStorage.setItem('laatste_week',laatste_week);
        localStorage.setItem('beoordeling_vak',beoordeling_vak);
        localStorage.setItem('moeilijkheid_lesstof',moeilijkheid_lesstof);
        localStorage.setItem('moeilijkheid_lesstof_toelichting',moeilijkheid_lesstof_toelichting);
        localStorage.setItem('duidelijkheid_uitleg_vak',duidelijkheid_uitleg_vak);
        localStorage.setItem('duidelijkheid_uitleg_vak_toelichting',duidelijkheid_uitleg_vak_toelichting);
        localStorage.setItem('eigen_inzicht',eigen_inzicht);
        localStorage.setItem('eigen_inzicht_toelichting',eigen_inzicht_toelichting);
    }
}

function haalDataOpVanLocalStorage() {
    document.querySelector('#voornaam').value = localStorage.getItem('voornaam');
    document.querySelector('#tussenvoegsel').value = localStorage.getItem('tussenvoegsel');
    document.querySelector('#achternaam').value = localStorage.getItem('achternaam');
    document.querySelector('#studentnummer').value = localStorage.getItem('studentnummer');
    document.querySelector('#vak').value = localStorage.getItem('vak');    
    document.querySelector('#docenten').value = localStorage.getItem('docenten');
    document.querySelector('#eerste_week').value = localStorage.getItem('eerste_week');
    document.querySelector('#laatste_week').value = localStorage.getItem('laatste_week');
    if (localStorage.getItem('beoordeling_vak') != null) { // Only executes if beoordeling_vak is already filled
        const beoordeling_vak_cijfer = parseInt(localStorage.getItem('beoordeling_vak'));
        document.querySelectorAll("input[name=beoordeling_vak]")[beoordeling_vak_cijfer-1].checked = true; // Indexes starts with zero so subtract 1 from beoordeling_vak_cijfer
    }
    if (localStorage.getItem('moeilijkheid_lesstof') != null) {
        const moeilijkheid_lesstof_cijfer = parseInt(localStorage.getItem('moeilijkheid_lesstof'));
        document.querySelectorAll("input[name=moeilijkheid_lesstof]")[moeilijkheid_lesstof_cijfer-1].checked = true;
    }
    document.querySelector('#moeilijkheid_lesstof_toelichting').value = localStorage.getItem('moeilijkheid_lesstof_toelichting');
    if (localStorage.getItem('duidelijkheid_uitleg_vak') != null) {
        const duidelijkheid_uitleg_vak_cijfer = parseInt(localStorage.getItem('duidelijkheid_uitleg_vak'));
        document.querySelectorAll("input[name=duidelijkheid_uitleg_vak]")[duidelijkheid_uitleg_vak_cijfer-1].checked = true;
    }
    document.querySelector('#duidelijkheid_uitleg_vak_toelichting').value = localStorage.getItem('duidelijkheid_uitleg_vak_toelichting');
    if (localStorage.getItem('eigen_inzicht') != null) {
        const eigen_inzicht_cijfer = parseInt(localStorage.getItem('eigen_inzicht'))
        document.querySelectorAll("input[name=eigen_inzicht]")[eigen_inzicht_cijfer-1].checked = true;    
    }
    document.querySelector('#eigen_inzicht_toelichting').value = localStorage.getItem('eigen_inzicht_toelichting');
}

window.onload = () => {
    if ((typeof(document.querySelector) != 'undefined') && (typeof(document.querySelectorAll) != 'undefined')) { // Check if both document.querySelector and document.querySelectorAll are supported
        const button_opslaan_data = document.querySelector('#section_opslaan_data');
        button_opslaan_data.removeAttribute("hidden")
        button_opslaan_data.addEventListener('click',slaDataOpNaarLocalStorage);
        haalDataOpVanLocalStorage()
    }
};
