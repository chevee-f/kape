var typeCollection = [
  "Weapons",
  "Off-hand",
  "Armors",
  "Garments",
  "Footgears",
  "Accessory",
  "Blueprint",
  "Potion / Effect",
  "Refine",
  "Scroll / Album",
  "Material",
  "Holiday material",
  "Pet material",
  "Premium",
  "Costume",
  "Head",
  "Face",
  "Back",
  "Mouth",
  "Tail",
  "Weapon card",
  "Off-hand card",
  "Armor card",
  "Garments card",
  "Shoe card",
  "Accessory card",
  "Headwear card",
];

$(".dropdown-item-type").html("<option value='0'> -- All --</option>");
$.each(typeCollection, function(index) {
  $(".dropdown-item-type").append(`<option value="` + (index + 1) +`">` + typeCollection[index] + `</option>`);
});

window.$(".btn-submit").on("click", function() {
  $.ajax({
    url: "https://www.romexchange.com/api?item=" + $(".txt-search").val() + "&exact=false&slim=true&type=" + $(".dropdown-item-type").val(),
    success: function(result) {
      console.log(result);
      $(".search-result-container tbody").html("");
      $.each(result, function(index) {
        console.log(result[index].name);
        $(".search-result-container tbody").append(`
          <tr>
            <td>` + result[index].name + `</td>
            <td>` + typeCollection[result[index].type - 1] + `</td>
            <td>` + digits(result[index].sea.latest) + ` z</td>
          </tr>
        `);
      });
    }
  });
});

function digits(num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
