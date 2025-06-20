var container;
var content;
var bgExit;
var startTime;
var endTime;
var legalView;
var legalButton;
var root;

var tl = new TimelineMax({
		onComplete: function(){
			//Establish timeline will lopp to .6 second mark on complete - loop after banner "fades in" (cover autoAlpha off)
			//tl.play(.6)
	
			if(repeatIndex < 1){
				repeatIndex++;
				tl.play(.3)
			}
	
			endTime = new Date();
			var timeDiff = endTime - startTime; //in ms
			// strip the ms
			timeDiff /= 1000;
			// get seconds 
			var seconds = timeDiff;
			//Log time - comment out for production
			//console.log(seconds + " seconds");
		}
	});	


function getOS() {
	var userAgent = window.navigator.userAgent,
		platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;
  
	if (macosPlatforms.indexOf(platform) !== -1) {
	  os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
	  os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
	  os = 'Windows';
	} else if (/Android/.test(userAgent)) {
	  os = 'Android';
	} else if (/Linux/.test(platform)) {
	  os = 'Linux';
	}
  
	return os;
}
document.querySelector('body').className = getOS();


//Start the creative
startAd = function (e) {
	//Assign elements
	container = document.getElementById('banner_container_dc');
	content = document.getElementById('content_dc');
	bgExit1 = document.getElementById('backgroundExit1');
	legalView = document.getElementById('legal-view');
	legalButton = document.getElementById('legal-button');


	//Add listeners
	addListeners();

	container.style.display = "block";


	//Establish start date to record display running time later
	startTime = new Date();

	//Set specific legal height for nicer legal animation


	/* root = document.querySelector(':root');

	console.log(`legal height before: ${legalView.offsetHeight}`)
	
	
	
	root.style.setProperty('--legal-height' , legalView.offsetHeight)
	document.documentElement.style.setProperty('--legal-height' , legalView.offsetHeight)
	
	console.log(`legal height after: ${legalView.offsetHeight}`)
	
	console.log(`legal official: ${ getComputedStyle(root).getPropertyValue('--legal-height')}`)
	console.log(`margin top official: ${ getComputedStyle(legalView).getPropertyValue('margin-top')}`)
 */
	

	//Lets buils this ish
	buildTimeline(this);
	
	

};

//Add Event Listeners
addListeners = function (e) {
	bgExit1.addEventListener('touchEnd', bgExitHandler, false);
	bgExit1.addEventListener('click', bgExitHandler, false);

	legalButton.addEventListener('touchEnd', legalhandler, false);
	legalButton.addEventListener('click', legalhandler, false);


	/* $legalButton.on('click', function() {
        if ($legalView.hasClass("open")) {
            $legalView.removeClass("open");
            $legalButton.removeClass("open");
        } else {
            $legalView.addClass("open");
            $legalButton.addClass("open");
        }
    }); */
};

addHoverListener = function(e) {
	
}

//Add exits
bgExitHandler = function (e) {
	window.open(window.clickTag);
};

legalhandler = function(e){
	if(legalView.classList.contains('open')){
		legalView.classList.remove('open');
		legalButton.classList.remove('open');
		console.log(`Margin top: ${  getComputedStyle(legalView).getPropertyValue('margin-top') }`)
		console.log(`Margin top alt: ${  legalView.style.marginTop }`)
	}else{
		legalView.classList.add('open');
		legalButton.classList.add('open');
		console.log(`Margin top: ${  getComputedStyle(legalView).getPropertyValue('margin-top') }`)
		console.log(`Margin top alt: ${  legalView.style.marginTop }`)
	}
}

//Wait for the content to load to call the start of the ad
window.onload = function () {
	startAd();
};	

bgOverHandler = function(e){
	console.log("BG Handler")
	if (e.type == 'mouseover'){
		//TweenMax.fromTo("#cta .shine", 1, {x: -200 }, {x: 200, ease: Sine.easeInOut});
		
	}
	if (e.type == 'mouseout'){
		
	}
}

onHover = function(e){
	
}


buildTimeline = function(e){

	var text1 = new SplitText("#text-1", {type:"chars,words", position:"relative"});
	var text2 = new SplitText("#text-2", {type:"chars,words", position:"relative"});
	var text3 = new SplitText("#text-3", {type:"chars,words", position:"relative"});


	gsap.config({nullTargetWarn:false});

	var repeatIndex = 0;

	
	
	var staggerDelay = .1;
	var staggerDuration = 1.5;
gsap.set(text1.chars, {
  scale: 1,
  x: 0,
  y: 0,
  opacity: 1,
  transformOrigin: "center center"
});
	tl.to("#cover", .3, {autoAlpha: 0})

	
	.addLabel('t1in', "+=.5")

	// .from('.roofline', 1.2, {width: 0}, 't1in+=.6')


	// .from('#logo', .8, {right: '-=80%', opacity: 0}, 't1in+=.2')
	// .from('#cta', .8, { top: '-=80%', opacity: 0}, 't1in+=.4')

	
	.staggerFrom(text1.chars, staggerDuration, {alpha: 0, ease: Sine.ease}, staggerDelay, "t1in")
	// .from("#text-1", .9, { top: "-=80"}, "t1in")


	.addLabel('t1out', "+=1.5")

	.staggerTo(text1.chars, staggerDuration, {alpha: 0, ease: Sine.easeOut}, staggerDelay, "t1out")
	// .to("#text-1", .4, { top: "-=80"}, "t1out")
	
	.addLabel('t2in', "-=1.5")

	.staggerFrom(text2.chars, staggerDuration, {alpha: 0, ease: Sine.ease}, staggerDelay, "t2in")
	// .from("#text-2", .4, { top: "-=80"}, "t2in")

	.addLabel('t2out', "+=1.5")

	.staggerTo([text2.chars], staggerDuration, {alpha: 0, ease: Sine.easeOut}, staggerDelay, "t2out")
	// .to("#text-2", .4, { top: "-=80"}, "t2out")

	.addLabel('t3in', "-=1.5")

	.staggerFrom(text3.chars, staggerDuration, {alpha: 0, ease: Sine.ease}, staggerDelay, "t3in")
	// .from("#text-3", .4, { top: "-=80"}, "t3in")

	


	.to('#cta_1', .5, {transform: 'scale(1.1)', ease: Back.easeOut}, 't3in+=2.2')
	.to('#cta_1', .3, {transform: 'scale(1)', ease: Back.easeOut}, 't3in+=2.7')
	

	.to("#made-up-loop-buffer", 4, {backgroundPositionY: "-=10", onStart: function(){
		if(repeatIndex > 0){
			tl.pause();
			endTime = new Date();
			var timeDiff = endTime - startTime; //in ms
			// strip the ms
			timeDiff /= 1000;
			// get seconds 
			var seconds = timeDiff;
			//Log time - comment out for production
			console.log(seconds + " seconds");
		}
	}})


	.addLabel('out', "+=0")
	.to('.bar', .8, {opacity: 1}, '+=0')
	// .to('#logo', .4, {opacity: 0}, 'out')
	.to('#cta_1', .4, {opacity: 0}, 'out')
	.to('#text-3', .4, { opacity: 0}, 'out')
	.to('.roofline',.6, {opacity: 0}, 'out')
	.to("#image-1", 1, {opacity:1}, "out+=.4")
	//.staggerTo(text2.chars, staggerDuration, {alpha: 0, ease: Sine.easeOut}, staggerDelay, "out")
	.delay(.5)


	tl.timeScale(3.8);
}


