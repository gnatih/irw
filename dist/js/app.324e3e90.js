(function(){"use strict";var e={2434:function(e,t,a){var i=a(9242),s=a(3396);function o(e,t,a,i,o,r){const n=(0,s.up)("header-navigation"),l=(0,s.up)("router-view"),c=(0,s.up)("footer-navigation");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("header",null,[(0,s.Wm)(n)]),(0,s.Wm)(l),(0,s.Wm)(c)])}var r=a(7139);const n={class:"navbar navbar-expand-lg p-0 mb-5"},l={class:"container"},c=(0,s.uE)('<a class="navbar-brand p-0" href="/"><img src="/images/irw-logo.png" class="img-fluid" width="200"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="text-secondary fa-solid fa-bars fs-1"></i></span></button>',2),d={id:"navbarSupportedContent",class:"collapse navbar-collapse"},u={class:"navbar-nav ms-auto mb-2 mb-lg-0"},m={class:"nav-item"},p=(0,s.Uk)("About"),h={class:"nav-item"},g=(0,s.Uk)("Exhibition"),b=(0,s._)("li",{class:"nav-item"},[(0,s._)("a",{href:"https://www.watermuseums.net/contacts/",class:"nav-link text-secondary",target:"_blank"},"Contact")],-1);function v(e,t,a,i,o,v){const f=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",n,[(0,s._)("div",l,[c,(0,s._)("div",d,[(0,s._)("ul",u,[(0,s._)("li",m,[(0,s.Wm)(f,{class:"nav-link text-secondary",to:"/about"},{default:(0,s.w5)((()=>[p])),_:1})]),(0,s._)("li",h,[(0,s.Wm)(f,{class:"nav-link",to:"/exhibition","data-cat-id":"Exhibition"},{default:(0,s.w5)((()=>[g])),_:1})]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.categories,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"nav-item"},[(0,s.Wm)(f,{class:"nav-link",to:"/category/"+e["Category"],"data-cat-id":e.Category},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.Category),1)])),_:2},1032,["to","data-cat-id"])])))),128)),b])])])])}var f={setup(){const e=(0,s.f3)("store"),t=(0,s.Fl)((()=>e.state.categories));return console.log(e),{categories:t}}},w=a(89);const y=(0,w.Z)(f,[["render",v]]);var x=y;const k=(0,s.uE)('<div class="break-bottom"><img src="/images/break-top.svg" alt="break-bottom"></div><footer class="my-5"><div class="container d-flex flex-column flex-md-row"><div class="d-flex flex-md-column justify-content-between mb-5 mb-md-auto"><div class="links order-2 order-md-1"><a href="/terms-and-conditions" class="d-md-block text-decoration-none mx-2 mx-md-auto">Terms &amp; Conditions</a><a href="https://www.watermuseums.net/contacts/" target="_blank" class="d-md-block text-decoration-none mx-2 mx-md-auto my-md-3">Contact Us</a></div><div class="social-icons order-1 order-md-2"><a href="https://www.facebook.com/wamunet/" class="text-secondary fs-5" target="_blank"><i class="fa-brands fa-facebook"></i></a><a href="https://www.instagram.com/wamunet/" class="text-secondary mx-3 fs-5" target="_blank"><i class="fa-brands fa-instagram"></i></a><a href="https://twitter.com/wamu_net" class="text-secondary me-3 fs-5"><i class="fa-brands fa-twitter" target="_blank"></i></a><a href="https://jm.linkedin.com/company/water-museums-global-network" class="text-secondary fs-5"><i class="fa-brands fa-linkedin" target="_blank"></i></a></div></div><div class="me-auto d-none d-lg-block ms-4"><a href="/"><img src="/images/irw-logo.png" alt="I Remember Water" width="180" class="img-fluid"></a></div><div class="d-flex justify-content-between gx-3"><a href="https://www.watermuseums.net/" target="_blank" data-org="wamunet" class="me-5"><img src="/images/wamunet-logo.png" width="300" alt=""></a><div><p style="margin-top:-3em;">Supported by</p><a href="https://www.livingwatersmuseum.org/" data-org="lwm" target="_blank"><img src="/images/LWM.png" alt="Living Waters Museum" width="200"></a></div></div></div><div class="text-center mt-5 mb-3">© Global Network of Water Museums 2022 | All rights reserved</div></footer>',2);function _(e,t){return k}const I={},T=(0,w.Z)(I,[["render",_]]);var M=T,S=a(4870),C=a(8019),E=a.n(C),A=a(4172),W=a.n(A),D=a(1425),U=a.n(D),N=a(4806);const P=(0,S.qj)({data:[],stories:[],categories:[],category:null,exhibition:[]}),O={async loadData(){const e="1grkdfQVI6GV-_cJuJQPdDpv9b_5IuS3nDvZPw5ehqzM",t="https://opensheet.elk.sh",a=new URL(window.location),i=""==a.searchParams.get("refresh"),s=localStorage.getItem("irw-storage");if(!s||i){console.log("..fetch data");const a=await fetch(`${t}/${e}/Entries`).then((e=>e.json())),i=await fetch(`${t}/${e}/Exhibition`).then((e=>e.json())),s=await fetch(`${t}/${e}/Categories`).then((e=>e.json()));for(const e in a){const t=a[e]["UNIVOCALCODE"];a[e].image={thumb:`/images/thumbs/${t}`,large:`/images/large/${t}`,micro:`/images/micro/${t}`}}for(const e in i){const t=i[e]["UNIVOCALCODE"];i[e].image={thumb:`/images/thumbs/${t}`,large:`/images/large/${t}`,micro:`/images/micro/${t}`}}const o=(0,N.groupBy)(a,"STORYID"),r=W()(o,(e=>E()(e)));P.data=a,P.stories=r,P.categories=U()(s,"Priority"),P.exhibition=i,localStorage.setItem("irw-storage",JSON.stringify({data:a,stories:r,categories:s,exhibition:i}))}else{console.log("..local data");const e=JSON.parse(s);P.data=e.data,P.categories=U()(e.categories,"Title"),P.stories=e.stories,P.exhibition=e.exhibition}}};var R={state:P,methods:O},H={components:{HeaderNavigation:x,FooterNavigation:M},setup(){(0,s.bv)((async()=>{R.methods.loadData()})),(0,s.JJ)("store",R)}};const F=(0,w.Z)(H,[["render",o]]);var L=F,j=a(678),z=a(990);const Y={class:"container"},q={class:"row"},G={class:"col d-none d-md-block"},$=["src"],B={class:"col d-md-none p-0 p-md-auto"},V=["src"],K=(0,s.uE)('<div class="container"><div class="row justify-content-center"><div class="clearfix"><div class="curatorial-note text-uppercase text-primary fw-bold my-3">Curatorial note</div></div><div class="col text-columns-2"><p>A <b>new &quot;culture of water&quot; cannot grow without memory</b>. Memories, whether they are sensory or emotional, short-term or long-term, material or immaterial, are fundamental to our existence as individuals and as collective societies.</p><p>The curatorial team of I Remember Water selected some meaningful <b>images that recall our past water memories and reflect on pathways that can help us shape our water futures.</b></p><p>From the ornate public fountains and household taps that in the last century provided free water to citizens in growing urban settlements to the impacts of climate change and our emotional relationships with water - all collected images illustrate <b>the rich diversity and the striking affinities of humankind&#39;s connections with water and its unique heritage across the world</b>.</p><p>However, while water is at the core of our bodies, our livelihoods and our social relationships, <b>water resources have been dammed, depleted, or polluted by human activity</b> rooted in limited engineering paradigms, visions of economic development at all costs, and growing transboundary conflicts. It&#39;s likely that in the future water will have enormous economic value, as the &#39;new petroleum&#39;.</p><p>Climate change has not only accentuated our failure to use and manage water wisely, but the dangers of too little or too much water (drought, floods and rising sea levels) have posed <b>new challenges to global water governance</b>.</p><p>Today, <b>we need to find new ways to connect people with their water heritage, build empathy and stimulate new perceptions and water awareness</b>, supporting the judicious use of our water legacies. And water museums have a key role to play in this process.</p><p> </p><a href="/irw-poster.pdf" class="btn-link text-uppercase text-decoration-none" target="_blank">Download Poster <i class="ms-2 fa fa-angle-down"></i></a></div></div></div><div class="break--top"><img src="/images/break-top.svg" alt="break-top"></div>',2),Z={class:"container"},J=(0,s.uE)('<div class="row"><div class="col py-3"><div class="d-inline-block" style="width:120px;"><img src="/images/icon_exhibition.svg" alt="Exhibition"></div><h3 class="mb-3 text-uppercase">Exhibition</h3><div class="bg-light p-4 d-flex align-items-center flex-column flex-md-row"><p>In this section, the curatorial team has selected the most representative images from 60 participating institutions and 6 artists from around the world to create an exhibition &#39;in hand&#39; - <b>a taster of the different &#39;water worlds&#39; exhibited by museums</b> affiliated to WAMU-NET. This selection is now available to all partners to illustrate <b>the diversity and similarity of humankind&#39;s connections with water and its heritage</b>. Images have been selected through a democratic process which involved all curators in intensive discussions to ensure that all pictures conveyed universal water memories.</p><div class="mx-4"><a href="/exhibition" class="d-inline-block btn btn-secondary my-3 text-uppercase text-nowrap">VIEW<i class="ms-2 fa fa-angle-right"></i></a></div></div></div></div><div class="row"><div class="col mx-auto py-3"><h3 class="my-3 text-uppercase">Categories</h3><p>In all, we received around 600 images and the curatorial team selected 462 from these to show vibrant and historical relationships with the most fundamental element of life. From water as the elixir of <b>Life</b> to recreation, <b>Play</b> and education; from water <b>Heritage</b> to our <b>Spiritual</b> and sacred connections with water; from water shaping our proximity and <b>Belonging</b> to a river, or a place, to the radical <b>Transformations</b> of waterscapes witnessed in the last century or so - each category was selected by an individual curator after hours of inspiring collective discussions.</p></div></div>',2),Q={class:"row"},X={class:"category-tabs col py-3"},ee={id:"category-tabs",class:"nav nav-tabs nav-fill flex-wrap flex-md-nowrap",role:"tablist"},te=["data-bs-target"],ae=["src","alt"],ie={id:"category-tabs-content",class:"tab-content my-2 bg-light p-3"},se=["id","aria-labelledby"],oe={class:"d-flex flex-column flex-md-row"},re={class:"mx-4 align-self-center"},ne=["href"],le=(0,s.Uk)("VIEW"),ce=(0,s._)("i",{class:"ms-2 fa fa-angle-right"},null,-1),de=[le,ce];function ue(e,t,a,i,o,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Y,[(0,s._)("div",q,[(0,s._)("div",G,[(0,s._)("img",{src:`/images/fp-sequence${i.fpIndex}.jpg`,alt:"I Remember Water..",class:"img-fluid"},null,8,$)]),(0,s._)("div",B,[(0,s._)("img",{src:`/images/fp-sequence-m${i.fpIndex}.jpg`,alt:"I Remember Water..",class:"img-fluid"},null,8,V)])])]),K,(0,s._)("div",Z,[J,(0,s._)("div",Q,[(0,s._)("div",X,[(0,s._)("ul",ee,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.categories,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:e.Priority,class:"nav-item",role:"presentation"},[(0,s._)("button",{class:(0,r.C_)({"nav-link":!0,active:0==t}),"data-bs-toggle":"tab","data-bs-target":`#${e.Category}-tab`,type:"button",role:"tab","aria-controls":"#","aria-selected":"true"},[(0,s._)("img",{src:`/images/icon_${e.Category.toLowerCase()}.svg`,alt:e.Category,class:"img-fluid"},null,8,ae),(0,s._)("div",null,(0,r.zw)(e.Category),1)],10,te)])))),128))]),(0,s._)("div",ie,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.categories,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{id:`${e.Category}-tab`,key:e.Priority,class:(0,r.C_)({"tab-pane":!0,"show active":0==t}),role:"tabpanel","aria-labelledby":`${e.Category}-tab`},[(0,s._)("div",oe,[(0,s._)("div",null,(0,r.zw)(e.short_text),1),(0,s._)("div",re,[(0,s._)("a",{href:`/category/${e.Category}`,class:"text-nowrap d-inline-block btn btn-secondary my-3 text-uppercase"},de,8,ne)])])],10,se)))),128))])])])])],64)}var me={name:"HomePage",setup(){const e=(0,s.f3)("store");let t=(0,s.Fl)((()=>e.state.categories)),a=Math.floor(5*Math.random())+1;return{categories:t,fpIndex:a}}};const pe=(0,w.Z)(me,[["render",ue]]);var he=pe;const ge=(0,s.uE)('<h2 class="text-center mb-5">About the Global Network of Water Museums</h2><div class="container"><div class="row"><div class="col text-columns-2"><p><a href="https://watermuseums.net" target="_blank">The Global Network of Water Museums</a> (WAMU-NET) is a non-profit organization based in Venice which aims to <b>re-connect people with water</b> and to all forms of water heritage (both natural and cultural heritages). WAMU-NET was established to promote <b>water awareness education</b> and foster <b>holistic and inter-disciplinary approaches</b> aimed at valuing any kind of water assets and legacies with regard to their natural, social, cultural, artistic, and spiritual dimensions.</p><p>In 2018, WAMU-NET was endorsed by the Council of the Inter-governmental Hydrological Programme as a <b>&#39;flagship initiative&#39; of UNESCO-IHP</b> with the Resolution n.5-XXIII, titled “The Global Network of Water Museum and UNESCO-IHP in support of water sustainability education and water awareness efforts”. In 2021, another Resolution (n.7-XXIV) was endorsed by the Intergovernmental Council of IHP to launch the process of creating a <b>World Inventory of water museums</b>.</p><p>Water museums display a <b>unique repository of different forms of humankind&#39;s connections with water and its natural and cultural heritage</b>. They exhibit artefacts, techniques and traditional knowledge aimed at preserving the world&#39;s outstanding variety of water-related assets and values. This key knowledge - inherited from countless generations - can still inspire <b>new perceptions and behaviours towards water</b> and therefore encourage <b>more far-sighted water management today</b>.</p><p>WAMU-NET cooperates with more than 70 museums and institutions located in 31 countries worldwide. The WAMU-NET network and all its members are seeking to promote innovative solutions to the global water crisis. While exploring the <b>fundamental values of any kind of water heritage</b> - whether natural or cultural, tangible or intangible - we look forward to re-connecting past water management practices to technical innovation in order to inspire more sustainable futures.</p><p><a href="/terms-and-conditions">Terms &amp; Conditions</a></p></div></div></div><div class="break-top my-5"><img src="/images/break-bottom.svg" alt=""></div><h2 class="text-center my-5">Participating Institutions</h2><div class="container"><div class="row"><div class="col text-columns-2"><p>Austria - Danube Water-Adventure, Marktgemeinde Engelhartszell</p><p>Bangladesh - Water Museum of Kalapara</p><p>Belgium - Hidrodoe, Herentals</p><p>Belgium - Musée de l’Eau et de la Fontaine, Ottignies</p><p>Burkina Faso - Musée de l’Eau, Ouagadougou</p><p>Canada - The Canadian Museum of Water</p><p>China - National Water Museum of China</p><p>China - Changjiang Civilization Museum, Wuhan</p><p>China - Baiheliang Underwater Museum, Chongqing</p><p>China - Yellow River Museum, Zhengzhou</p><p>Croatia - AQUATIKA / Freshwater Aquarium, Karlovac</p><p>France - Musée des Egouts, Paris</p><p>Germany - Water Museum of Bavaria ‘Haus am Strom’, Jochestein</p><p>Germany - Historisches Klaerwerk Krefeld</p><p>Greece - World Water Museum, travelling</p><p>Greece - Hydria Water Network, MIO-ECSDE</p><p>Hungary - Duna Museum, Esztergom</p><p>India - Water Museum of Udaipur, Rajasthan</p><p>India - Living Waters Museum</p><p>Iran - Yazd Water Museum</p><p>Italy - River Navigation Museum, Battaglia Terme, Padua</p><p>Italy - Water Museum of Ireland</p><p>Italy - Ecomuseum Martesana, Milano</p><p>Italy - Opificio delle Acque / Water Factory, Bologna</p><p>Italy - MUSE / Science Museum, Trento</p><p>Italy - Water Museum of Venice</p><p>Italy - University of Venice Ca&#39; Foscari</p><p>Italy - Natural History Museum / Fondazione Musei Civici, Venice</p><p>Italy - Regional Park Po Delta, Veneto Region</p><p>Italy - Paese dell’Acqua / Waterland, Sassinoro, Benevento</p><p>Italy - Ecomuseum of rice fields, rivers, and rural landscape of Mantua</p><p>Italy - National Archaeological Museum of Adria / City of Adria</p><p>Italy - HYDRA / Multimedia Museum of the Marmore Waterfalls, Terni</p><p>Italy - Italian National Association of Land Reclamation - ANBI, Rome</p><p>Macedonia - Water Museum of Ohrid</p><p>Mexico - Museo del Agua ‘Agua para Siempre’, Tehuacan</p><p>Morocco - Museum of Water Civilization in Morocco ‘Mohammed VI’</p><p>Portugal - Museu da Agua, Lisbon</p><p>Portugal - Parque Patrimonial das Aguas, Porto</p><p>Romania – AQUASERV Water Museum, Tirgu Mures</p><p>Romania – Water Museum ‘Leonida Truta’, Cluj</p><p>Romania - Aquapic Water Museum, Timisoara</p><p>Spain - Tribunal de les Aigües de la Vega de Valencia</p><p>Spain - AGBAR / Museu de les Aigües, Cornellà de Llobregat</p><p>Spain - Museu de la tècnica de Manresa / Parc de la Sèquia</p><p>Spain - Museos de Mequinenza</p><p>The Netherlands - Biesbosch Museumeiland, Werkendam</p><p>The Netherlands - Haarlemmermeer Museum De Cruquius</p><p>The Netherlands - Waterlinie Museum Fort Bij Vechten, Bunnik</p><p>The Netherlands - Broekerveiling Water Museum</p><p>The Netherlands - IHE DELFT Institute for Water Education</p><p>The Netherlands - Nederlands Watermuseum</p><p>The Netherlands - Museum Geelvinck</p><p>Turkey - Ab-I Hayat Anatolian Water Civilizations Museum</p><p>UK - National Waterways Museum, Ellesmere / Canal and River Trust</p><p>UK - Museum of Water, travelling</p><p>Uruguay - OSE Water Museum</p><p>USA - Keepers of the Waters</p><p>USA - Green Earth Alliance</p><p>USA - Our Humanity Matters</p></div></div></div><h2 class="text-center my-5">Participating Individuals</h2><div class="container"><div class="row"><div class="col text-columns-2"><p>France - Thierry Ruf</p><p>Italy - Giuseppe La Spada</p><p>Italy - Stefano Bertolucci</p><p>The Netherlands - Sandra De Vries</p><p>UK - Chris Wilmott</p><p>USA - Deborah Wasserman</p></div></div></div><h2 class="text-center my-5">Curators</h2><div class="container"><div class="row g-5"><div class="col-md-4"><b>Clive Adams</b><br><p>Clive Adams is a British curator with a special interest in art which explores humanity&#39;s place and special responsibilities within nature. From 2006-20 he was the founding director of the Centre for Contemporary Art and the Natural World and has had an involvement with WAMU-NET since its inception.</p></div><div class="col-md-4"><b>Sara Ahmed</b><br><p>Sara Ahmed is the Founder of the Living Waters Museum and an Adjunct Professor at the Centre for Water Research, Indian Institute of Science Education and Research, Pune, India. Sara serves on the boards of WaterAid India and Wetlands International South Asia, and as one of the Vice Presidents of WAMU-NET.</p></div><div class="col-md-4"><b>Giovanna Di Matteo</b><br><p>Giovanna Di Matteo is a postdoctoral researcher at the University of Padua. She holds an interuniversity Ph.D. in Human Geography at the University of Padua and Ca’ Foscari University of Venice. Her research interests include Critical Tourism, Migration Studies, Mobility Studies, Island Studies, Landscape and Cultural Heritage.</p></div><div class="col-md-4"><b>Eriberto Eulisse</b><br><p>Eriberto Eulisse is Executive Director and co-founder of the Global Network of Water Museums and Director of Civiltà dell’Acqua (‘Water Civilization’) International Centre. After specialization in museography and anthropology at the University of East Anglia, he worked in the Italian Alps as Curator of the Ethnographic Museum of Trentino.</p></div><div class="col-md-4"><b>Mário Mesquita</b><br><p>Architect, Urban Planner and Artist. Professor at Faculdade de Arquitectura da Universidade do Porto (FAUP). Researcher at CITCEM, i2ADS, and Águas e Energia do Porto. PhD in Architecture by FAUP. Master’s in urban Environment Planning and Design FAUP/FEUP. Scientific Director of Parque Patrimonial das Águas.</p></div><div class="col-md-4"><b>Tanja Andrejasic Wechsler </b><br><p>Tanja Andrejasic Wechsler is the creator of I AM WATER DROP - a reusable, glass water-drop-shaped bottle designed to inspire respect for water. She is also the founder and President of Our Humanity Matters (OHM), which aims at fostering more enlightened humanity to recognize water as the sacred foundation of Life.</p></div></div></div><div class="text-center my-5">Designed &amp; Developed by <a href="https://studioif.in/">Studio IF</a>, Ahmedabad, India</div>',10);function be(e,t){return ge}const ve={},fe=(0,w.Z)(ve,[["render",be]]);var we=fe;const ye={class:"container"},xe={class:"row"},ke={class:"col stories-swiper-wrapper"},_e=["href"],Ie=["src"],Te={class:"row my-3 my-md-5"},Me={class:"col-md-8 mx-auto"},Se={class:"text-center mb-5 mx-3 mt-0 mt-md-5 mx-md-auto"},Ce={key:0},Ee=["src","alt"],Ae=["src","alt"],We={key:1,class:"story-slide text-center"},De=["src","alt"],Ue={class:"story-info mt-5 text-center"},Ne={class:"story-description"},Pe={class:"text-center mt-3"},Oe={key:0,class:"d-block mb-2"},Re=(0,s._)("i",{class:"fa-solid fa-user me-2"},null,-1),He={class:"me-2"},Fe=(0,s._)("i",{class:"fa-solid fa-location-dot me-2"},null,-1),Le={class:"d-block d-md-inline-block mt-2 mt-md-0"},je=(0,s._)("i",{class:"fa-solid fa-landmark me-2"},null,-1);function ze(e,t,a,o,n,l){const c=(0,s.up)("swiper-slide"),d=(0,s.up)("swiper");return(0,s.wg)(),(0,s.iD)("div",ye,[(0,s._)("div",xe,[(0,s._)("div",ke,[(0,s._)("div",{class:"swiper-button-prev",onClick:t[0]||(t[0]=(...e)=>o.prevStory&&o.prevStory(...e))}),(0,s._)("div",{class:"swiper-button-next",onClick:t[1]||(t[1]=(...e)=>o.nextStory&&o.nextStory(...e))}),(0,s.Wm)(d,{id:"stories-swiper","initial-slide":o.initialSlide,"slides-per-view":"auto","centered-slides":!0,"center-insufficient-slides":!0,"space-between":15,class:"d-none d-md-block",onSwiper:o.swiperInit,onSlideChange:o.changeStorySwiper},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.all_stories,(e=>((0,s.wg)(),(0,s.j4)(c,{key:e.STORYID},{default:(0,s.w5)((()=>[(0,s._)("a",{href:"/story/"+e.STORYID},[(0,s._)("img",{src:e.image.micro},null,8,Ie)],8,_e)])),_:2},1024)))),128))])),_:1},8,["initial-slide","onSwiper","onSlideChange"])])]),(0,s._)("div",Te,[(0,s._)("div",Me,[(0,s._)("h2",Se,(0,r.zw)(o.stories[o.slide].TITLE),1),o.stories.length>1?((0,s.wg)(),(0,s.iD)("div",Ce,[(0,s.Wm)(d,{id:"story-swiper","auto-height":!0,modules:[o.Navigation,o.Thumbs],pagination:{clickable:!0},thumbs:{swiper:o.thumbsSwiper},onSlideChange:o.slideChange},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.stories,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(c,{key:e.ID,class:"story-slide text-center","data-story-id":e.STORYID},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.image.large,alt:e.TITLE,class:"img-fluid"},null,8,Ee)])),_:2},1032,["data-story-id"])),[[i.F8,e.image]]))),128))])),_:1},8,["modules","thumbs","onSlideChange"]),(0,s.Wm)(d,{modules:[o.Thumbs],"watch-slides-progress":"",class:"mt-3 thumbs-swiper","slides-per-view":"auto","center-insufficient-slides":!0,"space-between":15,onSwiper:o.setThumbsSwiper},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.stories,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(c,{key:e.ID,class:"text-center"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.image.micro,alt:e.TITLE+" thumbnail",class:"img-fluid"},null,8,Ae)])),_:2},1536)),[[i.F8,e.image]]))),128))])),_:1},8,["modules","onSwiper"])])):((0,s.wg)(),(0,s.iD)("div",We,[(0,s._)("img",{src:o.stories[o.slide].image.large,alt:o.stories[o.slide].TITLE,class:"img-fluid"},null,8,De)])),(0,s._)("div",Ue,[(0,s._)("div",Ne,(0,r.zw)(o.stories[o.slide].DESCRIPTION),1),(0,s._)("div",Pe,[o.stories[o.slide].AUTHORS?((0,s.wg)(),(0,s.iD)("span",Oe,[Re,(0,s.Uk)((0,r.zw)(o.stories[o.slide].AUTHORS),1)])):(0,s.kq)("",!0),(0,s._)("span",He,[Fe,(0,s.Uk)((0,r.zw)(o.stories[o.slide].COUNTRY),1)]),(0,s._)("span",Le,[je,(0,s.Uk)((0,r.zw)(o.stories[o.slide].MUSEUMNAME),1)])])])])])])}var Ye=a(8008),qe=a(7243),Ge=a(2579),$e=a.n(Ge),Be={components:{Swiper:Ye.tq,SwiperSlide:Ye.o5},beforeRouteEnter(e,t,a){a((e=>{e.store.state.category&&(e.store.state.category=t.params.slug)}))},setup(){const e=(0,s.f3)("store"),t=(0,j.yj)(),a=(0,S.iH)(0),i=(0,S.iH)(null),o=t.params.sid,r=(0,s.Fl)((()=>e.state.data.filter((e=>parseInt(e.STORYID)==o)))),n=(0,s.Fl)((()=>e.state.stories.filter((e=>"1"==e[c.value])))),l=(0,s.Fl)((()=>$e()(n.value,(e=>parseInt(e.STORYID)==o)))),c=(0,s.Fl)((()=>{let t=[];for(let e in r.value[0])"1"==r.value[0][e]&&"IMAGE"!==e&&t.push(e);return t.length&&(e.state.category=t[0],document.title="Category | "+t[0]+" | I Remember Water"),(0,s.Y3)((()=>{const e=document.querySelector(`[data-cat-id="${t[0]}"]`);e.classList.add("router-link-active")})),e.state.category})),d=e=>{a.value=e.activeIndex},u=e=>{i.value=e},m=e=>{l&&(e.activeIndex=l.value,e.preventInteractionOnTransition=!0,e.loadPrevNext=!0,e.loadPrevNextAmount=10)},p=e=>{e.activeIndex=l.value},h=()=>{let e=n.value[l.value+1];e&&(window.location.href="/story/"+e.STORYID)},g=()=>{let e=n.value[l.value-1];e&&(window.location.href="/story/"+e.STORYID)};return{store:e,all_stories:n,stories:r,Navigation:qe.W_,Lazy:qe.oM,Thumbs:qe.o3,slide:a,slideChange:d,thumbsSwiper:i,setThumbsSwiper:u,initialSlide:l,category:c,swiperInit:m,changeStorySwiper:p,nextStory:h,prevStory:g}}};const Ve=(0,w.Z)(Be,[["render",ze]]);var Ke=Ve;const Ze={class:"container"},Je={class:"row"},Qe=(0,s._)("div",{class:"break--top mb-3 mb-md-5"},[(0,s._)("img",{src:"/images/break-bottom.svg",alt:"break-top"})],-1),Xe={class:"container mb-5"},et={class:"row"},tt=["innerHTML"],at={class:"container main"},it={"transition-duration":"0.5s","item-selector":".col",class:"row row-cols-2 row-cols-md-3 gx-4 mb-5 masonry"},st=["src"],ot={class:"mt-3 mb-0 fs-5 fs-md-auto"};function rt(e,t,a,i,o,n){const l=(0,s.up)("category-header"),c=(0,s.up)("router-link"),d=(0,s.Q2)("masonry-tile"),u=(0,s.Q2)("masonry");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Ze,[(0,s._)("div",Je,[(0,s.Wm)(l,{category:i.category},null,8,["category"])])]),Qe,(0,s._)("div",Xe,[(0,s._)("div",et,[(0,s._)("div",{class:"col text-columns-2",innerHTML:i.category_meta.Long_text},null,8,tt)])]),(0,s._)("div",at,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",it,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.filtered_stories,(e=>((0,s.wg)(),(0,s.iD)(s.HY,{key:e.ID},[e.image?(0,s.wy)(((0,s.wg)(),(0,s.j4)(c,{key:0,class:"col mb-3",to:`/story/${e.STORYID}`},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.image.thumb,alt:"",class:"img-fluid w-100 shadow border"},null,8,st),(0,s._)("h5",ot,(0,r.zw)(e.TITLE),1),(0,s._)("div",null,(0,r.zw)(e.COUNTRY),1)])),_:2},1032,["to"])),[[d]]):(0,s.kq)("",!0)],64)))),128))])),[[u]])])],64)}const nt={class:"col d-flex align-items-center"},lt={class:"ratio ratio-1x1 float-end",style:{width:"100px"}},ct=["src"],dt={class:"page-title ms-2 me-auto"},ut=["src","alt"];function mt(e,t,a,i,o,n){return(0,s.wg)(),(0,s.iD)("div",nt,[(0,s._)("div",lt,[(0,s._)("img",{src:`/images/icon_${a.category.toLowerCase()}.svg`,alt:""},null,8,ct)]),(0,s._)("h2",dt,(0,r.zw)(a.category),1),(0,s._)("img",{src:`/images/il_${a.category.toLowerCase()}.svg`,width:"200",alt:a.category,class:"d-none d-md-block ms-auto"},null,8,ut)])}var pt={props:{category:String}};const ht=(0,w.Z)(pt,[["render",mt]]);var gt=ht,bt={components:{CategoryHeader:gt},setup(){const e=(0,s.f3)("store"),t=(0,j.yj)(),a=(0,s.Fl)((()=>t.params.slug));let i=(0,s.Fl)((()=>e.state.stories.filter((e=>"1"==e[a.value])))),o=(0,s.Fl)((()=>E()(e.state.categories.filter((e=>e.Category==a.value)))));return{category:a,category_meta:o,store:e,filtered_stories:i}}};const vt=(0,w.Z)(bt,[["render",rt]]);var ft=vt;const wt={class:"container"},yt=(0,s.uE)('<div class="break--top mb-5"><img src="/images/break-bottom.svg"></div><div class="container"><div class="row"><div class="col text-columns-2">In this section, the curatorial team has selected the most representative images from 60 participating institutions and 6 artists from around the world to create an exhibition ‘in hand’ - a taster of the different ‘water worlds’ exhibited by museums affiliated to WAMU-NET. This selection is now available to all partners to illustrate the diversity and similarity of humankind’s connections with water and its heritage. Images have been selected through a democratic process which involved all curators in intensive discussions to ensure that all pictures conveyed universal water memories.</div></div></div>',2),xt={class:"container main"},kt={class:"exhibition-grid"},_t=["href"],It=["src","alt"],Tt={class:"mt-3"},Mt={class:""};function St(e,t,a,i,o,n){const l=(0,s.up)("category-header");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",wt,[(0,s.Wm)(l,{category:"Exhibition"})]),yt,(0,s._)("div",xt,[(0,s._)("div",kt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.exhibitions,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.TITLE,class:"exhibition-tile"},[(0,s._)("a",{href:`/exhibition/${e.UUID}`},[(0,s._)("img",{src:`${e.image.thumb}`,alt:e.TITLE,class:"shadow img-fluid w-100"},null,8,It),(0,s._)("h4",Tt,(0,r.zw)(e.TITLE),1),(0,s._)("span",Mt,(0,r.zw)(e.COUNTRY)+" | Category: "+(0,r.zw)(e.CATEGORY),1)],8,_t)])))),128))])])],64)}var Ct={components:{CategoryHeader:gt},setup(){const e=(0,s.f3)("store");console.log(e.state.exhibition);const t=(0,s.Fl)((()=>e.state.exhibition));return{exhibitions:t}}};const Et=(0,w.Z)(Ct,[["render",St]]);var At=Et;const Wt={class:"container exhibitions-swiper-wrapper"},Dt={class:"row"},Ut={class:"col"},Nt=["href"],Pt=["src"],Ot={class:"row"},Rt={class:"col"},Ht={class:"mx-3 mx-md-auto text-center my-0"},Ft={class:"row my-3 my-md-5"},Lt={class:"col-md-8 mx-auto"},jt={class:"story-slide text-center"},zt=["src"],Yt={class:"story-info mt-5 text-center"},qt={class:"story-description"},Gt={class:"mt-4"},$t={key:0,class:"d-block mb-2"},Bt=(0,s._)("i",{class:"fa-solid fa-user me-2"},null,-1),Vt={class:"me-2"},Kt=(0,s._)("i",{class:"fa-solid fa-location-dot me-2"},null,-1),Zt={class:"d-block d-md-inline-block mt-2 mt-md-0"},Jt=(0,s._)("i",{class:"fa-solid fa-landmark me-2"},null,-1);function Qt(e,t,a,i,o,n){const l=(0,s.up)("swiper-slide"),c=(0,s.up)("swiper");return(0,s.wg)(),(0,s.iD)("div",Wt,[(0,s._)("div",Dt,[(0,s._)("div",Ut,[(0,s._)("div",{class:"swiper-button-prev",onClick:t[0]||(t[0]=(...e)=>i.prevExhibit&&i.prevExhibit(...e))}),(0,s._)("div",{class:"swiper-button-next",onClick:t[1]||(t[1]=(...e)=>i.nextExhibit&&i.nextExhibit(...e))}),(0,s.Wm)(c,{id:"exhibitions-swiper","slides-per-view":"auto","auto-height":!0,"initial-slide":i.initialSlide,"centered-slides":!0,"space-between":15,class:"mb-5 d-none d-md-block",onSwiper:i.swiperInit,onSlideChange:i.swiperChange},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.exhibitions,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.UUID,class:"text-center"},{default:(0,s.w5)((()=>[(0,s._)("a",{href:"/exhibition/"+e.UUID},[(0,s._)("img",{src:`https://irememberwater.watermuseums.net/images/micro/${e.UNIVOCALCODE}`},null,8,Pt)],8,Nt)])),_:2},1024)))),128))])),_:1},8,["initial-slide","onSwiper","onSlideChange"])])]),(0,s._)("div",Ot,[(0,s._)("div",Rt,[(0,s._)("h2",Ht,(0,r.zw)(i.exhibition.TITLE),1)])]),(0,s._)("div",Ft,[(0,s._)("div",Lt,[(0,s._)("div",jt,[(0,s._)("img",{src:i.exhibition.image.large,class:"img-fluid"},null,8,zt)]),(0,s._)("div",Yt,[(0,s._)("div",qt,(0,r.zw)(i.exhibition.DESCRIPTION),1),(0,s._)("div",Gt,[i.exhibition.AUTHORS?((0,s.wg)(),(0,s.iD)("span",$t,[Bt,(0,s.Uk)((0,r.zw)(i.exhibition.AUTHORS),1)])):(0,s.kq)("",!0),(0,s._)("span",Vt,[Kt,(0,s.Uk)((0,r.zw)(i.exhibition.COUNTRY),1)]),(0,s._)("span",Zt,[Jt,(0,s.Uk)((0,r.zw)(i.exhibition.MUSEUMNAME),1)])])])])])])}var Xt={components:{Swiper:Ye.tq,SwiperSlide:Ye.o5},setup(){const e=(0,s.f3)("store"),t=(0,j.yj)(),a=t.params.id,i=(0,s.Fl)((()=>E()(e.state.exhibition.filter((e=>parseInt(e.UUID)==a))))),o=(0,s.Fl)((()=>e.state.exhibition)),r=(0,s.Fl)((()=>$e()(e.state.exhibition,(e=>parseInt(e.UUID)==a))));(0,s.Y3)((()=>{const e=document.querySelector('[data-cat-id="Exhibition"]');document.title="Exhibition | "+i.value.CATEGORY+" | I Remember Water",e.classList.add("router-link-active")}));const n=e=>{e.activeIndex=r.value},l=e=>{e.activeIndex=r.value,console.log(e),e.autoHeight=!0},c=()=>{let e=o.value[r.value+1];e&&(window.location.href="/exhibition/"+e.UUID)},d=()=>{let e=o.value[r.value-1];e&&(window.location.href="/exhibition/"+e.UUID)};return{exhibitions:o,exhibition:i,swiperInit:l,swiperChange:n,initialSlide:r,nextExhibit:c,prevExhibit:d}}};const ea=(0,w.Z)(Xt,[["render",Qt]]);var ta=ea;const aa=(0,s.uE)('<h2 class="text-center mb-5">Terms &amp; Conditions</h2><div class="container"><div class="row"><div class="col mx-auto"><p>The promoter of this exhibition is the Global Network of Water Museums (WAMU-NET), which is a UNESCO-IHP “flagship initiative”, but which does not represent the opinions of UNESCO or IHP.</p><p>There is no entry fee to participate in this exhibition, but all contributors must be members of WAMU-NET, or be affiliated to (and send their works through) a member</p><p>After the deadline of December 20th 2021, no further entries for the exhibition will be accepted.</p><p>By entering this exhibition, all museum members and individual members agree to be bound by these Terms and Conditions and declare to hold copyrights of the submitted works. WAMU-NET cannot be held responsible for improper use of copyrights by contributors or false declarations.</p><p>By submitting any work, and agreeing to the present Terms and Conditions, the entrant is consenting the work to be used by WAMU-NET on its website, blogs and social media channels.</p><p>All works and data collected will be stored by the Global Network in a secure online archive, which will be managed and used only by the WAMU-NET staff for the purpose of this exhibition.</p><p>All personal data gathered by WAMU-NET will be kept safe according to European GDPR regulations (General Data Protection Regulation), as detailed below in the Notice on Privacy and Treatment of Personal Data.</p></div></div></div><h2 class="text-center my-5 text-uppercase">Notice on Privacy and Treatment of Personal Data</h2><div class="container mb-5"><div class="row"><div class="col mx-auto"> The Global Network of Water Museums, pursuant to art. 13 of the European Data Protection Regulation 679/2016 (GDPR), informs that the processing of personal data, represented by drawings, photos and videos, will be carried out both on-line and on paper in compliance with European legislation and the principles of correctness, lawfulness, transparency and confidentiality. Your personal data will be used for the purposes of promoting only the activity carried out by the Global Network of Water Museums. The granting of consent to the dissemination of personal data through websites, printed media and / or any other means of electronic distribution is optional. At any time, it is possible to exercise the rights indicated in articles 15,16,17,18 of the European GDPR with the revocation of this authorization, cancellation, rectification, or integration of data. These rights can be exercised by sending written notice to the data controller at: <b>info@watermuseums.net</b></div></div></div>',4);function ia(e,t,a,i,s,o){return aa}var sa={};const oa=(0,w.Z)(sa,[["render",ia]]);var ra=oa;const na=[{path:"/",name:"home",component:he},{path:"/exhibition",name:"exhibition",component:At},{path:"/exhibition/:id",name:"exhibition-detail",component:ta},{path:"/category/:slug",name:"category",component:ft},{path:"/story/:sid",name:"story",component:Ke},{path:"/about",name:"about",component:we},{path:"/terms-and-conditions",name:"terms",component:ra}],la=(0,j.p7)({history:(0,j.PO)(),routes:na});(0,z.iq)(la),la.afterEach((()=>{const e=document.getElementById("navbarSupportedContent");e.classList.remove("show");const t=document.querySelectorAll(".nav-link");t.forEach((e=>e.classList.remove("router-link-active")))}));var ca=la,da=(a(8937),a(3693));let ua=(0,i.ri)(L);ua.use(da.Z),ua.use(z.ZP,{property:{id:"G-20YQJNJ7X8"}},ca),ua.use(ca),ua.mount("#app")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,o){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],o=e[d][2];for(var n=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(n=!1,o<r&&(r=o));if(n){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,r=i[0],n=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(l)var d=l(a)}for(t&&t(i);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},i=self["webpackChunkirw"]=self["webpackChunkirw"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(2434)}));i=a.O(i)})();
//# sourceMappingURL=app.324e3e90.js.map