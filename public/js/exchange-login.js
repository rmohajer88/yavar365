(function () {

    const form =
        document.getElementById("exchangeForm");

    const errorMessage =
        document.getElementById("errorMessage");

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            errorMessage.classList.add(
                "show"
            );

        }
    );

})();
