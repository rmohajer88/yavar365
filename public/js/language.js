(function () {
    const languageSelect =
        document.getElementById("languageSelect");

    let savedLanguage =
        localStorage.getItem("language");

    if (!savedLanguage) {
        const browserLanguage =
            navigator.language.toLowerCase();

        if (browserLanguage.startsWith("fa")) {
            savedLanguage = "farsi";
        } else if (browserLanguage.startsWith("tr")) {
            savedLanguage = "turkish";
        } else if (browserLanguage.startsWith("ar")) {
            savedLanguage = "arabic-iq";
        } else if (browserLanguage.startsWith("ur")) {
            savedLanguage = "urdu";
        } else {
            savedLanguage = "english";
        }

        localStorage.setItem(
            "language",
            savedLanguage
        );
    }

    languageSelect.value = savedLanguage;

    languageSelect.addEventListener(
        "change",
        function (event) {
            localStorage.setItem(
                "language",
                event.target.value
            );
        }
    );
})();
