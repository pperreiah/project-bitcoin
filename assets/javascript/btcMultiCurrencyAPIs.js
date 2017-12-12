//JS Code for Multicurrency API calls on BTC pricing and price conversion

$(document).ready(function() {

    var bpiresults = {};
    var resultsPriceStrg = "";


    // NEED TO INSERT ID.VALUE STMTS FOR ALL THESE TO REMOVE JS FROM HTML FILE
        // <option id="selectCurrency "value="Select_Currency">Select Currency</option>
        // <option id="USDprice" value="USD">BTC in US Dollar</option>
        // <option id="EURprice" value="EUR">BTC in Euro</option>
        // <option id="GBPprice" value="GBP">BTC in British Pound</option>
        // <option id="CADprice" value="CAD">BTC in Canadian Dollar</option>
        // <option id="MXNprice" value="MXN">BTC in Mexican Peso</option>
        // <option id="JPYprice" value="JPY">BTC in Japanese Yen</option>
        // <option id="CNYprice" value="CNY">BTC in Chinese Yuan Renminbi</option>
        // <option id="INRprice" value="INR">BTC in Indian Rupee</option>
        // <option id="CHFprice" value="CHF">BTC in Swiss Franc</option>
        // <option id="BRLprice" value="BRL">BTC in Brazilian Real</option>
        // <option id="KRWprice" value="KRW">BTC in South Korean Won</option>
        // <option id="HKDprice" value="HKD">BTC in Hong Kong Dollar</option>
        // <option id="SGDprice" value="SGD">BTC in Singapore Dollar</option>
        // <option id="AUDprice" value="AUD">BTC in Australian Dollar</option>
        // <option id="NZDprice" value="NZD">BTC in New Zealand Dollar</option>
        // <option id="ILSprice" value="ILS">BTC in Israeli Shekel</option>
        // <option id="MYRprice" value="MYR">BTC in Malaysian Ringgit</option>
        // <option id="ARSprice" value="ARS">BTC in Argentinian Peso</option>
        // <option id="CLPprice" value="CLP">BTC in Chilean Peso</option>

        // <input type="button" value="Convert a select currency price to BTC" id="convert-price"> 


    // run the first price update on document ready; all subsequent calls will be done on the selection of a new currency and every 10 seconds 
    refreshBtcPrice();

    $("#currency-choices").on("change", refreshBtcPrice);

    function refreshBtcPrice() {

        // Constructing a queryURL using the currency ISO4217 symbol
        isoSymbol = document.getElementById("currency-choices").value;
        var queryURL = "https://api.coindesk.com/v1/bpi/currentprice/" + isoSymbol + ".json"; //(multi-currency JSON)  

        //Renaming price converter button label                
        var convertButtonLabel = "Convert a " + isoSymbol + " price to BTC";
        document.getElementById("convert-price").value = convertButtonLabel;

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done( function( btcPriceJSON ) {
            // storing the data from the AJAX request in the results variable
            bpiresults = JSON.parse(btcPriceJSON);
            resultsPriceStrg = bpiresults.bpi[isoSymbol].rate_float;

            //Based on currency selected convert outPut price
            switch (isoSymbol) {
                case "Select_Currency":
                    outputPrice = "Bitcoin Value"
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
                case "NZD":
                    outputPrice = accounting.formatMoney(resultsPriceStrg, "  NZD$ ", 2)
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

        // // Constructing a queryURL using the currency ISO4217 symbol
        // isoSymbol = document.getElementById("currency-choices").value;
        // // var queryURL = "https://api.coindesk.com/v1/bpi/currentprice.json";  (3-currency json)
        // var queryURL = "https://api.coindesk.com/v1/bpi/currentprice/" + isoSymbol + ".json"; //(multi-currency JSON)  


        // // Performing an AJAX request with the queryURL
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).done(function(btcPriceJSON) {

        //     // storing the data from the AJAX request in the results variable
        //     var results = JSON.parse(btcPriceJSON);
        //     var resultsPriceStrg = results.bpi[isoSymbol].rate_float;

            //Check that price input is a valid number
            if (isNaN(inputPrice) ) {
                $("#price-input").text("Enter valid price");
            } else {

                //Based on currency selected convert outPut price
                switch (isoSymbol) {
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
                    case "NZD":
                        outputPrice = accounting.formatMoney(parseFloat(inputPrice) / resultsPriceStrg, "BTC ", 10);
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
                    $("#convertedPricePost").text("Price in BTC");
                } else {
                    $("#convertedPricePost").text(convertedPrice);
                };  //if
            }; //if (input isNAN) else switch
        // }); //done function
    }; // function convertPrice(event)
}); //document ready
//</script>