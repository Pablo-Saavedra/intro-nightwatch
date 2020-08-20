module.exports = {
    '@tags': ['google'],
    'Google advance search: Elon Musk' (browser) {

        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelctor = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';


        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelctor)
            .click(lastUpdateDropdownValueSelector)
            .saveScreenshot('tests_output/google.png');
    }
}