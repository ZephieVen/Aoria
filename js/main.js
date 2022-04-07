const myCharacters = {
  zephie:{
    name: "Zephie",
    fullName: "Zephie Yuumo Xarius Venturesome",
  }
};
let page = {
  name: undefined,
};

// console.log(myVar)
function printHead(){
  $("#page-head").append(`<title>${page.name} -&#x2726;- Aoria Wiki</title>`);
  $("#favicon").attr("href","../images/favicon.svg");
}
function printPage(type){
  page = myCharacters[type];
  printHead();
  return;
  $("body").empty();
  $("body").append("<main></main>");

  $("main").append(
    `<header>
      <div class="header-title">
        <a href="../../index.html"><img src="../../Pictures/Title.png" alt="Venturesome title picture"></a>
      </div>
      <div class="header-top-container">
        <h2>Project Venturesome</h2>
      </div>
      <nav>
        <ul>
          <a href="../../Universe.html"><li>Universe</li></a>
          <a href="../../Universe/Characters/0Blank.html"><li>Blank</li></a>
          <a href="#"><li>Other</li></a>
          <a href="#"><li>Other</li></a>
        </ul>
      </nav>
    </header>`
  );

}
function printCharacterTemplate(){
  $("main").append(
    `<aside class="wikia-rail">
      <div>
        <h2>_</h2>
        <h3>_</h3>
        <h3>_</h3>
        <h3>_</h3>
        <h3>_</h3>
        <h3>_</h3>
      </div>
      <div>
        <h2>_</h2>
        <h3>_</h3>
        <h3>_</h3>
        <h3>_</h3>
        <h3>_</h3>
        <h3>_</h3>
      </div>
    </aside>`
  );
  $("main").append(
    `<aside class="infobox">
      <h2 id="info-header">_name_</h2>
      <div class="infobox-tabs">
        <h3>_</h3>
        <h3>_</h3>
      </div>
      <img src="../../Pictures/Infobox0Blank.png" alt="_name_ infobox picture" width="300" height="420">

      <section class="infobox-General">
        <h2>General Info</h2>
        <div class="infobox-item">
          <h3>Full name:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Birth date:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Birth place:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Race:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Gender:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Sexuality:</h3>
          <h4>_</h4>
        </div>
      </section>
      <section class="infobox-physical-description">
        <h2>Physical description</h2>
        <div class="infobox-item">
          <h3>Hair color:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Eye color:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Skin color:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>*Age:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>*Height:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>*Weight:</h3>
          <h4>_</h4>
        </div>
        <div class="infobox-item">
          <h3>Adult height:</h3>
          <h4>_</h4>
        </div>
        <h6>*At 1814AO</h6>
      </section>
      <section class="infobox-Relationships">
        <h2>Relationships</h2>
        <div class="infobox-item">
          <h3>Mother:</h3>
          <a href="#"><h4>_</h4></a>
        </div>
        <div class="infobox-item">
          <h3>Father:</h3>
          <a href="#"><h4>_</h4></a>
        </div>
      </section>
    </aside>`
  );
  $("main").append(
    `<section class="maintext">
      <h2>Description</h2><hr>
      <p>
        _
      </p>
    </section>`
  );
  $("main").append(
    `<footer class="main-footer maintext">
      <h2>Image gallery</h2><hr>
      <img src="../../Pictures/Texture3.png">
    </footer>`
  )
}
function printCharacter(char){
  $("#info-header").text(char.name);
}


window.onload = function(){
  // printPage();

}
