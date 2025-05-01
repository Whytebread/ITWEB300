window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
});

// TODO: Modify to use Fetch API
function fetchQuotes(topic, count) {

   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   fetch(url)
      .then(response => {
         if (response.ok) {
            return response.json();
         } else {
            throw new Error('Network response was not ok');
         }
      })

      .then(data => {
         if (data.error) {
            quotesDiv.innerHTML = data.error;
         } else {
            let html = "<ol>";
            for (let item of data) {
               html += `<li>${item.quote} - ${item.source}</li>`;
            }
            html += "</ol>";

            document.querySelector("#quotes").innerHTML = html;
         }
      })

      .catch(error => {
         console.error('There was a problem with the fetch operation:', error);
         document.querySelector("#quotes").innerHTML = `Topic '${topic}' not found`;
      });
}