const url = "https://irsycvwaapqcapcnbgra.supabase.co/rest/v1/vildereMadCsv";

fetch(url, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3ljdndhYXBxY2FwY25iZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzU5NjQsImV4cCI6MjAyMzA1MTk2NH0.rP1hLkHs5DYGMkNsIqcf_M5SjqcFRPjl45dEWrO6pW4",
  },
})
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //We have the data
  console.log("Her kommer data: ", data);
  //ca her ku man indsætte for each
  //forEach
  data.forEach(skalKoeresForHverRaekke);
}

function skalKoeresForHverRaekke(enRaekke) {
  console.log("Her kommer hver række: ", enRaekke);

  //herinde cloner vi
}
