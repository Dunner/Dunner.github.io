"use strict";

import React from 'react';

const projects = {

  getProject : function(name) {
    return this.projects[name];
  },

  getProjects : function(amount) {
    let projectsToSend = [];
    if(amount) {
      let i = 0;
      for(let project in this.projects) {
        projectsToSend.push(this.projects[project])
        i++;
        if (i >= amount) {return projectsToSend; break;}
      }
    }
    for(let project in this.projects) {
      projectsToSend.push(this.projects[project])
    }
    return projectsToSend;
  },

  getProjectsInTwos : function(start, amount) {
    let projectsToSend = [];
    if(start !== undefined) {
      let i = start;
      while(i < start+amount) {
        projectsToSend.push(this.projects[Object.keys(this.projects)[i]]);
        i++;
      }

    }
    return projectsToSend;
  },

  projects: {




    dajon: { 
      type: 'application',
      title: 'Superflexibel webbplatsutformare',
      slug: 'dajon',
      name: 'Dajon',
      path: '/projects/dajon/',
      backgroundURL: '',
      thumbColor: '#cecece',
      thumbURL: '/projects/dajon/img/dajon-thumb.png',
      thumbBigURL: '/projects/dajon/img/dajon-thumbbig.png',
      sourceCodeURL: '',
      tech: ['Node','Express','MongoDB','Angular','Grunt','Bower','Stylus'],
      html: function() { return(
<div>

  <p class="float">

    <span class="small-caps">Dajon är en internetbaserad tjänst</span> där alla resurser som krävs
    för att skapa och underhålla en professionell webbplats är lättillgängliga och enkla att använda.
    Oavsett kompetens inom området ska det inte finnas några hinder för att billigt,
    snabbt och effektivt kunna skapa just den webbplats du drömmer om.
    Oavsett om du bara kräver verktygen eller ett enkelt system för att låna kompetensen av någon som har den.
  </p>

  
  <p class="small block float">
    Dajon utvecklades 2014-2016 och var ett sammarbete med David Meyer.
  </p>



  {/*   
    <img src="/projects/dajon/img/longGifDajon.gif" class="center" width="85%"/>
    A serious startup-attempt. Dajon is the dream of an entire eco-system where content creators and business owners come together in synergy allowing creators to work with their areas of expertise and passion, and businesses to employ and receive what they need without complications. Dajon’s major feature is a cutting-edge web-page editor thats intuitively easy to use and yet more customizable than that of any other competitor.
    Collaboration with David Meyer(Backend), putting extra focus on planning, versioning, work- & build processes.
    Tech: Angular, Grunt, Bower, Node, Express, MongoDB(Mongoose), Font Awesome, Stylus, Bower, Multer, Passport
  */}


  <p>

    Tjänsten erbjuder enkla verktyg för att köpa, sälja, skapa och redigera grafiskt sidinnehåll såsom:
  </p>
    <ul>
      <li>Fotografier</li>
      <li>Typsnitt</li>
      <li>Färdiga designmallar</li>
      <li>Översättningar</li>
      <li>Artiklar</li>
    </ul>
  <p>
    samt näst intill obegränsat med användarskapad funktionalitet såsom bildkaruseller och konkaktformulär.
  </p>

  <p>

    Men viktigaste av allt,
    marknadens mest flexibla verktyg för webbplatsutformning som tillåter dig som kund att forma
    precis den webbplats eller applikation du behöver utifrån de grafiska element som är nämnda ovan.
    Tillsammans med de integrerade verktyg för datahantering vi erbjuder är det pinsamt enkelt att
    forma din hemsida efter inte enbart grafiska men även praktiska behov.
    Är det en blogg eller butik du behöver? - Endast fantasin sätter gränser.
  </p>

  <img src="/projects/dajon/img/longGifDajon.gif" class="center" width="85%"/>

  <p>

    Bland de skickliga innehållsskapare som arbetar i våran tjänst finns 
    även de som via ett smidigt system kan anlitas för att ordna det där lilla extra
    som din webbplats behöver för att bli snäppet bättre än alla andras.
    Det finns till och med de som är villiga att skriva eller översätta den text du behöver,
    nästan oavsett språk!
  </p>

</div>

      )}
    },

    portfolio: { 
      type: 'website',
      title: 'jonathanhagglund.se',
      slug: 'portfolio',
      name: 'Portfolio',
      path: '/projects/portfolio/',
      backgroundURL: '',
      thumbURL: '/projects/portfolio/img/jh-thumb.png',
      thumbBigURL: '/projects/portfolio/img/jh-thumbbig.png',
      thumbColor: '#161616',
      sourceCodeURL: 'https://github.com/Dunner/jonathanhagglund.se',
      tech: ['React', 'Stylus', 'Webpack', 'Babel'],
      html: function() { return(

<div>

  <p class="small">
    Mitt portfolio och den sida du just nu besöker.
  </p>

  <h3>PRAGMATISK DESIGN</h3>

  <p>
    jonathanhagglund.se är den senaste iterationen av mitt portfolio,
    denna variant är ett experiment i simpel elegans där jag
    hållit hårt i tyglarnaför att inte ta ut svängarna.
    Målet är en strikt och koncis komposition som inte är överväldigande
    och förvirrande, utan användarvänlig och där varje komponent tjänar
    ett effektivt syfte. Inget tjaffs. “Straight to the point”, pragmatiskt.
  </p>  
  <p>
    Det simplaste och kanske effektivaste sättet att förmedla information
    är statitiskt direkt på papper, sidan lånar därför sin inspiration
    från pappret, rutnätet och typografin. 
  </p>  
  <p>
    För att sidan ändå ska förmedla en väl uttänkt design används en gulaktig
    vit bakgrundsfärg och ett typsnitt som influerats av skrivmaskinen
    och ger en lätt nostalgisk maskinkänsla.
  </p> 

  <h3>SNABBHET OCH ANIMATIONER</h3>

  <p>
    Sidan är en så kallad single-page application, 
    detta betyder att majoriteten av all information som behövs,
    hämtas direkt då sidan först besöks. 
    Sedan hämtas övrig informationen dynamiskt allt eftersom den efterfrågas
    då användaren navigerar. Det betyder att t.ex. logo, navigation och sidfot
    bara behöver hämtas in och målas ut på sidan en gång, medans informationen
    som är specifik för ett projekt bara hämtas när någon vill se projektet.
  </p> 

  <p>
    Detta system är snällt för användarens bandbredd då denne aldrig hämtar
    ut mer information än nödvändigt.
    Effekten av detta är även att sidan presterar väldigt snabbt.
  </p> 

    <p>
      För att maskera de laddningstider som ändå förekommer och är speciellt
      märkbara vid låg bredbandskapacitet används animationer,
      dels en animation vid sidans första hämtning som visar logotypen först och
      sedan tonas successivt övrig information fram när den garanterats ha hämtats.
    </p> 
    <img src="/projects/portfolio/img/test.gif" class="center" width="80%"/>
    <p class="block">
      Samma princip används vid sidförflyttningar.
    </p>
    <img src="/projects/portfolio/img/test2.gif" class="center" width="80%"/>

  <h3>RESPONSIVITET</h3>

  <p>
    Som alltid i modern webbutveckling är responsivitet otroligt viktigt,
    d.vs. att sidan presenterar sig och fungerar vackert oavsett vilken
    skärmstorlek användaren har. I detta projekt skapades ett flytande designsystem
    som bygger på procentuella enheter. Det innebär att många av sidans element
    inte har fasta mått(såsom 2 cm eller 25 pixlar) utan procentuella storlekar,
    t.ex. 25% av sidans totala bredd.
    Då anpassar sig sidan automatiskt till olika skärmstorlekar,
    samma metod används även för text-storleken.
    Utöver denna flytande metodik finns alltid tillfällen då man behöver
    specifika regler. 
    Att visa 5 projekt bredvid varandra ser bättre ut på en stor datorskärm än på
    en liten iPhone-skärm då allt kan ha svårt att få plats och fortfarande vara läsbart,
    därför finns innbygda regler som bestämmer att projekten rammlar ner under varandra
    på de mindre skärmstorlekarna.
    <img src="/projects/portfolio/img/test3.gif" class="center" width="80%"/>
  </p> 

  <h3>ARBETSPROCESS</h3>

  <p>
    Jag valde att bygga sidan på React-ramverket för att göra arbetet till en lärandeprocess,
    och efter slutfört arbete kan jag stolt lägga tillt React i min ramverksarsenal,
    arbetet har inte gjort mig till någon expert på området men jag förstår likväl
    grundkoncepten och kan använda ramverket för att skapa vad jag behöver. 
  </p> 
  <p>
    Att använda React betyder att man behöver en byggprocess,
    detta är inget nytt för mig då jag tidigare arbetat med både Gulp och Grunt.
    Att lägga till Webpack till denna lista är väldigt trevligt och en biprodukt
    till dessa två är att det nästan blev ett tvingade steg att gå upp och börja
    använda ES6 och senare nytillägg av JavaScript med Babel.
    Dessa förändringar tillsammans med JSX och “hot-loading” gav en rejält förbättrad
    och effektivare arbetsprocess som jag ser fram emot att använda mer i framtiden.
  </p> 

</div>

      )}
    },



    evonetics: { 
      type: 'application',
      title: 'Evolutionssimulator med artificiella neurala nätverk',
      slug: 'evonetics',
      name: 'Evonetics',
      path: '/projects/evonetics/',
      backgroundURL: '',
      thumbURL: '/projects/evonetics/img/evonetics-thumb.png',
      thumbBigURL: '/projects/evonetics/img/evonetics-thumbbig.gif',
      thumbColor: '#161616',
      sourceCodeURL: 'https://github.com/Dunner/creeplab',
      linkURL: 'http://35.156.18.28:9003',
      tech: ['Phaser','Gulp','Stylus'],

      html: function() { return(

<div>

  <p>
    <strong>Evonetics</strong> (<strong>Evo</strong>lution Ge<strong>netics</strong>) är en simulator som med hjälp av genetiska
    algoritmer och neurala nätverk anammar och demonstrerar organismers utveckling.
  </p>

  <p>
    Simulationen består av två sorters objekt; Mat och levande organismer. 
    
    De levande organismerna har ingen direkt beteendeprogramering utan lär sig
    <img src="/projects/evonetics/img/gens.gif" class="right" width="45%"/>
    succesivt att leva längre genom att utveckla beteenden som hjälper de att finna-, 
    navigera till- och äta, mat. Samt reproducera sig.
  </p>


  <p>
    Alla organismer har ett eget neuralt nätverk bestående av neuroner och synapser,
    denna hjärna består av tre lager, 
    varje lager har ett antal neuroner och mellan lagren kopplas neuronerna ihop med synapser.
    Lagrerna består i följd av input lagret,
    det gömda lagret och output lagret. Input lagret har neuroner
    vars värden kommer ifrån sensorer, t.ex. innehåller en neuron i input-lagret
    vinkeln till närmsta matbit, detta simulerar ett luktsinne. 
  </p>

  <p>
    Det gömda lagrets neuron innehåller inga fasta värden utan varje neurons värde
    här är bara en summering av värderna av synapser som kommer in till neuronen
    gånger input-värdet synapsen kom ifrån, denna summering går sedan genom en
    Sigmoid funktion för att normalisera värdet mellan 0 och 1.
  </p>

  <p>
    Output-lagret fungerar mer eller mindre som det gömda lagret, fast det är synapserna
    från det gömda lagret till output-lagret gånger som gångras med det gömda lagrets
    neuroner och sedan summeras och går in i en sigmoidfunktion för att producera ett
    värde mellan 0 och 1 i output-neuronerna, dessa output-värden kontrollerar sedan
    organismens beteende, t.ex. styr en av dessa neuroner vilket håll neuronen svänger åt.
  </p>

  <img src="/projects/evonetics/img/brain.gif" class="center" width="80%"/>

  <p>
    Varje organism har alltså i regel väldigt liknande hjärnor strukturmässigt men de
    producerar i stort sett helt olika beteenden på grund av att de har olika värden i
    sina synapser, detta simulerar arvsmassa och genetik.
  </p>


  <p>
    När två organismer parar sig föds en ny organism som ärver sina
    föräldrars synapser, dessas synapser kan se helt olika ut och barnet
    får därmed en blandning av föräldrarnas synapser.
    Varje gång en ny organism föds sker även en slumpmässig mutation
    som ändrar värdet i en av synapserna med 0.05%.
    Vilket ger organismerna möjligheten att över tid bli effektivare,
    säg till exempel att synapsen som muteras har en koppling till organismens
    hastighet så kan organismen bli något snabbare är de andra och därmed ha
    större förutsättningar att först nå maten och en partner att para sig med.
    Medans en ineffektiv mutation ofta leder till att organismen har en mindre
    chans att överleva och para sig än en annan.
  </p>

  <h3>På gång:</h3>
  
  <p class="small">Kroppsdelsmutationer och fysikbaserade rörelser.</p>


  <p class="float">
    <img src="/projects/evonetics/img/randomparts.gif" class="left" width="20%"/>
    I nästa uppdatering ges alla organismer möjligheten att mutera nya och existerande
    kroppsedelar, 
    dvs. kroppen kanske blir längre eller så växer det fram ett nytt ben.
    I regel ska det kunna växa fram hur många lemmar som helst och hur stora organismer
    som helst. Men dessa kommer ha svårt att överleva, förhoppning är det ska utvecklas
    organismer som effektivt tar sig fram med olika utseenden.
  </p>

  <p>
    Organismen har möjligheten att kontrollera varje lem fritt. Lemmars rörelser utövar krafter
    på kroppen som med mattematiska uträkningar och fysiska regler propellerar
    organismen framåt i en miljö som simulerar vatten.
  </p>

  <img src="/projects/evonetics/img/squid.gif" class="center" width="80%"/>

  <p class="small">
    Ovan ett exempel på en välutvecklad organism som påminner om och tar sig fram lite som en bläckfisk.
  </p>

  <p>
    Utöver kropp och lemmar tillförs även olika sorters munnar, tre olika varianter med olika sorters tänder.
    En uppsättning vassa tänder för köttätare, ett mellanting för allätare och en sammling rejält avtrubbade
    tänder för vegetarianer. Dessa påverkar vad organismen kan äta och hur effektivt.
  </p>

</div>

      )}
    },


    spetsad: {
      type: 'application',
      title: 'HTML5 & Mobilt MOBA-spel',
      slug: 'spetsad',
      name: 'Spetsad',
      path: '/projects/spetsad/',
      backgroundURL: '',
      thumbColor: '#191919',
      thumbURL: '/projects/spetsad/img/spetsad-thumb.png',
      thumbBigURL: '/projects/spetsad/img/spetsad-thumbbig.png',
      sourceCodeURL: 'https://github.com/Dunner/spetsad',
      linkURL: 'http://35.156.18.28',
      tech: ['Node','Express','Socket.io', 'Phaser'],
      html: function() { return(

<div>

  <p>
    <span class="small-caps">Spetsad är ett fullfjädrat HTML5 MOBA-spel</span>, d.vs. ett Multiplayer Online Battle Arena spel
    med ambitionen att täppa till gapet mellan smartphone-, tablet- & PC-spelande genom att
    tillåta spelet att spelas vart som helst med vad som helst.
  </p>

  <p>
    I varje spelsession deltar två lag om fyra spelare vardera. Var lag har en bas på motsatt
    sida av en spelplan, var lags objektiv är att bränna ned motståndarnas bas men på vägen finns
    skyddande torn som först måste förstöras.
  </p>

    {/*Spetsad är även ett experiment i marknadsföring och utmyntning, 
    ämnat att testa effektiviteten av olika strategier av reklam samt spel-kopplade köp.*/}

  <h3>Spelmotorn</h3>

  <p>
    Webbläsarspel har sedan länge lidit av platt och ofta ganska tråkig grafik pågrund av prestandabegränsningar. 
    Därför har jag tagit fram en metod som tillåter en trovärdig och unik 3D-simulering. Den går ut på att varje
    objekt i spelet består av ett antal lager som sedan visas ovanpå varandra med förskjutningar beroende på vilket
    perspektiv jag vill ge objektet, se bild för exempel
  </p>
  <img src="/projects/spetsad/img/fakecubes.gif" class="center" width="60%"/>  

  <p>
    Igenom att para ihop denna teknik med ett par klyftiga kameratekniker och väl utformade designresurser är
    det helt möjligt att sälja illusionen av verkligt djup och perspektiv.
    <img src="/projects/spetsad/img/attack.gif" class="left" width="40%"/>  
  </p>

  <p>
    Detta ger en härlig unik stil som bidrar till spelets igenkänningsfaktor och spelarens inlevelse. 
    Men framförallt spelets prestanda. Det ser snyggt ut utan att vara speciellt krävande,
    och ambitionen är att det ska vara så ressursnålt att det ska kunna spelas på praktiskt taget vad som helst.
  </p>

  <h3>Spelkoncept</h3>

  <p>
    Spetsads spelkoncept växte fram ur ett extremt ödmjukt litet test av Socket.io & Phaser-integration.
    Testet bestod av små spelarstyrda fyrkanter som hade möjligheten att skjuta bruna laserstrålar för att 
    <img src="/projects/spetsad/img/gomix.gif" class="right" width="40%"/> 
    skada och ta kål på varandra, desto längre en stråle färdades innan den träffade sitt mål desto mer
    skada gjorde den. Detta visade sig vara riktigt roligt och belönande. Vid projektets stresstest stannade
    flera av spelarna kvar upp mot 20 minuter, spelandes och skrattandes. 
  </p>


  <p>
    Att inte utforska den potentialen känndes som ett misstag, speciellt då det var så lätt att få folk att spela,
    de klickade bara på en länk o så var allt igång, inga nedladdningar eller installationer, appar eller program.
    Bara en simpel webbplats.
  </p>

  <p>
    Det som de flesta stora multplayer-spelen har gemensammt är lagkampen, möjligheten att tillsammans med sina
    vänner utforska och utvecklas och bli bättre än alla andra. Detta ville jag definitivt inkludera.
    Och med inspiration från spel som klassikerna WC3 och dess populära spinoff-genre Multiplayer Online Battle Arenornas
    alla superpopulära spel som League of Legends, Dota 2, Heroes of Newearth och något mer unika Smite och Overwatch.
    Var det inte svårt att sätta sig ner tillsammans med ett par vänner och spåna fram genrens nyckel till framgång
    och extrahera grundkoncept som kampen för att hålla dena egna basen vid liv och förstöra det andras.
  </p>

  <p>
    Resursbiten är tagen ut strategispelen, som WC3’s ursprungliga spelläge samt spel som Starcraft.
    Här gäller det att inte enbart sköta sin egen karaktär utan även se till att hela laget har tillräckligt
    med resurser, denna idé tvingar fram lagarbete om man vill ha någon som helst chans att vinna. I spelets
    startläge är det någorlunda enkelt att uttnytja de resurser som utan större risk kan tas nära basen och
    under tornens skydd. Men allt som spelet fortskrider blir kampen om resurserna tuffare då varje bit
    måste hämtas än närmre motståndarna. Detta skapar även taktiker som tillåter att man t.ex. medvetet
    börjar med att stjäla resurser från motståndarnas planhalvs. När man extraherar resurser och fraktar
    på de är man långsam och kan inte försvara sig själv. Därför är det absolut nödvändigt för laget att
    man sammarbetar och hjälper varandra i sådant skede, det är även nödvändigt att utnyttja denna svaghet
    hos motståndaren för att försöka vinna.
  </p>

  <p>
    Resurserna användes för två ändamål, verktyg och reparationer. Verktygen är spjuten och facklorna som ständigt
    förbrukas. Reparationerna sker för att hålla lagets torn vid liv. Vardera lag har ett torn som skyddar lagets
    egna planhalva från motståndaren. Spjut används för att skada andra spelare, Facklor för att skada torn och bas.
  <img src="/projects/spetsad/img/tree5.gif" class="right" width="50%"/> 
    För närvarande är träd den enda resursen, träden måste fällas och sedan bäras i delar tillbaka till basen.
    Träden erbjuder spelare skydd att gömma sig i/bakom, men processen att fälla ett träd är väldigt uppenbara
    för alla inom snyhåll, trädet skakar vilt och rammlar sedan rakt över spelplanen, detta gör resurssamlingen
    svårare men även mer spännande.
  </p>


  <h3>Lobbysytemet</h3>

  <p>
    Lobbysystemet är potentiellt det viktigaste i hela projektet att få till helt rätt, lobbyn måste passeras för
    att en spelare ska kunna spela och är den processen frustrerande eller förvirrande riskarar man
    att spelaren vänder i dörren.  
    <br/><img src="/projects/spetsad/img/lobby.gif" class="left" width="40%"/> 
    Lobbyn är livsviktig då den delar upp lagen och ger vänner möjligheten
    att spela tillsammans. Att skapa en lobby som gör som man vill och ofta automatiskt är därför otroligt
    viktig, av denna anledning är allting så förenklat som möjligt. Skapande av lobby kräver endast ett
    klick, inga formulär eller inställningar. Lobbyn får spelarens namn, värden som skapat lobbyn hamnar
    automatiskt i lobbyn och placeras på första plats i det första laget, inga extra klick.
    Skulle värden lämna när det finns andra spelare blir den som varit där längst den nya värden,
    värden kan enkelt starta ett spel från lobby när som helst igenom ett enda klick.

  </p>

    {/*TODO:
    Marknadsföring
    VIlja att vinna
    Vilja att stanna kvar & spela mer.
    Utmyntning
    Annonser
    Specialeffekter
    Forumutsmyckelser
    Skins*/}


</div>
      )}
    },


    pfeed: {
      type: 'application',
      title: 'Fullstack "bloggplatform" och MEAN-mall',
      slug: 'pfeed',
      name: 'pFeed',
      path: '/projects/pfeed/',
      backgroundURL: '',
      thumbURL: '/projects/pfeed/img/pfeed-thumb.png',
      thumbBigURL: '/projects/pfeed/img/pfeed-thumbbig.png',
      thumbColor: '#cecece',
      sourceCodeURL: 'https://github.com/Dunner/pfeed',
      linkURL: 'http://35.156.18.28:8080',
      tech: ['Node','Express','MongoDB','Angular','Grunt','Bower','Stylus'],
      html: function() { return(

<div>

  <p>
    pFeed(Personal Feed) är en webbapplikation som tillåter vem som helst att skapa och uppdatera
    ett flöde av information. 
  </p>
  <img src="/projects/pfeed/img/new-feed.gif" class="right" width="230px"/>

  <p>
    Applikationen är uppdelad i två lägen, det första läget är “listan”.
  </p>

  <p>
    Listan visar alla flöden som skapats och en knapp som tillåter användaren att skapa ett nytt flöde i listan.
  </p>

  <p>
    När en användare väljer att skapa ett nytt flöde ger man sitt flöde ett namn och ett lösenord,
    flödet kan sedan nås via “listan” eller via flödets “slug”, som är en URL-vänlig variant av flödets namn.
    “Eriks flöde!” kan då nås via pfeed.com/eriks-flode.
  </p>

  <p>
    Klickar en användare på ett flöde i listan tas man till applikationens andra läge, “flödet”.
  </p>
  <img src="/projects/pfeed/img/unlock-feed.gif" class="left" width="200px"/>

  <p>
    Väl innuti ett flöde visas flödets alla inlägg som man då kan läsa och ta del av. 
  </p>

  <p>
    Vidare finns en knapp som ger möjligheten att låsa upp flödet om man kan flödets lösenord.
  </p>

  <p class="inline-block">
    Ett upplåst flöde ger möjligheten att skapa nya inlägg, ta bort gamla och ändra på de som redan finns.
  </p>
  <br />
  <img src="/projects/pfeed/img/new-article.gif" class="center" width="300px"/>

  <p>
    En otroligt lätt och ofrustrerande liten webbapplikation som demonstrerar lösenordsskydd,
    text-editering, sessioner och databashantering.
  </p>

  <p class="small">
    Det här projektet var aldrig ämnat att färdigställas, finslipas och användas av riktiga användare.
    projektet skapades som en språngbräda, en mall att utgå ifrån för framtida projekt.
    Denna grund ligger till exempel bakom fullstack-varianten av <a href="#/projects/storytime">StoryTime</a>  
  </p>

</div>

      )}
    },


/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/


    fossviking: { 
      type: 'website',
      title: 'Wordpresstema & plugins',
      slug: 'fossviking',
      name: 'Fossviking.com',
      path: '/projects/fossviking/',
      backgroundURL: '',
      thumbURL: '/projects/fossviking/img/fossviking-thumb.png',
      thumbBigURL: '/projects/fossviking/img/fossviking-thumbbig.png',
      sourceCodeURL: '',
      linkURL: 'http://fossviking.com/',
      tech: ['PHP', 'Wordpress', 'SQL'],
      html: function() { return(

<div>

  <p>
    Moved from an old CMS to WordPress, creating a custom theme, and a bunch of custom addons 
    for multi-language, page editing, product editing, image-sliders, and CRM-solutions. 
  </p>

  <h3>ÖPPNING</h3>

  <p>
    Fossviking var vid tillfället mitt dittils störtsta frilans-updrag som självstående.
    Här hade vi att anrikt och etablerat företag som nappat på mitt överambitiösa projektförslag som
    gick ut på att ta företagets digitala aspekter ur medeltiden och in i nutiden och samtidigt ge
    dem så pass flexibla lösningar att de enkelt skulle kunna fortsätta vara moderna utan att behöva
    börja om på ruta noll vart tioende år.
  </p>

  <h3>BEHOVET</h3>

  <p>
    Allting centrerade runt deras dåvarande webbplats foss-viking.no som legat hos en norsk domänregistrar
    som även handahöll en liten webbbyrå med hemmagjort CMS. Låter bra på pappret men i verkligheten så
    var CMS-verktygen inte flexibla nog för Fossviking att själva ha tillräcklig kontroll över sin egen
    sida och alla uppdateringar de fick be webbyrån göra var ett slukhål för ekonomin.
    Att en ny lösning behödes var det ingen fråga om och efter ett par möten med klienten kom vi överens
    om att gå över till Wordpress, inte riktigt mitt vassaste område men det stämde otroligt väl överens
    med vad klienten behövde och betydde även att jag inte behövde låsa upp mig eller klienten i framtiden.
    Wordpress ger full tillgång till allt, alltså kan en ny utvecklare ta över arbetet med Fossviking
    när jag inte längre har möjligheten.
    Det finns även otroligt gott om dokumentation som ger klienten själv möjlighet att sätta sig in i hur
    det fungerar och själv ha kontroll över webbplatsen, inga mer dyra betalningar för minimala uppdateringar
    såsom utbyten av bilder eller tilläg av informationssidor.
  </p>

  <h3>WEBBPLATSEN</h3>

  <p>
    Det fanns på ytan inga större överraskningar gällande sidans innehåll, det var en någorlunda vanlig webbplats
    med ett sidhuvud innehållande logo, navigation och språkval, en sidfot inehållande information om företaget
    och ett nyhetsbrevsformulär. Ett par sidor med mer utförlig information om företaget samt en produktvy där
    alla produkter skulle kunna sorteras, filtreras och visas upp i detalj.
  </p>

  <p>
    Tidsfokus; språk, produkter, nyhetsbrev
  </p>

  <p>

    Kom överrens, minimal användning av plugins.
    Det innebar att skapa i pricip hela systemet själv, språkhantering,
    statistik och SEO förandlade jag igenom att få använda. 

    <img src="/projects/fossviking/img/fossviking-thumb.png" class="right" width="40%"/>


    Designen koms överens om redan vid projektförslaget. Första steget var att mala ner mockupsen i en
    enhällig css-struktur, bastankar var elegans, inga rundade hörn, Tjocka svarta streck på vitt,
    minimal färganvändning och riktigt stark röd färg för att dra uppmärksamhet till det viktigaste.

  </p>


  <p>
    För klienten att applicera dessa principer när denna själv försökte skapa sidor visade sig tidigt
    vara ett problem, därför togs det fram en egen sidutformare som ersatte wordpresss egen och som
    automatiskt applicerade de nödvändiga stilförstärkarna och gav utökad kontroll över b.la. kolumner.
  </p>

  <p>
    Produkthanteringen krävde mycket arbete och kommunikation för att nå ett bra system, då det inte
    riktigt är logiskt eller användbart för att sortera produkterna efter t.ex. färg eller storlek.
    Då produkterna tidigare visats något huller om buller i stora rutnät, var det inte riktigt självklart
    hur detta skulle gå till. Men till slut kom vi fram till att produkterna
    kunde delas upp först i sort och sedan form. 
  </p>
    
  <img src="/projects/fossviking/img/backend-products.png" class="center" width="90%"/>

  <p>
    Nästan varje produkt i en mängd olika varianter, hur skulle detta framgå tydligt och
    göra det enkelt för kunden att hitta precis vad denne sökte? Enkelt, branschen hade redan etablerat
    <img src="/projects/fossviking/img/variations.png" class="right" width="50%"/>
    ett system för färgkodning av grovhet, knepigt nog fanns det två olika produktidentifieringssystem,
    ett produktnummer och ett iso-nummer, varav både behövdes visas tydligt för var variaton av varje
    produkt vid en snabb överblick, fö att få ihop allt skapades därför en uppställning med
    diameter vertikalt, grovhet och iso-nummer vertikalt.
  </p>

  <p class="float">
    vidare kunde upp till 3 variationer visas direkt i den gemensamma produktvyn.
  </p>


  <h3 class="block">Lansering</h3>

  <p>
    Vid webbplatsens lansering tog jag fram en analys över de bästa webbhotellen och vi migrerade till det bästa,
    vi gick även över från att använda foss-viking.no till fossviking.com,
    med den tidigare adressen och ett antal andra som redirects.
  </p>

  <p>
    Mitt arbete med Fossviking pågick sedan i ytterligare ett par år och involverade arbeten med designers och webbyråer
    för att ta fram specifika sidor för email-kampanjer och mässor, dessa kunde inehålla ytterligare funktionalitet såsom
    en lätt liten applikation för att placera en order på ett specifikt urval av produkter. Eller att skapa ett självupskrivningsregister
    för klienter som gärna ville testa framtida produkter.


  </p>
  
{/*    bildkarusell
    byte av domäner och webbhotell
    marknadsföringskampanjer & produkt- beställning & testning*/}

</div>

      )}
    },


    wpc: { 
      type: 'website',
      title: 'Angular SPA & marknadsförings-kampanj',
      slug: 'wpc',
      name: 'WPC-Terrasse',
      path: '/projects/wpc/',
      backgroundURL: '',
      thumbURL: '/projects/wpc/img/wpc-thumb.png',
      thumbBigURL: '/projects/wpc/img/wpc-thumbbig.png',
      sourceCodeURL: '',
      linkURL: '', //'http://wpcterrasse.no/',
      tech: ['Angular'],
      html: function() { return(

<div>

  <p>
    Ett rent och skärt marknadsföringsmässigt äventyr där en container av WPC-terrass behövde säljas
    ut fort till bra pris, detta innebar en webbplats som samlingspunkt för information kring produkten,
    denna länkades från annonser på sidor så som Facebook, finn.no & blocket.se.
  </p>

  <p>
    Majoriteten av trafiken drevs in genom en facebookgrupp med samma ändamål, här forskades produktens
    målgrupp och annonsens utformning fram igenom tester av ett flertal olika bildannonser med olika bilder
    och olika målgrupper, efter dessa kunde det utrönas vilken målgrupp och vilken bild som ledde till flest
    klick på annonsen. När denna information landat betalades det för en mer genomslående och lång-gående
    annons med en inbakad tävling där deltagarna själva marknadsförde produkten till de de trodde kunde ha
    behov av den. Detta gav fantastisk effekt och det tog inte lång tid att sälja slut hela containern.
  </p>

  <p>
    Webbplatsen var en simpel angular-applikation som snabbt räknade ut priset på kundens uppskattade behov
    av kvadratmeter, den föreslog då den mer högkvalitativa produkten om kunden valt den billigare
    och motiverade detta genom att visa prisskillnaden, 
    som såg relativt liten ut i jämförelse med den totala kostnaden, den visade även direkt information
    om varför det var värt att köpa av den högre kvaliteten.
  </p>
  <p>
    Det högkvalitativa golvet sålde som smör i
    solen och bara ett par dagar in fick jag visa det som slutsålt och tvärt om visa varför det inte var
    någon fara att köpa det billigare golvet.
  </p>

</div>

      )}
    },




    johannes: { 
      type: 'website',
      title: 'johanneshagglund.se',
      slug: 'johannes',
      name: 'Johannes Galleri',
      path: '/projects/johannes/',
      backgroundURL: '',
      thumbURL: '/projects/johannes/img/johannes-thumb.png',
      thumbBigURL: '/projects/johannes/img/johannes-thumbbig.png',
      sourceCodeURL: 'https://github.com/Dunner/johanneshagglund.se',
      linkURL: 'http://johanneshagglund.se',
      tech: ['Vanilla'],
      html: function() { return(

<div>

  <p class="small-caps">
    <span class="small-caps">Mer eller mindre ett vistkort för min konstnär till bror. </span>
    Webbplatsen skapades strax före Liljevalchs vårutställning 2017 för att göra
    min bror sökbar och kontaktbar, samt för att komplementera den tavla han ställde
    ut och visa upp ytterligare konst i den händelse att tavlan skulle säljas och det
    fortfarande fanns intresserade köpare.
  </p>
  <p>
    Mer om tavlan och utställningen: <a href="http://www.liljevalchs.se/utstallningar/varsalongen-2017/johannes-hagglund/">Liljevalchs</a> 
  </p>

</div>

      )}
    },





/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/


    storytime: {
      type: 'fun',
      title: 'En dynamisk historieskapare & berättare',
      slug: 'storytime',
      name: 'StoryTime',
      path: '/projects/storytime/',
      backgroundURL: '',
      thumbURL: '/projects/storytime/img/storytime-thumb.png',
      thumbBigURL: '/projects/storytime/img/storytime-thumbbig.png',
      sourceCodeURL: 'https://github.com/Dunner/redthread',
      linkURL: '/projects/storytime/frame/index.html',
      tech: ['Node','Express','MongoDB','Angular','Grunt','Bower','Stylus'],
      html: function() { return(

<div>

  <p>
    Storytime existerar i två former,
    i sin simplaste form är det en hårdkodad interaktiv berättelse gjord med
    endast vanilla js och lite ritplattemålande i Photoshop.
    Testa den varianten med knappen ovan.
  </p>

  <h3>Dynamiskt koncept</h3>

  <p>
    I den mer avancerade formen utnyttjas en fullstacklösning som tillåter
    vem som helst att via applikationen skapa egna berättelser eller ta del av andras,
    här erbjuds verktyg för att skapa karaktärer och kumminikationsträd.
  </p>

  <p>
    Karaktärskapandet finns dokumenterat mer utförligt i ett annat projekt här i portfoliot,
    se <a href="#/projects/avatarmaker">Avatar Maker</a>
  </p>

  <p>
    Kommunikationsträdet är en topografisk karta där man skapar så kallade trådar,
    en tråd är ett fyrkantigt objekt på kartan som inehåller en fråga eller ett påstående
    och direkt under en eller flera aktioner, t.ex. olika svar på frågan.

    <img src="/projects/storytime/img/editing7.gif" class="left" width="40%"/>
  </p>


  <p>
    Igenom att skapa ett flertal av dessa trådar och sedan koppla ihop dem igenom att
    dra kopplingar i form av linjer mellan ett svarsalternativ och den tråd man vill
    att ett svar ska leda till kan man skapa ett praktiskt taget obegränsat långt
    och avgrenat äventyr, varje tråd kan även kopplas till en plats och en karaktär,
    så frågan “vart åkte du?”s svarsalternativ “New York” kan leda till en tråd som
    har platsen New york som består av en bild med new york på samt en karaktär,
    t.ex. new york’s fiktionella borgmästare som står framför bilden på New York
    och frågar vad du vill göra i staden.

    <img src="/projects/storytime/img/newstory.gif" class="right" width="40%"/>
  </p>



  <p>
    När man skapar ett nytt äventyr får man även skapa ett lösenord som används
    för att låsa upp äventyret. För att ändra på ett äventyr behöver man låsa upp det.
    Besöker man ett äventyr utan att låsa upp det får man istället möjligheten
    att ta del av äventyret. 
  </p>


  <p>
    <img src="/projects/storytime/img/unlock.gif" class="center" width="60%"/>
    Alla äventyr sparas i en lista i applikationens startfas och ges en unik url med
    delningsmöjligheter så att man lätt kan dela med sig av sitt eget äventyr eller ta del av andras.
  </p>

</div>

      )}
    },

    stepform: {
      type: 'fun',
      title: 'Stegvis handledande formulärsutfyllning',
      slug: 'stepform',
      name: 'Interaktivt Formulär',
      path: '/projects/stepform/',
      backgroundURL: '',
      thumbURL: '/projects/stepform/img/stepform-thumb.png',
      thumbBigURL: '/projects/stepform/img/stepform-thumbbig.gif',
      sourceCodeURL: 'http:////codepen.io/Dunner/JGBJgE',
      frameURL: '//codepen.io/Dunner/embed/JGBJgE/?height=550&theme-id=light&default-tab=result&embed-version=2',
      frameHeight: 550,
      tech: ['Angular'],
      html: function() { return(

<div>

  <p>
    Ett interaktivt fomulär-koncept som ämnar göra ifyllandet av formulär mindre skrämmande
    och överväldigande utan att förlora översikten.
    Populärt och gafflat på codepen,
    även dykt upp i olika collections på internet såsom 
    <a href="http://freefrontend.com/css-forms/?ref=webdesignernews.com#interactive-forms">freefrontend.com</a>.
  </p>

</div>

      )}
    },



    cpicker: { 
      type: 'fun',
      title: 'Popup färgvalspalette',
      slug: 'cpicker',
      name: 'ColorPicker',
      path: '/projects/cpicker/',
      backgroundURL: '',
      thumbURL: '/projects/cpicker/img/cpicker-thumb.png',
      thumbBigURL: '/projects/cpicker/img/cpicker-thumbbig.png',
      sourceCodeURL: 'http:////codepen.io/Dunner/jWdEJv',
      frameURL: '//codepen.io/Dunner/embed/jWdEJv/?height=560&theme-id=light&default-tab=result&embed-version=2',
      frameHeight: 560,
      tech: ['Angular', 'jQuery'],
      html: function() { return(

<div>

  <p>
    Ett lättare popup-färgvalspalette ursprungligen skapad för DAJON,
    erbjuder otroligt snabb a färgval och omedelbar “preview” tack vare angulars dual-binding.
    Färgpaletten erbjuder något ovanligare alternativ i form av ett mörkhets- & transparensreglage,
    den erbjuder även en uppsättning av populära färger samt i mer anvancerade appliaktioner som DAJON;
    sparade färger som används på andra platser sorterade efter mest användning.
  </p>

</div>

      )}
    },




    avatarmaker: { 
      type: 'fun',
      title: 'Karaktärsskapare',
      slug: 'avatarmaker',
      name: 'Avatar Maker',
      path: '/projects/avatarmaker/',
      backgroundURL: '',
      thumbURL: '/projects/avatarmaker/img/avatarmaker-thumb.png',
      thumbBigURL: '/projects/avatarmaker/img/avatarmaker-thumbbig.png',
      sourceCodeURL: 'http:////codepen.io/Dunner/Nbjbqe',
      frameURL: '//codepen.io/Dunner/embed/Nbjbqe/?height=620&theme-id=light&default-tab=result&embed-version=2',
      frameHeight: 620,
      tech: ['Angular', 'Snap.svg', 'Canvas', 'Stylus'],
      html: function() { return(

<div>

  <img src="/projects/avatarmaker/img/layers.gif" class="right" width="40%"/>

  <p>
    En dynamisk karaktärsskapare som från en SVG-struktur kan tillåta en ihopsättning av en praktiskt
    taget oändlig uppsättning av unika karaktärer, applikationen plockar helt enkelt en bild där olika
    kroppsdelar och kännetecken såsom öron, näsor, hår, glasögon och ansiktsformer.
  </p>


  <p>
    Varje sådant kännetecken är en uppsättning av bildlager grupperade under kännetecknets namn, t,ex,
    “hats_cowboyhat”. gruppen innehåller alla lager som behövs för att måla en cowboy-hat och sedan döps
    det eller de lager som man vill ska kunna färgsättas till t.ex. “hats_cowboyhat--colorize”.
  </p>

  <img src="/projects/avatarmaker/img/colorhat.gif" class="center" width="60%"/>

  <p>
    SVG-bilden innehåller hela uppsättningar av olika öron, näsor, munnar och hattar och applikationen separerar dessa igenom
    att läsa av lager-grupper och sortera dessa. De lagergrupper som börjar med “eyebrows_” målas upp var för sig under eyebrows-fliken
    och gör vardera klickbar. klick väljer t.ex. cowboyhatten som den hatt din karaktär poserar med, det gör även hatten selekterad och
    ger användaren möjligheten att använda färgpaletten för att byta färg på den den del av hatten där detta gjorts möjligt.
  </p>

  <p class="small">
    Läs mer om färgpaletten i projektet <a href="#/projects/cpicker">ColorPicker</a>
  </p>

</div>

      )}
    },


  }
};

module.exports = projects;


// location.pathname.match(/^\/projects/)
