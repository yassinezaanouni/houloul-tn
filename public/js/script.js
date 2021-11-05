const btnNav = document.querySelector(".mobile-nav-button");
const header = document.querySelector(".main-header");
const mainNav = document.querySelector(".main-nav");
btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

mainNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const adns = document.querySelectorAll(".adn");
const adnp = document.getElementById("adn-p");

let i = 1;
const adnObject = {
  0: "Chez Houloul, chaque membre de notre équipe a développé un degré de créativité, d’innovation et de leadership hors pair tout au long de son expérience et ce, depuis son plus jeune âge. Ces compétences sont renforcées par des études supérieures approfondies et diverses dans ",
  1: "Créativité et innovation sont les compétences majeures qui définissent notre équipe.  Une équipe qui ne cessent de s’améliorer afin d’apporter les meilleures solutions aux problèmes, éliminer les obstacles et développer le tissu entrepreneurial.",
  2: "Houloul est un cabinet de Management as a Service et Management Consulting. Nous proposons non seulement des recommandations, des stratégies et des plans d’actions personnalisés, mais surtout ...",
  3: "Notre ambition est de construire un monde meilleur avec une qualité de service proactive et personnalisée basée sur la confiance et la fiabilité de tous les acteurs. Pour ce faire, nous mettons en ..",
};
setInterval(() => {
  adnp.innerHTML = adnObject[i];
  if (i == 0) {
    adns[3].classList.remove("active");
  } else {
    adns[i - 1].classList.remove("active");
  }
  adns[i].classList.add("active");
  i = Math.abs((i + 1) % 4);
}, 3000);

///////////////////////////////////////////////////////////
// Sticky navigation

// const sectionHeroEl = document.querySelector(".hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "0px",
//   }
// );
// obs.observe(sectionHeroEl);

/////////////////////////////////////////////////////////
/*Animation*/

const primaryCta = document.querySelector(".hero-primary-cta");
const cta = document.querySelector(".animation");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      cta.classList.add("cta-animation");
    }

    if (ent.isIntersecting === true) {
      cta.classList.remove("cta-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obs.observe(primaryCta);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
