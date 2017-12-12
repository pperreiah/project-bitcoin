//JS Code for Multicurrency API calls on BTC pricing and price conversion

$(document).ready(function() {

    var bpiresults = {};
    var resultsPriceStrg = "";

    // run the first price update on document ready; all subsequent calls will be done on the selection of a new currency and every 10 seconds 
    refreshBtcPrice();
    $("#convertedPricePost").text("<== Please enter valid price");
    $("#currency-choices").on("change", refreshBtcPrice);

    function refreshBtcPrice() {

        // Constructing a queryURL using the currency ISO4217 symbol
        isoSymbol = document.getElementById("currency-choices").value;
        var queryURL = "https://api.coindesk.com/v1/bpi/currentprice/" + isoSymbol + ".json"; //(multi-currency JSON)  

        //Renaming price converter button label                
        convertButtonLabel = "Convert a " + isoSymbol + " price to BTC";
        document.getElementById("convert-price").value = convertButtonLabel;

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(btcPriceJSON) {
            // storing the data from the AJAX request in the results variable
            bpiresults = JSON.parse(btcPriceJSON);
            resultsPriceStrg = bpiresults.bpi[isoSymbol].rate_float;

            //Based on currency selected convert outPut price
            switch (isoSymbol) {
                case "select currency":
                    outputPrice = "<== Please select a currency"
                    document.getElementById("display-price").value = "<== Please select a currency";
                    document.getElementById("convert-price").value = "<== Please select a currency";
                    break;
                case "USD":
                    outputPrice = accounting.formatMoney(resultsPriceStrg)
                    break;
                case "GBP":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, " £ ", 2)
                    break;
                case "EUR":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, " € ", 2, ".", ",");
                    break;
                case "CAD":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  CAD$ ", 2)
                    break;
                case "MXN":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  MXN$ ", 2)
                    break;
                case "JPY":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  ¥ ", 2)
                    break;
                case "CNY":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  ¥ ", 2)
                    break;
                case "INR":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  INR ", 2)
                    break;
                case "CHF":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  CHF ", 2)
                    break;
                case "BRL":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  R$ ", 2)
                    break;
                case "KRW":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  ₩ ", 2)
                    break;
                case "HKD":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  HKD$ ", 2)
                    break;
                case "SGD":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  SGD$ ", 2)
                    break;
                case "AUD":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  AUD$ ", 2)
                    break;
                case "ILS":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "   ₪ ", 2)
                    break;
                case "MYR":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  RM ", 2)
                    break;
                case "ARS":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  ARS$ ", 2)
                    break;
                case "CLP":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  CLP$ ", 2)
                    break;
            } //switch
            //Posting refreshed BTC price
            $("#price-display").text(outputPrice);
            //Refresh converted price
            convertPrice(event);
        }); //done function()
    }; //function refreshBtcPrice()

    //refreshBtcPrice function
    setInterval(refreshBtcPrice, 30000);

    // Event handler for user clicking the submit reaction button
    $("#convert-price").on("click", convertPrice);


    function convertPrice(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the reaction name
        var inputPrice = $("#price-input").val().trim();
        var convertedPrice = 0;

        //Check that price input is a valid number
        if (isNaN(inputPrice)) {
            $("#convertedPricePost").text("<== Please enter a valid price");
        } else {

            //Based on currency selected convert outPut price
            switch (isoSymbol) {
                case "select currency":
                    convertedPrice = "<== Please select a currency"
                    break;
                case "USD":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10)
                    break;
                case "GBP":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10)
                    break;
                case "EUR":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10, ".", ",");
                    break;
                case "CAD":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "MXN":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "JPY":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC", 10);
                    break;
                case "CNY":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "INR":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "CHF":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "BRL":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "KRW":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "HKD":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "SGD":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "AUD":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "ILS":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "MYR":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "ARS":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
                    break;
                case "CLP":
                    convertedPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
            }; //switch

            //Display converted price
            if (inputPrice === "") {
                $("#convertedPricePost").text("<== Please enter a price");
            } else {
                $("#convertedPricePost").text(convertedPrice);
            }; //if
        }; //if (input isNAN) else switch
        // }); //done function
    }; // function convertPrice(event)
}); //document ready