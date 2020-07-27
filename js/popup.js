/* Popup */
var termsHeading = 'Terms and Conditions';
var termsText = `
  <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repudiandae veritatis tenetur aliquam explicabo adipisci, minima voluptatibus repellendus molestias repellat?</p>
  <p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, excepturi ducimus quisquam veritatis consectetur at?</p>
  <p>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis libero, iusto distinctio et in quasi ut eaque laborum sunt, quidem veniam ipsam omnis ad, ab aspernatur repudiandae magni natus. Molestias odit iusto, dolore maiores obcaecati ipsum tempore sit non nam excepturi distinctio veritatis velit atque quos necessitatibus pariatur culpa voluptatem cumque voluptates dicta. Ut repellat, eaque. Voluptates est, hic numquam sint sapiente a commodi similique, sunt delectus aperiam quaerat qui at ad cupiditate dicta blanditiis nam ut esse. Inventore, in dolores atque quo dolorum, beatae temporibus! Non, deleniti architecto natus a, dolorum iusto dignissimos, vero nulla fugit adipisci et deserunt.</p>`;

function popupOpen(heading = '', message = '') {
  $('.popup-content').append('<h2>' + heading + '</h2>');
  $('.popup-content').append(message);
  $('.popup-fade').fadeIn();
}

function popupClose() {
  $('.popup-fade').fadeOut(400, function() {
    $('.popup-content').empty();
  });
}

$('.form__terms-popup').click(function(e) {
  popupOpen(termsHeading, termsText);
});

$('.popup-fade').click(function(e) {
  if ($(e.target).closest('.popup').length == 0) {
    popupClose();
  }
});