// gsap.registerPlugin(SplitText);
var startTime;
var tl;
// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  setRollover();
  animate();
}

// Split by words and chars
const split = new SplitText("#text1", { type: "words,chars" });

// Wrap each char in a span with class "char"
split.chars = split.chars.map((el, index) => {
  const span = document.createElement("span");
  span.className = "char";
  span.textContent = el.textContent;
  span.style.display = "inline-block";
  span.style.opacity = 0;
  el.replaceWith(span);
  return span;
});

// Wrap each word in a span with class "word"
// split.words = split.words.map((el, index) => {
//   const div = document.createElement("div");
//   div.className = "word";
//   div.textContent = el.textContent;
//   div.style.display = "inline-block";
//   el.replaceWith(div);
//   return div;
// });

// function convertSplitTextDivsToSpans(split) {
//   split.chars = split.chars.map((el) => {
//     const span = document.createElement("span");
//     span.className = el.className;
//     span.textContent = el.textContent;
//     span.style.display = "inline-block";
//     span.style.opacity = 0;
//     el.replaceWith(span);
//     return span;
//   });

//   split.words = split.words.map((el) => {
//     const span = document.createElement("span");
//     span.className = el.className;
//     span.textContent = el.textContent;
//     span.style.display = "inline-block";
//     el.replaceWith(span);
//     return span;
//   });

//   return split;
// }

function animate() {
	tl.set(split.chars, { autoAlpha: 0 });
  tl.staggerTo( split.chars, 1.5, { autoAlpha: 1, ease: Sine.ease }, 0.1, 0.5 );
  //   tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  //   tl.set(["#cta"], { force3D: false, rotation: 0.001 });

  // .staggerFrom(
  //   text1Split.chars,
  //   staggerDuration,
  //   { autoAlpha: 0, ease: Sine.easeInOut },
  //   staggerDelay,
  //   "t1in"
  // )
  // .to("#text-2", 0.5, { autoAlpha: 1, ease: "power1.in" }, 3.8)
  // .to("#cta", 0.5, { autoAlpha: 1, ease: "power1.in" }, "+=1")
  // .to("#car", 4, { scale: 1, ease: "power1.in", force3D: true }, 0);
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta-roll"], 0.3, {
    autoAlpha: 1,
    ease: Power1.easeOut,
    delay: 0,
  });
}

function default_out(event) {
  TweenMax.to(["#cta-roll"], 0.3, {
    autoAlpha: 0,
    ease: Power1.easeOut,
    delay: 0,
  });
}

// sbdhjbsdjcbsjdbcj
