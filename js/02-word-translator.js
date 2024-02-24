// Get language selection
let strLanguage = prompt('Please select a language ("es", "de", "en", and "fr"): ').toLowerCase()

// Transllate based on language selected
switch (strLanguage) {
    case 'es':
        // "Hello World" translated in Spanish
        console.log('Hello World translated in Spanish is: Hola Mundo.')
        break
    case 'de':
        // "Hello World" translated in German
        console.log('Hello World translated in German is: Hallo Welt.')
        break
    case 'fr':
        // "Hello World" translated in French
        console.log('Hello World translated in French is: Bonjour le monde.')
        break
    default: 
        // "Hello World" translated in English
        console.log('Hello World translated in English is: Hello World.')
}