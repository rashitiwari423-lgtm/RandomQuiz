/* ════════════════════════════════════════════
   ANIMATED CIRCUIT BACKGROUND
════════════════════════════════════════════ */
(function(){
  const cv=document.getElementById('bg-canvas'),ctx=cv.getContext('2d');
  let W,H,nodes=[],pulses=[];
  function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;initNodes();}
  function initNodes(){nodes=[];const c=Math.floor(W*H/26000);for(let i=0;i<c;i++)nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*2+1});}
  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='rgba(59,130,246,0.035)';ctx.lineWidth=1;
    for(let x=0;x<W;x+=55){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=55){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    for(let i=0;i<nodes.length;i++){for(let j=i+1;j<nodes.length;j++){const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<155){ctx.strokeStyle=`rgba(59,130,246,${0.11*(1-d/155)})`;ctx.lineWidth=0.55;ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.stroke();}}}
    pulses=pulses.filter(p=>p.t<=1);
    for(const p of pulses){if(p.from>=nodes.length||p.to>=nodes.length)continue;const f=nodes[p.from],t=nodes[p.to],x=f.x+(t.x-f.x)*p.t,y=f.y+(t.y-f.y)*p.t,g=ctx.createRadialGradient(x,y,0,x,y,7);g.addColorStop(0,'rgba(139,92,246,0.85)');g.addColorStop(1,'rgba(139,92,246,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.fill();p.t+=p.speed;}
    if(Math.random()<0.025&&nodes.length>1){const a=Math.floor(Math.random()*nodes.length);let b;do{b=Math.floor(Math.random()*nodes.length);}while(b===a);pulses.push({from:a,to:b,t:0,speed:0.009+Math.random()*0.007});}
    for(const n of nodes){ctx.fillStyle='rgba(99,179,237,0.5)';ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fill();n.x+=n.vx;n.y+=n.vy;if(n.x<0)n.x=W;if(n.x>W)n.x=0;if(n.y<0)n.y=H;if(n.y>H)n.y=0;}
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',resize);resize();draw();
})();

/* ════════════════════════════════════════════
   QUESTION BANK — 200 SHORT, TRICKY, FAST QUESTIONS
  For 2nd-year B.Tech / 90-second challenge
════════════════════════════════════════════ */
const QB=[
/* ── LOGICAL REASONING ── */
{id:1,cat:"Logical Reasoning",q:"All roses are flowers. Some flowers fade quickly. Which conclusion MUST be true?",ops:["All roses fade quickly","Some roses fade quickly","No rose fades quickly","Some flowers are roses"],ans:"Some flowers are roses"},
{id:2,cat:"Logical Reasoning",q:"P > Q > R and S > P. Who is definitely the highest?",ops:["P","Q","S","R"],ans:"S"},
{id:3,cat:"Logical Reasoning",q:"3 cats kill 3 rats in 3 minutes. In how many minutes will 9 cats kill 9 rats?",ops:["9","3","27","1"],ans:"3"},
{id:4,cat:"Logical Reasoning",q:"60 students: 40 play cricket, 30 play football, every student plays at least one. How many play ONLY cricket?",ops:["10","20","30","40"],ans:"30"},
{id:5,cat:"Logical Reasoning",q:"If all Zips are Zaps and no Zaps are Zops, then:",ops:["Some Zips are Zops","No Zip is a Zop","All Zops are Zips","Cannot say"],ans:"No Zip is a Zop"},
{id:6,cat:"Logical Reasoning",q:"Some books are pens. All pens are erasers. Which is definitely true?",ops:["All books are erasers","Some erasers are books","No book is an eraser","All erasers are pens"],ans:"Some erasers are books"},
{id:7,cat:"Logical Reasoning",q:"'All programmers drink coffee. Ram drinks coffee.' Therefore:",ops:["Ram is a programmer","Ram might be a programmer","Ram is not a programmer","Ram drinks only coffee"],ans:"Ram might be a programmer"},
{id:8,cat:"Logical Reasoning",q:"If 1=5, 2=10, 3=15, 4=20, then 5=?",ops:["25","1","5","30"],ans:"1"},
{id:9,cat:"Logical Reasoning",q:"Every Friday is a holiday. Today is a holiday. What can we conclude?",ops:["Today is Friday","Today may or may not be Friday","Today is definitely not Friday","Today is a weekday"],ans:"Today may or may not be Friday"},
{id:10,cat:"Logical Reasoning",q:"6 people shake hands with each other exactly once. Total handshakes?",ops:["12","15","18","30"],ans:"15"},
{id:11,cat:"Logical Reasoning",q:"A is 2 years older than B, who is twice as old as C. A+B+C = 27. How old is B?",ops:["8","10","12","9"],ans:"10"},
{id:12,cat:"Logical Reasoning",q:"5 friends sit in a row. A is right of B, C is left of D, B is left of C, E is rightmost. Who is in the middle?",ops:["A","B","C","D"],ans:"C"},
{id:13,cat:"Logical Reasoning",q:"From: 'Some A are B. No B is C.' What is definitely true?",ops:["No A is C","Some A are not C","All C are A","Some B are A"],ans:"Some A are not C"},
{id:14,cat:"Logical Reasoning",q:"Some students are lazy. Some lazy people fail exams. Therefore:",ops:["Some students fail","Some students don't fail","This doesn't let us conclude about students failing","All lazy students fail"],ans:"This doesn't let us conclude about students failing"},
{id:15,cat:"Logical Reasoning",q:"5 people seated around a circular table. How many distinct arrangements are possible?",ops:["120","24","5","60"],ans:"24"},
{id:16,cat:"Logical Reasoning",q:"'She is the sister of the son of the wife of my father.' Who is she to me?",ops:["Daughter","Sister","Cousin","Niece"],ans:"Sister"},
{id:17,cat:"Logical Reasoning",q:"P → Q, Q → R, R → S. If S is false, what can we say about P?",ops:["P is true","P is false","Nothing about P","P is uncertain"],ans:"P is false"},
{id:18,cat:"Logical Reasoning",q:"Find the odd one out: 49, 64, 81, 100, 112",ops:["49","64","100","112"],ans:"112"},
{id:19,cat:"Logical Reasoning",q:"A man said to a woman: 'Your only brother's only sister is my wife.' How is the woman related to the man?",ops:["Wife","Sister-in-law","Mother-in-law","Sister"],ans:"Sister-in-law"},
{id:20,cat:"Logical Reasoning",q:"Riya said: 'If I were not here, Priya would be the best.' Riya is currently:",ops:["Second best","The best","Equal to Priya","Unknown"],ans:"The best"},
/* ── BODMAS / QUICK MATH ── */
{id:21,cat:"BODMAS / Math",q:"2 + 3 × 4 – 1 = ?",ops:["19","13","15","20"],ans:"13"},
{id:22,cat:"BODMAS / Math",q:"(4 + 5)² – (3 × 5) = ?",ops:["66","81","60","56"],ans:"66"},
{id:23,cat:"BODMAS / Math",q:"48 ÷ 4(9 – 3) = ?",ops:["72","2","6","288"],ans:"2"},
{id:24,cat:"BODMAS / Math",q:"If + means ×, × means –, – means ÷, ÷ means +: 6 + 3 – 2 × 4 ÷ 1 = ?",ops:["5","10","7","4"],ans:"5"},
{id:25,cat:"BODMAS / Math",q:"√144 + √81 – √25 = ?",ops:["16","14","21","12"],ans:"16"},
{id:26,cat:"BODMAS / Math",q:"x + y = 10 and xy = 21. What is x² + y²?",ops:["52","58","64","46"],ans:"58"},
{id:27,cat:"BODMAS / Math",q:"What is the units digit of 7⁴⁷?",ops:["7","3","1","9"],ans:"3"},
{id:28,cat:"BODMAS / Math",q:"Remainder when 2¹⁰⁰ is divided by 3?",ops:["0","1","2","3"],ans:"1"},
{id:29,cat:"BODMAS / Math",q:"(5³ × 5⁴) ÷ 5⁵ = ?",ops:["5","25","125","1"],ans:"25"},
{id:30,cat:"BODMAS / Math",q:"3³ + 4³ = ?",ops:["91","99","64","35"],ans:"91"},
{id:31,cat:"BODMAS / Math",q:"A number is increased by 20%, then decreased by 20%. Net change?",ops:["0%","–4%","+4%","–2%"],ans:"–4%"},
{id:32,cat:"BODMAS / Math",q:"100! ends in how many trailing zeros?",ops:["20","22","24","25"],ans:"24"},
{id:33,cat:"BODMAS / Math",q:"What is 111 × 111?",ops:["12321","11111","12211","11211"],ans:"12321"},
{id:34,cat:"BODMAS / Math",q:"If a ★ b = a² – b, then 5 ★ 3 = ?",ops:["22","28","10","14"],ans:"22"},
{id:35,cat:"BODMAS / Math",q:"The product of two consecutive integers is 182. What is the smaller integer?",ops:["12","13","14","11"],ans:"13"},
/* ── NUMBER SERIES ── */
{id:36,cat:"Number Series",q:"2, 5, 11, 23, 47, ?",ops:["93","95","97","89"],ans:"95"},
{id:37,cat:"Number Series",q:"3, 6, 11, 18, 27, ?",ops:["36","38","40","35"],ans:"38"},
{id:38,cat:"Number Series",q:"100, 97, 91, 82, 70, ?",ops:["55","57","58","54"],ans:"55"},
{id:39,cat:"Number Series",q:"4, 6, 12, 14, 28, 30, ?",ops:["56","60","62","64"],ans:"60"},
{id:40,cat:"Number Series",q:"1, 8, 27, 64, 125, ?",ops:["196","216","215","225"],ans:"216"},
{id:41,cat:"Number Series",q:"5, 10, 13, 26, 29, 58, ?",ops:["61","116","60","62"],ans:"61"},
{id:42,cat:"Number Series",q:"7, 11, 16, 22, 29, ?",ops:["36","37","38","40"],ans:"37"},
{id:43,cat:"Number Series",q:"8, 15, 24, 35, 48, ?",ops:["60","63","65","70"],ans:"63"},
{id:44,cat:"Number Series",q:"2, 4, 3, 9, 4, 16, 5, ?",ops:["6","20","25","18"],ans:"25"},
{id:45,cat:"Number Series",q:"3, 5, 9, 17, 33, ?",ops:["63","65","67","59"],ans:"65"},
{id:46,cat:"Number Series",q:"6, 13, 25, 51, 103, ?",ops:["205","207","206","210"],ans:"207"},
{id:47,cat:"Number Series",q:"2, 6, 12, 20, 30, 42, ?",ops:["55","56","58","60"],ans:"56"},
{id:48,cat:"Number Series",q:"144, 121, 100, 81, 64, ?",ops:["49","47","50","48"],ans:"49"},
{id:49,cat:"Number Series",q:"1, 2, 6, 24, 120, ?",ops:["240","360","720","600"],ans:"720"},
{id:50,cat:"Number Series",q:"4, 8, 24, 48, 144, ?",ops:["288","192","432","240"],ans:"288"},
/* ── ALPHABET SERIES ── */
{id:51,cat:"Alphabet Series",q:"AZ, BY, CX, DW, ?",ops:["EV","EU","FV","EW"],ans:"EV"},
{id:52,cat:"Alphabet Series",q:"Z, W, T, Q, ?",ops:["N","M","O","P"],ans:"N"},
{id:53,cat:"Alphabet Series",q:"BC, EF, HI, KL, ?",ops:["MN","NO","NP","OP"],ans:"NO"},
{id:54,cat:"Alphabet Series",q:"JAK, KBL, LCM, MDN, ?",ops:["NEP","NEO","OEP","MFO"],ans:"NEO"},
{id:55,cat:"Alphabet Series",q:"DCBA, HGFE, LKJI, ?",ops:["PONM","NMLK","PNMO","ONML"],ans:"PONM"},
{id:56,cat:"Alphabet Series",q:"A, C, F, J, O, ?",ops:["U","T","V","W"],ans:"U"},
{id:57,cat:"Alphabet Series",q:"A2, C4, E8, G16, ?",ops:["H32","I32","I16","J32"],ans:"I32"},
{id:58,cat:"Alphabet Series",q:"BEH, KNQ, TWZ, ?",ops:["CFI","CEI","CFJ","DEI"],ans:"CFI"},
{id:59,cat:"Alphabet Series",q:"Y, X, V, S, ?",ops:["N","O","P","Q"],ans:"O"},
{id:60,cat:"Alphabet Series",q:"If A = Z and B = Y (mirror), what is the code for the word CAT?",ops:["ZZG","XZG","ZAG","XAG"],ans:"XZG"},
{id:61,cat:"Alphabet Series",q:"QAR, RBS, SCT, TDU, ?",ops:["UEV","VEW","UEW","UDV"],ans:"UEV"},
{id:62,cat:"Alphabet Series",q:"O, T, T, F, F, S, S, E, ?",ops:["N","T","E","O"],ans:"N"},
/* ── BLOOD RELATIONS ── */
{id:63,cat:"Blood Relations",q:"A man points to a woman and says: 'Her mother is my mother's only daughter.' Who is she?",ops:["His daughter","His niece","His sister","His cousin"],ans:"His daughter"},
{id:64,cat:"Blood Relations",q:"'He is the only son of my father's only daughter.' He is the speaker's:",ops:["Brother","Son","Nephew","Cousin"],ans:"Son"},
{id:65,cat:"Blood Relations",q:"X's mother's brother's son is Y. Y is X's:",ops:["Uncle","Cousin","Brother","Nephew"],ans:"Cousin"},
{id:66,cat:"Blood Relations",q:"A says to B: 'Your mother's husband's sister is my aunt.' B is A's:",ops:["Cousin","Brother or Sister","Nephew","Uncle"],ans:"Brother or Sister"},
{id:67,cat:"Blood Relations",q:"'He is the son of my grandfather's only son.' They are:",ops:["Uncle-Nephew","Brothers","Father-Son","Cousins"],ans:"Brothers"},
{id:68,cat:"Blood Relations",q:"A man's father's father's only child is the man's:",ops:["Uncle","Father","Grandfather","Himself potentially"],ans:"Father"},
{id:69,cat:"Blood Relations",q:"A is B's sister. C is B's mother. D is C's father. A is D's:",ops:["Granddaughter","Daughter","Niece","Great-granddaughter"],ans:"Granddaughter"},
{id:70,cat:"Blood Relations",q:"'This person's mother is the only daughter of my mother.' Who is the person to the speaker?",ops:["Sister","Mother","Niece","Herself"],ans:"Niece"},
{id:71,cat:"Blood Relations",q:"Aman is Bina's brother. Bina is Charu's daughter. Dhruv is Charu's husband. Aman is Dhruv's:",ops:["Son","Brother","Nephew","Son-in-law"],ans:"Son"},
{id:72,cat:"Blood Relations",q:"P is Q's father. R is Q's sister. S is P's mother. How is R related to S?",ops:["Daughter","Granddaughter","Niece","Daughter-in-law"],ans:"Granddaughter"},
{id:73,cat:"Blood Relations",q:"'He is the husband of the granddaughter of my grandfather.' How is he related to the speaker?",ops:["Husband","Brother-in-law","Son-in-law","Nephew"],ans:"Husband"},
{id:74,cat:"Blood Relations",q:"A girl says: 'He is the son of the son of my grandfather.' The boy is her:",ops:["Brother","Cousin","Uncle","Nephew"],ans:"Brother"},
/* ── CODING-DECODING ── */
{id:75,cat:"Coding-Decoding",q:"CLOCK is coded as KCOLC. Applying the same rule, FLAME is coded as?",ops:["EMALG","EMAFL","EMALF","LAMEF"],ans:"EMALF"},
{id:76,cat:"Coding-Decoding",q:"If RED = 27 and BLUE = 40, what is GREEN?",ops:["49","52","53","47"],ans:"49"},
{id:77,cat:"Coding-Decoding",q:"'ka la ma' = 'eat your food', 'la pa na' = 'food is good', 'ma ka' = 'your eat'. What does 'pa' mean?",ops:["is","good","food","your"],ans:"is"},
{id:78,cat:"Coding-Decoding",q:"CHAIR is coded as FKDLU. Applying the same shift, BRAIN is coded as?",ops:["EUDLQ","EUDLO","FUDLQ","DUDLQ"],ans:"EUDLQ"},
{id:79,cat:"Coding-Decoding",q:"DELHI = 73541, CALM = 8296. Using the same code, LAME = ?",ops:["9265","9256","9652","9562"],ans:"9265"},
{id:80,cat:"Coding-Decoding",q:"If MANGO is coded as NBOHP, APPLE is coded as?",ops:["BQQMF","BQPMF","CQQMF","BQQLE"],ans:"BQQMF"},
{id:81,cat:"Coding-Decoding",q:"In a code: ROAD = 4-15-1-4. What is LANE?",ops:["12-1-14-5","11-1-14-5","12-2-14-5","12-1-13-5"],ans:"12-1-14-5"},
{id:82,cat:"Coding-Decoding",q:"WHITE is coded as XIMUF. What is the coding rule?",ops:["+1 to each letter","+2 to each letter","Reverse each letter","-1 to each letter"],ans:"+1 to each letter"},
{id:83,cat:"Coding-Decoding",q:"23-5-12-12-15. Which word does this decode to?",ops:["WORLD","HELLO","WHILE","WELLS"],ans:"WORLD"},
{id:84,cat:"Coding-Decoding",q:"STRONG is coded as OMTNKC. What is the shift applied?",ops:["+4","-4","+3","-3"],ans:"-4"},
{id:85,cat:"Coding-Decoding",q:"If 'ra sa ta' = 'sky is blue', 'sa pa qa' = 'blue ocean deep', 'ta qa ra' = 'sky deep blue'. What is 'blue'?",ops:["ra","sa","ta","qa"],ans:"sa"},
{id:86,cat:"Coding-Decoding",q:"In a code, COMPUTER = 73, PRINTER = 56. What is MONITOR?",ops:["63","70","77","56"],ans:"63"},
/* ── DIRECTION SENSE ── */
{id:87,cat:"Direction Sense",q:"Walk 5 km North, 3 km East, 5 km South. Distance from start?",ops:["3 km","5 km","8 km","2 km"],ans:"3 km"},
{id:88,cat:"Direction Sense",q:"Facing West: turn 90° clockwise, then 90° clockwise again, then 90° anticlockwise. Now facing?",ops:["East","South","North","West"],ans:"South"},
{id:89,cat:"Direction Sense",q:"Walk 3 km East, 4 km North, 3 km West, 4 km South. Net displacement?",ops:["0 km","14 km","7 km","4 km"],ans:"0 km"},
{id:90,cat:"Direction Sense",q:"A person walks 4 km East then 3 km North. Shortest distance from starting point?",ops:["5 km","7 km","4 km","6 km"],ans:"5 km"},
{id:91,cat:"Direction Sense",q:"Facing South: turn 135° anticlockwise, then 45° clockwise. Now facing?",ops:["East","North","North-East","South-East"],ans:"North"},
{id:92,cat:"Direction Sense",q:"I face East, turn 90° clockwise, then 180°. I now face?",ops:["North","South","East","West"],ans:"North"},
{id:93,cat:"Direction Sense",q:"You face North. Your left hand points toward?",ops:["North","South","East","West"],ans:"West"},
{id:94,cat:"Direction Sense",q:"A walks 6 km North, turns right and walks 4 km, turns right and walks 6 km. Distance from starting point?",ops:["4 km","6 km","10 km","2 km"],ans:"4 km"},
{id:95,cat:"Direction Sense",q:"In a code: 'East' is called 'North', 'North' is called 'West'. Sunrise happens in the direction called?",ops:["North","West","East","South"],ans:"North"},
{id:96,cat:"Direction Sense",q:"Mohan walks 10 m South, turns left, walks 5 m, turns left again, walks 10 m. He is now?",ops:["5 m West of start","5 m East of start","Back at start","10 m North of start"],ans:"5 m East of start"},
/* ── RATIO ── */
{id:97,cat:"Ratio",q:"A:B = 2:3 and B:C = 4:5. What is A:C?",ops:["8:15","6:15","8:12","4:9"],ans:"8:15"},
{id:98,cat:"Ratio",q:"₹700 is divided among A, B, C in ratio 1:2:4. B's share?",ops:["₹100","₹200","₹400","₹300"],ans:"₹200"},
{id:99,cat:"Ratio",q:"Ages of A and B are in ratio 3:4. After 6 years: 4:5. A's age now?",ops:["14","16","18","20"],ans:"18"},
{id:100,cat:"Ratio",q:"Speed ratio of A to B = 3:4. If B covers 80 km, how far does A go in the same time?",ops:["60 km","75 km","90 km","40 km"],ans:"60 km"},
{id:101,cat:"Ratio",q:"A bag has gold and silver coins in ratio 5:3. Remove 5 gold — ratio becomes 1:1. Total coins originally?",ops:["16","24","20","32"],ans:"16"},
{id:102,cat:"Ratio",q:"If 3 men earn ₹900 in 3 days, how much does 1 man earn in 1 day?",ops:["₹100","₹150","₹300","₹200"],ans:"₹100"},
{id:103,cat:"Ratio",q:"Two numbers are in ratio 5:6. If 2 is added to each, ratio becomes 7:8. The smaller number is?",ops:["5","10","15","20"],ans:"5"},
{id:104,cat:"Ratio",q:"Milk and water in a 40L mixture are in ratio 3:1. How much water must be added to make it 2:3?",ops:["30 L","20 L","25 L","15 L"],ans:"20 L"},
/* ── AVERAGE ── */
{id:105,cat:"Average",q:"Average of 5 numbers is 20. One is removed; average becomes 18. What was the removed number?",ops:["24","26","28","30"],ans:"28"},
{id:106,cat:"Average",q:"Average of first 10 natural numbers?",ops:["5","5.5","6","4.5"],ans:"5.5"},
{id:107,cat:"Average",q:"A class average is 40. A student scoring 80 joins; average rises to 42. Original class size?",ops:["18","19","20","21"],ans:"19"},
{id:108,cat:"Average",q:"Average of A and B = 30. Average of B and C = 28. B = 25. Find A + C.",ops:["56","58","60","62"],ans:"56"},
{id:109,cat:"Average",q:"Four consecutive even numbers average 25. What is the largest?",ops:["26","28","30","32"],ans:"28"},
{id:110,cat:"Average",q:"A car travels 30 km/h one way and 60 km/h on the return. Average speed for the trip?",ops:["40 km/h","45 km/h","50 km/h","35 km/h"],ans:"40 km/h"},
{id:111,cat:"Average",q:"Average of 6 numbers is 8. Average of first 4 is 6. Average of last 2?",ops:["10","11","12","13"],ans:"12"},
{id:112,cat:"Average",q:"A batsman's average after 20 innings is 40. He scores 70 in the 21st. New average?",ops:["41","41.4","42","40.7"],ans:"41.4"},
/* ── AGE-BASED ── */
{id:113,cat:"Age-Based",q:"Ratio of ages of A and B = 3:5. After 4 years: 5:7. A's current age?",ops:["6","8","10","12"],ans:"6"},
{id:114,cat:"Age-Based",q:"Father is 3 times son's age. After 12 years, he'll be twice son's age. Son's age now?",ops:["9","10","11","12"],ans:"12"},
{id:115,cat:"Age-Based",q:"Tina's age 5 years from now equals twice her age 5 years ago. Tina's age today?",ops:["10","12","15","20"],ans:"15"},
{id:116,cat:"Age-Based",q:"Ravi is twice Ritu's age. 10 years ago Ravi was 3 times Ritu's age. Ritu's age now?",ops:["15","20","25","30"],ans:"20"},
{id:117,cat:"Age-Based",q:"A is 6 years older than B. B is 3 times as old as C. C is 4. A's age?",ops:["16","18","20","22"],ans:"18"},
{id:118,cat:"Age-Based",q:"In 20 years, Dev will be 3 times what he was 4 years ago. Dev's current age?",ops:["8","10","12","14"],ans:"8"},
{id:119,cat:"Age-Based",q:"Average age of 3 brothers is 18. Youngest is 12. Average of the other two?",ops:["20","21","22","23"],ans:"21"},
{id:120,cat:"Age-Based",q:"Sum of father and son's ages is 60. Product of their ages 5 years ago was 280. Father's age now?",ops:["35","36","40","45"],ans:"40"},
/* ── TIME & CLOCK ── */
{id:121,cat:"Time & Clock",q:"What is the angle between clock hands at 3:00?",ops:["60°","75°","80°","90°"],ans:"90°"},
{id:122,cat:"Time & Clock",q:"What is the angle between clock hands at 6:30?",ops:["0°","10°","15°","5°"],ans:"15°"},
{id:123,cat:"Time & Clock",q:"How many times do clock hands coincide in 24 hours?",ops:["22","23","24","44"],ans:"44"},
{id:124,cat:"Time & Clock",q:"A clock gains 5 minutes per hour. Started at 12:00 noon. What does it show after 6 real hours?",ops:["6:00","6:30","6:45","6:10"],ans:"6:30"},
{id:125,cat:"Time & Clock",q:"What is the angle between clock hands at 4:20?",ops:["0°","5°","10°","15°"],ans:"10°"},
{id:126,cat:"Time & Clock",q:"How many times does the minute hand overtake the hour hand between 12 noon and 12 midnight?",ops:["11","12","22","24"],ans:"11"},
{id:127,cat:"Time & Clock",q:"A clock shows 8:20. What time does its mirror image show?",ops:["4:40","3:40","4:50","3:50"],ans:"3:40"},
{id:128,cat:"Time & Clock",q:"At what time between 4 and 5 are the hands of a clock pointing the same direction?",ops:["4:21 approx","4:22 approx","4:20 approx","4:18 approx"],ans:"4:22 approx"},
/* ── ODD ONE OUT ── */
{id:129,cat:"Odd One Out",q:"49, 64, 81, 100, 112 — which is different?",ops:["49","64","100","112"],ans:"112"},
{id:130,cat:"Odd One Out",q:"Python, Java, C++, HTML — which is the odd one out?",ops:["Python","Java","C++","HTML"],ans:"HTML"},
{id:131,cat:"Odd One Out",q:"Stack, Queue, Tree, Recursion — which does not belong?",ops:["Stack","Queue","Tree","Recursion"],ans:"Recursion"},
{id:132,cat:"Odd One Out",q:"Bus topology, Star topology, Ring topology, DRAM — odd one out?",ops:["Bus","Star","Ring","DRAM"],ans:"DRAM"},
{id:133,cat:"Odd One Out",q:"Apple, Mango, Carrot, Banana — which is different?",ops:["Apple","Mango","Carrot","Banana"],ans:"Carrot"},
{id:134,cat:"Odd One Out",q:"RGB, CMYK, HEX color, JPEG — which doesn't belong?",ops:["RGB","CMYK","HEX color","JPEG"],ans:"JPEG"},
{id:135,cat:"Odd One Out",q:"Violin, Guitar, Tabla, Sitar — which one is different?",ops:["Violin","Guitar","Tabla","Sitar"],ans:"Tabla"},
{id:136,cat:"Odd One Out",q:"36, 49, 64, 72, 81 — which is different?",ops:["36","49","72","81"],ans:"72"},
{id:137,cat:"Odd One Out",q:"Mercury, Venus, Earth, Moon — which doesn't belong?",ops:["Mercury","Venus","Earth","Moon"],ans:"Moon"},
{id:138,cat:"Odd One Out",q:"HTTP, FTP, TCP, SMTP — which is the odd one out?",ops:["HTTP","FTP","TCP","SMTP"],ans:"TCP"},
{id:139,cat:"Odd One Out",q:"4, 9, 16, 25, 35 — which is different?",ops:["4","9","25","35"],ans:"35"},
{id:140,cat:"Odd One Out",q:"2, 3, 5, 7, 9, 11 — which is the odd one out?",ops:["2","5","9","11"],ans:"9"},
/* ── PATTERN RECOGNITION ── */
{id:141,cat:"Pattern Recognition",q:"A1, B4, C9, D16, E25, ?",ops:["F36","G36","F30","F35"],ans:"F36"},
{id:142,cat:"Pattern Recognition",q:"3, 7, 13, 21, 31, ?",ops:["41","43","45","47"],ans:"43"},
{id:143,cat:"Pattern Recognition",q:"In a 3x3 grid: [1,3,5 / 7,?,11 / 13,15,17] — missing number?",ops:["8","9","10","12"],ans:"9"},
{id:144,cat:"Pattern Recognition",q:"If ◆◆◆ = 9 and ●● = 4, then ◆◆● = ?",ops:["6","7","8","5"],ans:"7"},
{id:145,cat:"Pattern Recognition",q:"2, 12, 36, 80, 150, ?",ops:["220","252","240","260"],ans:"252"},
{id:146,cat:"Pattern Recognition",q:"Sum of first 10 odd natural numbers?",ops:["55","100","50","90"],ans:"100"},
{id:147,cat:"Pattern Recognition",q:"Look at: 1, 3, 6, 10, 15, 21, ?",ops:["25","27","28","30"],ans:"28"},
{id:148,cat:"Pattern Recognition",q:"2, 3, 5, 8, 13, 21, 34, ?",ops:["47","55","53","51"],ans:"55"},
{id:149,cat:"Pattern Recognition",q:"The 8th term of the sequence 1, 4, 9, 16, 25... is?",ops:["49","56","64","36"],ans:"64"},
{id:150,cat:"Pattern Recognition",q:"16, 25, 36, 49, 64, ?",ops:["81","75","72","80"],ans:"81"},
/* ── GENERAL KNOWLEDGE ── */
{id:151,cat:"General Knowledge",q:"Which planet currently holds the record for the most natural moons?",ops:["Jupiter","Saturn","Uranus","Neptune"],ans:"Saturn"},
{id:152,cat:"General Knowledge",q:"The precursor to the modern Internet was called?",ops:["WorldNet","ARPANET","WebNet","InfoNet"],ans:"ARPANET"},
{id:153,cat:"General Knowledge",q:"Moore's Law predicts transistor count doubles approximately every?",ops:["6 months","18–24 months","5 years","10 years"],ans:"18–24 months"},
{id:154,cat:"General Knowledge",q:"The word 'Algorithm' traces back to the name of which 9th-century scholar?",ops:["Al-Kindi","Al-Biruni","Al-Khwarizmi","Al-Haytham"],ans:"Al-Khwarizmi"},
{id:155,cat:"General Knowledge",q:"Who invented the World Wide Web?",ops:["Bill Gates","Steve Jobs","Tim Berners-Lee","Vint Cerf"],ans:"Tim Berners-Lee"},
{id:156,cat:"General Knowledge",q:"Speed of light in vacuum is approximately?",ops:["3×10⁸ m/s","3×10⁶ m/s","3×10¹⁰ m/s","3×10⁵ m/s"],ans:"3×10⁸ m/s"},
{id:157,cat:"General Knowledge",q:"Which metal has the highest electrical conductivity?",ops:["Gold","Copper","Silver","Aluminium"],ans:"Silver"},
{id:158,cat:"General Knowledge",q:"Which country was first to send a woman into space?",ops:["USA","India","USSR","France"],ans:"USSR"},
{id:159,cat:"General Knowledge",q:"The first computer bug documented in history was literally?",ops:["A software error","A moth","A beetle","A virus"],ans:"A moth"},
{id:160,cat:"General Knowledge",q:"Which programming language is named after a 19th-century mathematician-poet?",ops:["Python","Ada","COBOL","Ruby"],ans:"Ada"},
{id:161,cat:"General Knowledge",q:"GPS satellites are operated by which country's military?",ops:["Russia","China","India","USA"],ans:"USA"},
{id:162,cat:"General Knowledge",q:"Which Indian mathematician is most credited with formalising the concept of zero?",ops:["Aryabhata","Brahmagupta","Ramanujan","Bhaskara"],ans:"Brahmagupta"},
{id:163,cat:"General Knowledge",q:"1 Kilobyte is exactly how many bytes?",ops:["1000","1024","512","2048"],ans:"1024"},
{id:164,cat:"General Knowledge",q:"Which planet rotates on its side, with an axial tilt of ~98°?",ops:["Neptune","Saturn","Uranus","Mars"],ans:"Uranus"},
{id:165,cat:"General Knowledge",q:"What does HTTP stand for?",ops:["HyperText Transfer Protocol","HighText Transfer Protocol","HyperText Transmission Protocol","HyperText Type Protocol"],ans:"HyperText Transfer Protocol"},
/* ── FUN & TRICKY ── */
{id:166,cat:"Fun & Tricky",q:"A rooster sits on the peak of a sloped roof. Which way does it lay an egg?",ops:["Left","Right","Down the slope","Roosters don't lay eggs"],ans:"Roosters don't lay eggs"},
{id:167,cat:"Fun & Tricky",q:"How many months of the year have 28 days?",ops:["1","2","6","12"],ans:"12"},
{id:168,cat:"Fun & Tricky",q:"In a race you overtake the person in 2nd place. What place are you in now?",ops:["1st","2nd","3rd","Depends"],ans:"2nd"},
{id:169,cat:"Fun & Tricky",q:"You're in last place and overtake the person in last place. Where are you?",ops:["Second to last","Last but one","Last","First"],ans:"Last"},
{id:170,cat:"Fun & Tricky",q:"A doctor gives 3 pills: take one every half hour. How long before all 3 are gone?",ops:["1.5 hours","1 hour","30 minutes","2 hours"],ans:"1 hour"},
{id:171,cat:"Fun & Tricky",q:"There are 3 apples on a table. You take 2. How many do YOU have?",ops:["1","2","3","0"],ans:"2"},
{id:172,cat:"Fun & Tricky",q:"Before Mt. Everest was discovered, what was the highest mountain on Earth?",ops:["K2","Kangchenjunga","Mt. Everest itself","Denali"],ans:"Mt. Everest itself"},
{id:173,cat:"Fun & Tricky",q:"If yesterday was two days after Monday, what day is tomorrow?",ops:["Wednesday","Thursday","Friday","Tuesday"],ans:"Friday"},
{id:174,cat:"Fun & Tricky",q:"Bat + Ball = ₹110. Bat costs ₹100 more than ball. Ball costs?",ops:["₹10","₹5","₹15","₹20"],ans:"₹5"},
{id:175,cat:"Fun & Tricky",q:"A pizza cut with 6 straight cuts. Maximum number of slices?",ops:["6","12","21","22"],ans:"22"},
{id:176,cat:"Fun & Tricky",q:"A farmer has 17 sheep. All but 9 die. How many remain?",ops:["8","17","9","0"],ans:"9"},
{id:177,cat:"Fun & Tricky",q:"What has keys but no locks, space but no room — you can enter but never go inside?",ops:["A prison","A keyboard","A dictionary","A map"],ans:"A keyboard"},
{id:178,cat:"Fun & Tricky",q:"The more you take, the more you leave behind. What is it?",ops:["Time","Footsteps","Money","Water"],ans:"Footsteps"},
{id:179,cat:"Fun & Tricky",q:"In 1990 a person was 15 years old. In 1995 that same person was 10. How?",ops:["Impossible","They were born in 2005 BC","Time travel","Aging reversed"],ans:"They were born in 2005 BC"},
{id:180,cat:"Fun & Tricky",q:"A man pushes his car to a hotel and immediately loses his fortune. What is happening?",ops:["Car broke down","He is playing Monopoly","He was robbed","He crashed"],ans:"He is playing Monopoly"},
{id:181,cat:"Fun & Tricky",q:"10 kg iron vs 10 kg cotton dropped from the same height in vacuum. Which lands first?",ops:["Iron","Cotton","Both land together","Depends on height"],ans:"Both land together"},
{id:182,cat:"Fun & Tricky",q:"Two coins total 30 paise. One is NOT a 10-paise coin. What are the two coins?",ops:["Two 15-paise","20-paise + 10-paise","5-paise + 25-paise","15-paise + 15-paise"],ans:"20-paise + 10-paise"},
{id:183,cat:"Fun & Tricky",q:"What can run but never walk, has a mouth but never talks, has a bed but never sleeps?",ops:["A clock","A river","A train","A book"],ans:"A river"},
{id:184,cat:"Fun & Tricky",q:"What is always coming but never arrives?",ops:["Tomorrow","A dream","The past","Death"],ans:"Tomorrow"},
{id:185,cat:"Fun & Tricky",q:"A woman shoots her husband. An hour later she dines with him. How?",ops:["She missed","She is a photographer","She imagined it","He survived"],ans:"She is a photographer"},
{id:186,cat:"Fun & Tricky",q:"You see a boat full of people. Not a single person is on it. How?",ops:["They jumped off","Everyone on board is married","It's unmanned","They teleported"],ans:"Everyone on board is married"},
{id:187,cat:"Fun & Tricky",q:"A man walks into a bar and asks for water. The bartender pulls out a gun. The man says 'Thank you' and leaves. Why?",ops:["He was a robber","He had hiccups","He was thirsty","He wanted to test the bartender"],ans:"He had hiccups"},
{id:188,cat:"Fun & Tricky",q:"If you have a 3L and a 5L jug, how do you get exactly 4L?",ops:["Fill 3L twice","Fill 5L, pour into 3L, empty 3L, transfer 2L, refill 5L, top up 3L — 4L remains","You can't","Fill both and mix"],ans:"Fill 5L, pour into 3L, empty 3L, transfer 2L, refill 5L, top up 3L — 4L remains"},
{id:189,cat:"Fun & Tricky",q:"I speak without a mouth, am heard without ears, have no body, but come alive with wind. What am I?",ops:["A shadow","An echo","A thought","A cloud"],ans:"An echo"},
{id:190,cat:"Fun & Tricky",q:"You can hold it without your hands, without your arms, and without any help. What is it?",ops:["A thought","Your breath","Water","Nothing"],ans:"Your breath"},
/* ── NEW: LOGICAL REASONING ── */
{id:191,cat:"Logical Reasoning",q:"Some doctors are teachers. All teachers are graduates. Which is definitely true?",ops:["All doctors are graduates","Some doctors are graduates","No doctor is a graduate","All graduates are teachers"],ans:"Some doctors are graduates"},
{id:192,cat:"Logical Reasoning",q:"In a row of 20 students, Priya is 8th from the left and Raj is 14th from the left. How many students sit between them?",ops:["5","6","7","4"],ans:"5"},
{id:193,cat:"Logical Reasoning",q:"All metals conduct electricity. Copper is a metal. Which conclusion is valid?",ops:["Copper conducts electricity","All conductors are copper","Some metals do not conduct","Copper is the best conductor"],ans:"Copper conducts electricity"},
{id:194,cat:"Logical Reasoning",q:"4 friends A, B, C, D play in a tournament. A beats B, C beats A, D beats C. Who is likely the strongest?",ops:["A","B","C","D"],ans:"D"},
/* ── NEW: BODMAS / MATH ── */
{id:195,cat:"BODMAS / Math",q:"15 – 3 × (2 + 4) ÷ 6 = ?",ops:["12","15","10","14"],ans:"12"},
{id:196,cat:"BODMAS / Math",q:"What is the last digit of 3^100?",ops:["1","3","9","7"],ans:"1"},
{id:197,cat:"BODMAS / Math",q:"If a # b = (a+b)/(a-b), then 9 # 3 = ?",ops:["2","3","4","6"],ans:"2"},
{id:198,cat:"BODMAS / Math",q:"(1/2 + 1/3 + 1/6) × 12 = ?",ops:["10","11","12","14"],ans:"12"},
/* ── NEW: NUMBER SERIES ── */
{id:199,cat:"Number Series",q:"1, 1, 2, 3, 5, 8, 13, 21, ?",ops:["29","34","33","32"],ans:"34"},
{id:200,cat:"Number Series",q:"0, 3, 8, 15, 24, 35, ?",ops:["46","47","48","49"],ans:"48"},
{id:201,cat:"Number Series",q:"2, 6, 18, 54, 162, ?",ops:["324","486","540","486"],ans:"486"},
{id:202,cat:"Number Series",q:"13, 17, 23, 31, 41, ?",ops:["51","53","55","57"],ans:"53"},
/* ── NEW: ALPHABET SERIES ── */
{id:203,cat:"Alphabet Series",q:"ACE, FHJ, KMO, ?",ops:["PTR","PRT","PRU","QPR"],ans:"PRT"},
{id:204,cat:"Alphabet Series",q:"B2, D4, F8, H16, ?",ops:["I32","J32","J16","K32"],ans:"J32"},
{id:205,cat:"Alphabet Series",q:"AZ, CX, EV, GT, ?",ops:["IQ","IR","IS","HR"],ans:"IR"},
/* ── NEW: BLOOD RELATIONS ── */
{id:206,cat:"Blood Relations",q:"Pointing to a photo, a man says 'His mother is the only daughter of my mother.' Who is in the photo?",ops:["His brother","His nephew","His son","His uncle"],ans:"His son"},
{id:207,cat:"Blood Relations",q:"If A's mother is B's daughter, what is B to A?",ops:["Father","Grandfather","Grandmother","Uncle"],ans:"Grandmother"},
{id:208,cat:"Blood Relations",q:"P is the brother of Q. R is Q's mother. S is R's father. How is P related to S?",ops:["Grandson","Son","Nephew","Brother"],ans:"Grandson"},
{id:209,cat:"Blood Relations",q:"'She is the wife of the son of my father.' How is she related to the speaker?",ops:["Sister","Sister-in-law","Daughter-in-law","Mother"],ans:"Sister-in-law"},
/* ── NEW: CODING-DECODING ── */
{id:210,cat:"Coding-Decoding",q:"If WATER = 57368 and EARTH = 85643, what is HEART?",ops:["45863","45683","54863","46853"],ans:"45863"},
{id:211,cat:"Coding-Decoding",q:"In a code: PENCIL = RGPEKN. What is the pattern?",ops:["+2 to each letter","-2 to each letter","+1 then +2 alternating","Reverse + shift"],ans:"+2 to each letter"},
{id:212,cat:"Coding-Decoding",q:"If ORANGE = 63, what is GRAPE? (sum of letter positions)",ops:["48","49","50","51"],ans:"49"},
/* ── NEW: DIRECTION SENSE ── */
{id:213,cat:"Direction Sense",q:"If North-East is called East, what is South called?",ops:["South-West","West","South-East","North-West"],ans:"South-West"},
{id:214,cat:"Direction Sense",q:"A person walks 7 km North, then 24 km East. Distance from start?",ops:["25 km","31 km","17 km","24 km"],ans:"25 km"},
{id:215,cat:"Direction Sense",q:"Facing East, you turn 270° clockwise. Which direction are you facing?",ops:["North","South","West","East"],ans:"North"},
/* ── NEW: RATIO ── */
{id:216,cat:"Ratio",q:"If 4:x = x:9, then x = ?",ops:["4","5","6","7"],ans:"6"},
{id:217,cat:"Ratio",q:"Monthly salaries of A and B are in ratio 2:3. A earns ₹20,000. B earns?",ops:["₹25,000","₹30,000","₹35,000","₹40,000"],ans:"₹30,000"},
{id:218,cat:"Ratio",q:"In a mixture of 60 L, milk and water are in ratio 2:1. If 20 L water is added, what is the new ratio?",ops:["2:2","4:3","3:2","2:3"],ans:"4:3"},
/* ── NEW: AVERAGE ── */
{id:219,cat:"Average",q:"Average of 9 numbers is 50. A tenth number is added; average becomes 46. The new number is?",ops:["6","8","10","12"],ans:"10"},
{id:220,cat:"Average",q:"Average score of 5 students is 72. The top scorer's marks are removed; average drops to 65. Top score?",ops:["100","95","97","99"],ans:"100"},
{id:221,cat:"Average",q:"A man covers first half of distance at 40 km/h and second half at 60 km/h. Average speed?",ops:["48 km/h","50 km/h","45 km/h","55 km/h"],ans:"48 km/h"},
/* ── NEW: AGE-BASED ── */
{id:222,cat:"Age-Based",q:"The sum of ages of 4 siblings is 40. Each is 2 years older than the previous. Youngest sibling's age?",ops:["7","8","9","10"],ans:"7"},
{id:223,cat:"Age-Based",q:"A mother is 4 times her daughter's age. In 16 years, she'll be twice the daughter's age. Daughter's current age?",ops:["6","7","8","9"],ans:"8"},
{id:224,cat:"Age-Based",q:"10 years ago, A was half of B's age. A is 30 now. How old is B?",ops:["40","50","45","55"],ans:"50"},
/* ── NEW: TIME & CLOCK ── */
{id:225,cat:"Time & Clock",q:"At what time between 2 and 3 o'clock do the hands of a clock coincide (approximately)?",ops:["2:10 approx","2:11 approx","2:09 approx","2:12 approx"],ans:"2:11 approx"},
{id:226,cat:"Time & Clock",q:"How many right angles does the minute hand trace in 1 hour?",ops:["2","4","6","8"],ans:"4"},
{id:227,cat:"Time & Clock",q:"A clock loses 5 minutes every hour. Set correctly at 10:00 AM, what does it show at 4:00 PM?",ops:["3:20 PM","3:30 PM","3:40 PM","3:50 PM"],ans:"3:30 PM"},
/* ── NEW: ODD ONE OUT ── */
{id:228,cat:"Odd One Out",q:"11, 13, 17, 19, 21, 23 — which is the odd one out?",ops:["11","17","21","23"],ans:"21"},
{id:229,cat:"Odd One Out",q:"RAM, ROM, CPU, JPEG — which doesn't belong?",ops:["RAM","ROM","CPU","JPEG"],ans:"JPEG"},
{id:230,cat:"Odd One Out",q:"Tulip, Rose, Lotus, Neem — odd one out?",ops:["Tulip","Rose","Lotus","Neem"],ans:"Neem"},
{id:231,cat:"Odd One Out",q:"7, 14, 21, 28, 32, 42 — which is different?",ops:["7","21","32","42"],ans:"32"},
/* ── NEW: PATTERN RECOGNITION ── */
{id:232,cat:"Pattern Recognition",q:"2, 5, 14, 41, 122, ?",ops:["365","244","243","366"],ans:"365"},
{id:233,cat:"Pattern Recognition",q:"If 4^2 = 25 and 5^2 = 36 in a pattern, then 6^2 = ?",ops:["48","49","47","50"],ans:"49"},
{id:234,cat:"Pattern Recognition",q:"Find the missing value: 3, 9, ?, 81, 243",ops:["18","27","36","45"],ans:"27"},
{id:235,cat:"Pattern Recognition",q:"In a grid: Row sums are 6, 15, 24. The pattern difference between rows is?",ops:["5","6","9","7"],ans:"9"},
/* ── NEW: GENERAL KNOWLEDGE ── */
{id:236,cat:"General Knowledge",q:"Which is the smallest country in the world by area?",ops:["Monaco","San Marino","Vatican City","Liechtenstein"],ans:"Vatican City"},
{id:237,cat:"General Knowledge",q:"The chemical symbol 'Au' stands for which element?",ops:["Silver","Gold","Aluminium","Argon"],ans:"Gold"},
{id:238,cat:"General Knowledge",q:"The Indian Space Research Organisation (ISRO) is headquartered in?",ops:["Mumbai","Hyderabad","Bengaluru","Pune"],ans:"Bengaluru"},
{id:239,cat:"General Knowledge",q:"Which data structure works on the principle of LIFO?",ops:["Queue","Stack","Tree","Graph"],ans:"Stack"},
{id:240,cat:"General Knowledge",q:"What is the full form of 'URL'?",ops:["Universal Resource Locator","Uniform Resource Locator","United Resource Link","Universal Reference Link"],ans:"Uniform Resource Locator"},
/* ── NEW: FUN & TRICKY ── */
{id:241,cat:"Fun & Tricky",q:"A man has 3 sons. Each son has 1 sister. How many children does the man have?",ops:["4","6","3","7"],ans:"4"},
{id:242,cat:"Fun & Tricky",q:"I have cities but no houses, mountains but no trees, water but no fish. What am I?",ops:["A dream","A painting","A map","A globe"],ans:"A map"},
{id:243,cat:"Fun & Tricky",q:"If there are 3 apples and you take away 2, how many apples do YOU have?",ops:["1","3","2","0"],ans:"2"},
{id:244,cat:"Fun & Tricky",q:"A is the father of B but B is not the son of A. How?",ops:["Impossible","B is A's daughter","B is adopted","A is B's step-father"],ans:"B is A's daughter"},
{id:245,cat:"Fun & Tricky",q:"What can you break without touching it?",ops:["A promise","Glass","Ice","A chain"],ans:"A promise"},
{id:246,cat:"Fun & Tricky",q:"What appears once in a minute, twice in a moment, but never in a thousand years?",ops:["The letter 'M'","The letter 'O'","The letter 'N'","The letter 'T'"],ans:"The letter 'M'"},
{id:247,cat:"Fun & Tricky",q:"You buy 3 items: ₹10, ₹20, ₹30. You pay ₹100. Change returned = ₹40. Is this correct?",ops:["Yes","No, change = ₹30","No, change = ₹50","No, change = ₹35"],ans:"No, change = ₹40"},
{id:248,cat:"Fun & Tricky",q:"Which weighs more: 1 kg of feathers or 1 kg of iron?",ops:["Iron","Feathers","Both the same","Depends on density"],ans:"Both the same"},
{id:249,cat:"Fun & Tricky",q:"If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?",ops:["100 minutes","10 minutes","5 minutes","1 minute"],ans:"5 minutes"},
{id:250,cat:"Fun & Tricky",q:"I'm not alive but I can die. What am I?",ops:["A robot","A battery","A fire","A candle"],ans:"A battery"},
];

/* ════════════════════════════════════════════
   GAME STATE
════════════════════════════════════════════ */
const STATE={
  attemptNumber:0,
  currentQuestions:[],
  currentQIndex:0,
  timerSeconds:90,
  timerInterval:null,
  isLocked:false,
  TOTAL_TIME:90
};



/* ════════════════════════════════════════════
   SCREEN MANAGEMENT
════════════════════════════════════════════ */
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));const el=document.getElementById(id);if(el)el.classList.add('active');}
function showOverlay(id){document.getElementById(id).classList.add('active');}
function hideOverlay(id){document.getElementById(id).classList.remove('active');}

/* ════════════════════════════════════════════
   COUNTDOWN BEFORE ATTEMPT
════════════════════════════════════════════ */
function startCountdown(){
  document.getElementById('start-btn').disabled=true;
  showScreen('quiz-screen');
  const overlay=document.getElementById('countdown-overlay');
  const numEl=document.getElementById('countdown-num');
  const lblEl=document.getElementById('countdown-label');
  overlay.classList.add('active');
  let count=3;
  function tick(){
    numEl.textContent=count;
    lblEl.textContent=count===3?'Get Ready':count===2?'Focus...':'Last chance!';
    numEl.style.animation='none';void numEl.offsetWidth;numEl.style.animation='countPop 0.45s cubic-bezier(0.34,1.56,0.64,1) both';
  }
  tick();
  const interval=setInterval(()=>{
    count--;
    if(count===0){
      numEl.textContent='GO!';lblEl.textContent='90 seconds starts NOW';
      numEl.style.animation='none';void numEl.offsetWidth;numEl.style.animation='countPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both';
      setTimeout(()=>{overlay.classList.remove('active');clearInterval(interval);beginAttempt();},750);
    } else { tick(); }
  },900);
}

/* ════════════════════════════════════════════
   BEGIN ATTEMPT
════════════════════════════════════════════ */
function beginAttempt(){
  STATE.attemptNumber++;
  STATE.currentQIndex=0;
  STATE.timerSeconds=STATE.TOTAL_TIME;
  STATE.isLocked=false;
  const shuffled=[...QB].sort(()=>Math.random()-0.5);
  STATE.currentQuestions=shuffled.slice(0,12);
  const dotsContainer=document.getElementById('step-dots');
  dotsContainer.innerHTML='';
  for(let i=0;i<12;i++){const d=document.createElement('div');d.className='step-dot';d.id='dot-'+i;dotsContainer.appendChild(d);}
  document.getElementById('attempt-display').textContent=String(STATE.attemptNumber).padStart(2,'0');
  renderQuestion(0);
  startTimer();
}

/* ════════════════════════════════════════════
   RENDER QUESTION
════════════════════════════════════════════ */
function renderQuestion(idx){
  const q=STATE.currentQuestions[idx];
  STATE.isLocked=false;
  document.getElementById('q-number').textContent='QUESTION '+String(idx+1).padStart(2,'0');
  document.getElementById('q-category').textContent=q.cat;
  document.getElementById('q-counter').textContent=idx+1;
  document.getElementById('progress-bar').style.width=(idx/12*100)+'%';
  for(let i=0;i<12;i++){const d=document.getElementById('dot-'+i);if(!d)continue;d.className='step-dot'+(i<idx?' done':i===idx?' current':'');}
  // Render question text — detect pre blocks
  let qText=q.q;
  // newline in question text → wrap in pre
  if(qText.includes('\n')){
    const parts=qText.split('\n');
    const firstLine=parts[0];
    const code=parts.slice(1).join('\n');
    qText=firstLine+'<pre>'+escHtml(code)+'</pre>';
  }
  document.getElementById('question-text').innerHTML=qText;
  const grid=document.getElementById('options-grid');
  grid.innerHTML='';
  const labels=['A','B','C','D'];
  q.ops.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='option-btn';btn.id='opt-'+i;
    btn.innerHTML='<span class="option-label">'+labels[i]+'</span><span class="option-text">'+escHtml(opt)+'</span>';
    btn.addEventListener('click',()=>selectAnswer(opt,q.ans,idx));
    grid.appendChild(btn);
  });
  const card=document.getElementById('question-card');
  card.style.animation='none';void card.offsetWidth;card.style.animation='slideUp 0.42s cubic-bezier(0.34,1.2,0.64,1) both';
}
function escHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

/* ════════════════════════════════════════════
   SELECT ANSWER
════════════════════════════════════════════ */
function selectAnswer(chosen,correct,idx){
  if(STATE.isLocked)return;
  STATE.isLocked=true;
  const q=STATE.currentQuestions[idx];
  const ci=q.ops.indexOf(chosen);
  if(ci>=0)document.getElementById('opt-'+ci).classList.add('selected');
  if(chosen===correct){
    setTimeout(()=>{
      const next=idx+1;
      if(next>=12)triggerSuccess();
      else{STATE.currentQIndex=next;renderQuestion(next);}
    },280);
  } else {
    const card=document.getElementById('question-card');
    card.style.animation='fadeShake 0.5s ease';
    setTimeout(()=>triggerFail('wrong'),620);
  }
}

/* ════════════════════════════════════════════
   TIMER
════════════════════════════════════════════ */
function startTimer(){
  clearInterval(STATE.timerInterval);
  updateTimerDisplay();
  STATE.timerInterval=setInterval(()=>{
    STATE.timerSeconds--;
    updateTimerDisplay();
    if(STATE.timerSeconds<=0){clearInterval(STATE.timerInterval);triggerFail('time');}
  },1000);
}
function stopTimer(){clearInterval(STATE.timerInterval);}
function updateTimerDisplay(){
  const s=STATE.timerSeconds;
  const m=Math.floor(s/60),sec=s%60;
  const el=document.getElementById('timer-display');
  el.textContent=String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
  // Color states
  if(s<=10)el.className='timer-display danger';
  else if(s<=25)el.className='timer-display warning';
  else el.className='timer-display';
  // Urgency bar
  const fill=document.getElementById('urgency-fill');
  const pct=Math.max(0,s/STATE.TOTAL_TIME*100);
  fill.style.width=pct+'%';
  // Bar color shifts
  if(s<=10)fill.style.background='linear-gradient(90deg,#ef4444,#b91c1c)';
  else if(s<=25)fill.style.background='linear-gradient(90deg,#f59e0b,#ef4444)';
  else fill.style.background='linear-gradient(90deg,#10b981,#3b82f6)';
}
function formatTime(s){const m=Math.floor(s/60),sec=s%60;return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');}

/* ════════════════════════════════════════════
   FAIL TRIGGERS
════════════════════════════════════════════ */
function triggerFail(type){
  stopTimer();
  const isWrong=type==='wrong';
  document.getElementById('fail-icon').textContent=isWrong?'❌':'⏰';
  document.getElementById('fail-title').textContent=isWrong?'INCORRECT ANSWER':"TIME'S UP";
  document.getElementById('fail-title').className='overlay-title '+(isWrong?'fail-title':'time-title');
  document.getElementById('fail-desc').textContent=isWrong
    ?'One wrong answer. The attempt is void. New 12 questions incoming!'
    :'90 seconds elapsed. New questions will be generated instantly.';
  document.getElementById('fail-q-reached').textContent=(STATE.currentQIndex+1)+'/12';
  document.getElementById('fail-time-left').textContent=formatTime(Math.max(0,STATE.timerSeconds));
  document.getElementById('fail-attempts').textContent=STATE.attemptNumber;
  showOverlay('fail-overlay');
}

/* ════════════════════════════════════════════
   SUCCESS
════════════════════════════════════════════ */
function triggerSuccess(){
  stopTimer();
  document.getElementById('success-score').textContent='12/12';
  document.getElementById('success-time').textContent=formatTime(STATE.timerSeconds);
  document.getElementById('success-attempts').textContent=STATE.attemptNumber;
  showOverlay('success-overlay');
  launchConfetti();
}
function launchConfetti(){
  const cols=['#3b82f6','#8b5cf6','#10b981','#f59e0b','#ec4899','#06b6d4','#f472b6','#a3e635'];
  for(let i=0;i<130;i++){
    setTimeout(()=>{
      const el=document.createElement('div');
      el.className='confetti-piece';
      el.style.cssText='left:'+Math.random()*100+'vw;top:0;width:'+(5+Math.random()*9)+'px;height:'+(5+Math.random()*9)+'px;background:'+cols[Math.floor(Math.random()*cols.length)]+';animation-duration:'+(1.8+Math.random()*2.2)+'s;animation-delay:'+Math.random()*0.5+'s;border-radius:'+(Math.random()>.5?'50%':'3px')+';';
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),4500);
    },Math.random()*500);
  }
}

/* ════════════════════════════════════════════
   RESET & RESTART
════════════════════════════════════════════ */
function resetAndRestart(){
  hideOverlay('fail-overlay');
  const overlay=document.getElementById('countdown-overlay');
  const numEl=document.getElementById('countdown-num');
  const lblEl=document.getElementById('countdown-label');
  overlay.classList.add('active');
  numEl.textContent='NEW';
  lblEl.textContent='Loading new questions...';
  numEl.style.animation='none';void numEl.offsetWidth;numEl.style.animation='countPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both';
  setTimeout(()=>{overlay.classList.remove('active');beginAttempt();},900);
}
function handleContinue(){
  hideOverlay('success-overlay');
  showScreen('start-screen');
  const btn=document.getElementById('start-btn');
  btn.disabled=false;
  btn.innerHTML='<span class="btn-icon">&#127942;</span><span class="btn-text">Challenge Passed!</span>';
  btn.style.background='linear-gradient(135deg,#10b981,#059669)';
  btn.style.animation='none';
}

window.addEventListener('load',()=>showScreen('start-screen'));
