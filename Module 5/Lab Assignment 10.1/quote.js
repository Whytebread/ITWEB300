$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()

   const endPoint = "https://wp.zybooks.com/quotes.php";
   const requestData = { "topic": topic, "count": count};

   $.get(endPoint, requestData, function(data) {
      if (data.error) {
         $("#quotes").html(data.error)
      } else {
         let html = "<ol>";
         for (let quoteItem of data) {
            html += `<li>${quoteItem.quote} - ${quoteItem.source}</li>`;
         }
         html += "</ol>";
         $("#quotes").html(html);

      }

   }, "json").fail(function(jqXHR) {
      $("#quotes").html(`Problem contacting the server: ${jqXHR.status} ${jqXHR.responseText}`)
   });
}
