import { getSettingsFromLocalStorage } from './utils.js';

const wordArray = [
    // Palabras con errores comunes de escritura (solo la forma correcta)
    "haber", "hecho", "hay", "ahí", "ay", "vaya", "haya", "abrazar", "errar",
    "tuvo", "bienes", "vienes", "vez", "echo", "iba", "húmedo", "horrible",
    
    // Palabras con tilde que suelen omitirse (reemplazadas)
    "árbol", "césped", "lápiz", "música", "público", "rápido", "técnico",
    "último", "índice", "cálculo", "práctico", "crítico", "lógico", "médico",
    "físico", "ético", "típico", "mágico", "trágico",
    
    // Verbos con conjugaciones difíciles
    "hubiera", "hubiese", "tuviéramos", "tuviese", "fuéramos", "fuesen",
    "hiciera", "hiciesen", "pudiera", "pudiese", "quisiera", "quisiese",
    
    // Palabras con doble letra poco comunes
    "irracional", "innecesario", "subterráneo", "excepcional", "carruaje",
    "terrícola", "barricada", "corroborar", "erradicar", "terracota",
    
    // Palabras con "h" poco comunes
    "hálito", "hastío", "hervor", "hórrido", "huraño", "heraldo", "hendidura",
    "hacinamiento", "híbrido", "hidrógeno",
    
    // Palabras largas (máximo 5)
    "electroencefalografía", "otorrinolaringólogo", "desoxirribonucleico",
    "esternocleidomastoideo", "paralelepípedo",
    
    // Otras palabras para completar 100
    "arquitecto", "burocracia", "cautiverio", "desenlace", "efervescente",
    "fragmento", "genuino", "impermeable", "jurisdicción", "kilómetro",
    "luminiscencia", "magnético", "nebulosa", "orfandad", "pantomima",
    "quimera", "resplandor", "simbiosis", "tregua", "ultravioleta",
    "vulnerable", "xenofobia", "yacimiento", "zigzag", "abominable",
    "bifurcación", "conspiración", "desmesurado", "efímero", "fisionomía",
    "gárgola", "hipérbole", "incandescente", "jerarquía", "laberinto",
    "meticuloso", "nostalgia", "oscilación", "paradoja", "quimérico",
    "reminiscencia", "sinfonía", "transgresión", "utopía", "volátil"
];





export const getWordsArrayBySettingsOrPlatform = () => {
    const gameSettings = getSettingsFromLocalStorage();
    
    // Verifica si es Windows y si los acentos están habilitados
    if (navigator.userAgent.includes('Win') && gameSettings?.['enable-accents']) {
        return wordArray;
    }
    return removeAccentsFromWordsArray();
};

const removeAccentsFromWordsArray = () => {
    return wordArray.filter(word => !hasAccent(word));
};

const hasAccent = (word) => {
    const specialChars = /[áéíóúÁÉÍÓÚ]/;
    return specialChars.test(word);
};
