(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:0,name:"Arches",url:"assets/images/arches.jpeg",count:0,fact:"Arches National Park has over 2,000 natural stone arches."},{id:1,name:"Denali",url:"assets/images/denali.jpg",count:0,fact:"Denali's peak is 20,310 feet above sea level, making it the highest mountain in North America."},{id:2,name:"Everglades",url:"assets/images/everglades.jpg",count:0,fact:"The Everglades are home to thirteen endangered and ten threatened species."},{id:3,name:"Glacier",url:"assets/images/glacier.jpg",count:0,fact:"There are 762 lakes in Glacier National Park."},{id:4,name:"Grand Canyon",url:"assets/images/grandcanyon.jpg",count:0,fact:"The Grand Canyon was carved over some 6 million years."},{id:5,name:"Ise Royal",url:"assets/images/isleroyal.jpg",count:0,fact:"Isle Royal is the least visited park in the United States."},{id:6,name:"Olympic",url:"assets/images/olympic.jpg",count:0,fact:"Olympic protects a region of the North America\u2019s remaining temperate rain forests."},{id:7,name:"rockymountain",url:"assets/images/rockymountain.jpg",count:0,fact:"30% of Rocky Mountain National Park is above the tree line."},{id:8,name:"Smoky Mountains",url:"assets/images/smokymountains.jpg",count:0,fact:"Great Smoky Mountains National Park runs through Tennessee and North Carolina."},{id:9,name:"Yellowstone",url:"assets/images/yellowstone.jpeg",count:0,fact:"Yellowstone was the first designated National Park."},{id:10,name:"Yosemite",url:"assets/images/yosemite.jpeg",count:0,fact:"The Ahwaneechee Native Americans lived in the Yosemite Valley for at least 4,000 years."},{id:11,name:"Zion",url:"assets/images/zion.jpeg",count:0,fact:"289 species of birds live in Zion National Park."}]},,,,,,,,function(e,a,t){e.exports=t(25)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),o=t.n(r),i=(t(15),t(4)),c=t(5),l=t(7),u=t(6),m=t(8);t(17);var h=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)},g=t(1);t(19);var f=function(e){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("ul",null,s.a.createElement("li",{className:"brand"},s.a.createElement("a",{href:"/"},s.a.createElement("strong",null,"National Parks Clicky-Game!"))),s.a.createElement("li",null,s.a.createElement("h5",null,e.correct)),s.a.createElement("li",null,s.a.createElement("h5",null,"Score: ",e.score," | Top Score: ",e.high))))};t(21);var d=function(e){return s.a.createElement("div",{className:"fact-div"},s.a.createElement("p",null,e.fact))},p=(t(23),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={parks:g,guess:"Click on an image to begin",score:0,high:0,fact:""},t.shuffle=function(e){for(var a=[],t=0;t<e.length;++t)a[t]=t;var n,s,r=e.length;if(r)for(;--r;)n=a[s=Math.floor(Math.random()*(r+1))],a[s]=a[r],a[r]=n;for(var o=[],i=0;i<a.length;i++)o.push(e[a[i]]);return o},t.validate=function(e){var a=e.target.id;console.log(t.state.parks[a].count),t.state.parks[a].count>0?t.reset():(t.setState({guess:"Correct!"}),t.setState({score:t.state.score+1}),t.setState({fact:g[a].fact})),g[a].count+=1,t.setState({parks:t.shuffle(g)}),console.log(t.shuffle(g))},t.reset=function(){t.setState({guess:"Incorrect!"}),t.setState({score:0}),t.setState({fact:""});for(var e=0;e<g.length;e++)g[e].count=0;t.setState({parks:t.shuffle(g)}),t.state.score>t.state.high&&t.setState({high:t.state.score})},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f,{correct:this.state.guess,score:this.state.score,high:this.state.high}),s.a.createElement("div",{className:"container"},s.a.createElement(d,{fact:this.state.fact}),s.a.createElement(h,null,this.state.parks.map(function(a,t){return s.a.createElement("div",{id:a.id,className:"park-div",key:t,onClick:e.validate,style:{backgroundImage:"url("+a.url+")"}})}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.49844f81.chunk.js.map