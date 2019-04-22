window.addEventListener("load", event => {
  const extraCity = document.getElementById("extra-information-city");
  const selectCity = document.getElementById("select-information-city");

  selectCity.addEventListener("change", function(e) {
    let currentSelect = this[this.selectedIndex].value;

    extraCity.innerHTML = `Hier komt extra informatie ove rhet land`;
  });
});
