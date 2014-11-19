var sid = new TextAttribute('sid');
var nameA = new TextAttribute('name');
var weight = new IntegerAttribute('weight');
var itemDef = new ItemDefinition([sid, nameA, weight], new AscendingSort(sid));

var items = [
    new Item(itemDef, '12345', 'rumrburt', '100'),
    new Item(itemDef, '23456', 'prasopes', '70'),
    new Item(itemDef, '34567', 'mildice', '12'),
    new Item(itemDef, '45678', 'pistice', '60')
];

var yearA = new TextAttribute('year');
var makeA = new TextAttribute('make');
var modelA = new TextAttribute('model');
var descA = new TextAttribute('desc');
var priceA = new TextAttribute('price');

var itemDef2 = new ItemDefinition([yearA, makeA, modelA, descA, priceA], new AscendingSort(makeA));
var items2 = [
    new Item(itemDef2, 1997, 'Ford',  'E350',                       'ac, abs, moon', 3000),
    new Item(itemDef2, 1999, 'Chevy', 'Venture "Extended Edition"', ''             , 4900),
    new Item(itemDef2, 1999, 'Chevy', 'Venture "Extended Edition"', 'Very Large'   , 5000),
    new Item(itemDef2, 1996, 'Jeep',  'Grand Cherokee',             'MUST SELL!'    , 4799)
];

var firstNameA = new TextAttribute('first name');
var lastNameA = new TextAttribute('last name');
var companyNameA = new TextAttribute('company name');
var addressA = new TextAttribute('address');
var cityA = new TextAttribute('city');
var countyA = new TextAttribute('county');
var postalA = new TextAttribute('postal code');
var phone1A = new TextAttribute('primary phone');
var phone2A = new TextAttribute('secondary phone');

var itemDef3 = new ItemDefinition([firstNameA, lastNameA, companyNameA, addressA, cityA, countyA, postalA, phone1A, phone2A], new AscendingSort(lastNameA));
var items3 = [
    new Item(itemDef3, "Aleshia","Tomkiewicz","Alan D Rosenburg Cpa Pc","14 Taylor St","St. Stephens Ward","Kent","CT2 7PP","01835-703597","01944-369967"),
    new Item(itemDef3, "Evan","Zigomalas","Cap Gemini America","5 Binney St","Abbey Ward","Buckinghamshire","HP11 2AX","01937-864715","01714-737668"),
    new Item(itemDef3, "France","Andrade","Elliott, John W Esq","8 Moor Place","East Southbourne and Tuckton W","Bournemouth","BH6 3BE","01347-368222","01935-821636"),
    new Item(itemDef3, "Ulysses","Mcwalters","Mcmahan, Ben L","505 Exeter Rd","Hawerby cum Beesby","Lincolnshire","DN36 5RP","01912-771311","01302-601380"),
    new Item(itemDef3, "Tyisha","Veness","Champagne Room","5396 Forth Street","Greets Green and Lyng Ward","West Midlands","B70 9DT","01547-429341","01290-367248"),
    new Item(itemDef3, "Eric","Rampy","Thompson, Michael C Esq","9472 Lind St","Desborough","Northamptonshire","NN14 2GH","01969-886290","01545-817375"),
    new Item(itemDef3, "Marg","Grasmick","Wrangle Hill Auto Auct & Slvg","7457 Cowl St #70","Bargate Ward","Southampton","SO14 3TY","01865-582516","01362-620532"),
    new Item(itemDef3, "Laquita","Hisaw","In Communications Inc","20 Gloucester Pl #96","Chirton Ward","Tyne & Wear","NE29 7AD","01746-394243","01590-982428"),
    new Item(itemDef3, "Lura","Manzella","Bizerba Usa Inc","929 Augustine St","Staple Hill Ward","South Gloucestershire","BS16 4LL","01907-538509","01340-713951"),
    new Item(itemDef3, "Yuette","Klapec","Max Video","45 Bradfield St #166","Parwich","Derbyshire","DE6 1QN","01903-649460","01933-512513"),
    new Item(itemDef3, "Fernanda","Writer","K & R Associates Inc","620 Northampton St","Wilmington","Kent","DA2 7PP","01630-202053","01687-879391"),
    new Item(itemDef3, "Charlesetta","Erm","Cain, John M Esq","5 Hygeia St","Loundsley Green Ward","Derbyshire","S40 4LY","01276-816806","01517-624517"),
    new Item(itemDef3, "Corrinne","Jaret","Sound Vision Corp","2150 Morley St","Dee Ward","Dumfries and Galloway","DG8 7DE","01625-932209","01642-322954"),
    new Item(itemDef3, "Niesha","Bruch","Rowley/hansell Petetin","24 Bolton St","Broxburn, Uphall and Winchburg","West Lothian","EH52 5TL","01874-856950","01342-793603"),
    new Item(itemDef3, "Rueben","Gastellum","Industrial Engineering Assocs","4 Forrest St","Weston-Super-Mare","North Somerset","BS23 3HG","01976-755279","01956-535511"),
    new Item(itemDef3, "Michell","Throssell","Weiss Spirt & Guyer","89 Noon St","Carbrooke","Norfolk","IP25 6JQ","01967-580851","01672-496478"),
    new Item(itemDef3, "Edgar","Kanne","Crowan, Kenneth W Esq","99 Guthrie St","New Milton","Hampshire","BH25 5DF","01326-532337","01666-638176"),
    new Item(itemDef3, "Dewitt","Julio","Rittenhouse Motor Co","7 Richmond St","Parkham","Devon","EX39 5DJ","01253-528327","01241-964675"),
    new Item(itemDef3, "Charisse","Spinello","Modern Plastics Corp","9165 Primrose St","Darnall Ward","Yorkshire, South","S4 7WN","01719-831436","01207-428520"),
    new Item(itemDef3, "Mee","Lapinski","Galloway Electric Co Inc","9 Pengwern St","Marldon","Devon","TQ3 1SA","01578-287816","01939-815208"),
    new Item(itemDef3, "Peter","Gutierres","Niagara Custombuilt Mfg Co","4410 Tarlton St","Prestatyn Community","Denbighshire","LL19 9EG","01842-767201","01859-648598"),
    new Item(itemDef3, "Octavio","Salvadore","Practical Periphrals","6949 Bourne St","Lye and Stourbridge North Ward","West Midlands","DY5 2QP","01552-709248","01743-139456"),
    new Item(itemDef3, "Martha","Teplica","Curtin, Patricia M Esq","148 Rembrandt St","Warlingham","Surrey","CR6 9SW","01677-684257","01583-287367"),
    new Item(itemDef3, "Tamesha","Veigel","Wilhelm, James E Jr","2200 Nelson St #58","Newport","Isle of Wight","PO30 5AL","01217-342071","01280-786847"),
    new Item(itemDef3, "Tess","Sitra","Smart Signs","61 Rossett St","Chichester","West Sussex","PO19 1RH","01473-229124","01848-116775"),
    new Item(itemDef3, "Leonard","Kufner","Arctic Star Distributing Inc","41 Canning St","Steornabhagh a Deas Ward","Western Isles","HS1 2PZ","01230-623547","01604-718601"),
    new Item(itemDef3, "Svetlana","Tauras","Lensbower, Gregory L Esq","8289 Cadogan St","South Ward","North Eart Lincolnshire","DN33 1AU","01781-827317","01509-121140"),
    new Item(itemDef3, "Pok","Molaison","Portal Metal Products","211 Hobart St","Newquay","Cornwall","TR7 1LS","01866-248660","01315-284286"),
    new Item(itemDef3, "Augustine","Growcock","Lynema, Cliff Cpa","114 Falkland St #8845","Brimpton","Berkshire","RG7 4RF","01541-802635","01926-108010"),
    new Item(itemDef3, "Karma","Quarto","J C S Machinery","1 Birkett St","Shard End Ward","West Midlands","B33 0NH","01857-864722","01307-667811"),
    new Item(itemDef3, "Reed","Weisinger","Berick, Joseph G Esq","5147 Blackstone St","Letchworth South West Ward","Hertfordshire","SG6 3LE","01243-678286","01292-297245"),
    new Item(itemDef3, "German","Zelaya","Jackson & Heit Machine Co Inc","7 Shenstone St","Longhill Ward","Yorkshire, East (North Humbers","HU8 9PZ","01400-269033","01366-210656"),
    new Item(itemDef3, "Milly","Savidge","Bridgeway Plan For Health","129 Alexander Pope St","Franche Ward","Hereford and Worcester","DY11 9BW","01702-725589","01421-132652"),
    new Item(itemDef3, "Luis","Ear","Wa Inst For Plcy Studies","2 Birchfield Rd","Whittington","Shropshire","SY11 4PH","01462-648669","01405-648623"),
    new Item(itemDef3, "Ciara","Cobbley","Wmgl 101.7 Fm","7523 Kempton Rd","Cockerton West Ward","Darlington","DL3 0JF","01235-647932","01809-443217"),
    new Item(itemDef3, "Alethea","Mould","Hughlett, Henry T Jr","6305 Elstow St","Castle Ward","West Sussex","BN12 6PR","01662-114247","01351-868965"),
    new Item(itemDef3, "Margurite","Loperfido","Penrose Place Pharmacy Inc","218 Greenbank Drive","Devizes","Wiltshire","SN10 3DU","01407-866759","01640-661191"),
    new Item(itemDef3, "Vernice","Sperazza","Novak, Alan Paul Esq","8921 Forge St","Colnbrook with Poyle","Buckinghamshire","SL3 0PY","01822-563044","01765-519419"),
    new Item(itemDef3, "Vicente","Rawicki","B & S Tool And Cutter Svc Inc","3060 St Ambrose Grove #261","Aldridge Central and South War","West Midlands","WS9 8UR","01327-770774","01286-258121"),
    new Item(itemDef3, "Craig","Cua","Berry, John M Esq","8388 Bessemer St #5","East Putney Ward","Greater London","SW15 2RP","01483-418969","01818-980469"),
    new Item(itemDef3, "Jenise","Dulle","Alden, Michael H Esq","87 Pownall Sq","Sawston","Cambridgeshire","CB22 3BB","01709-854691","01572-193368"),
    new Item(itemDef3, "Marylin","Cornelison","Ernest E Heuer & Company Pc","39 Wye St","Wakefield North Ward","West Yorkshire","WF1 1DR","01609-882184","01295-331807"),
    new Item(itemDef3, "Marget","Gunst","Frankel, Stephen","2732 Bostock St #1","St. Enoder","Cornwall","TR9 6NJ","01693-310794","01512-975244"),
    new Item(itemDef3, "Annett","Bunselmeyer","Guynes Design Inc","5562 Fairfield St #847","Ryde","Isle of Wight","PO33 1HH","01891-702579","01333-972244"),
    new Item(itemDef3, "Kip","Turziano","General Appraisal Co","37 Meadow St","Laindon Park Ward","Essex","SS15 6LE","01850-347846","01222-164469"),
    new Item(itemDef3, "Melina","Orizabal","Sheraton Inn Ocean Front","3 Nevison St","Lymington and Pennington","Hampshire","SO41 1DL","01420-307327","01245-559333"),
    new Item(itemDef3, "Tina","Clapham","Cooper Myers Y Co","5662 William Moult St","Aylesbury","Buckinghamshire","HP21 8PP","01567-296442","01493-245349"),
    new Item(itemDef3, "Luisa","Devereux","Cash 4 Checks","3 North View #35","Burmantofts and Richmond Hill ","West Yorkshire","LS9 7JH","01607-269930","01334-807355"),
    new Item(itemDef3, "Pedro","Aschoff","Charlotte Chamber","135 Opie St","Howard Town Ward","Derbyshire","SK13 8BB","01386-981141","01823-517315"),
    new Item(itemDef3, "Carrol","Kunimitsu","Kisc 98 Kiss Fm","1 Askew St","Farnham","Surrey","GU9 9AS","01260-641258","01415-364461"),
    new Item(itemDef3, "Alba","Mosseri","Schwartzbard, Gail L Esq","4 Burnall St","Beeston West Ward","Nottinghamshire","NG9 1AE","01543-198690","01231-806535"),
    new Item(itemDef3, "Domonique","Sandlin","Marketing Horizons Inc","95 Denton St","Wollaton West Ward","Nottinghamshire","NG8 2NB","01355-500797","01987-728730"),
    new Item(itemDef3, "Rory","Neufville","Brady, Brad J Esq","5 Chadwick St #7","Llangeler Community","Ceredigion","SA44 5HF","01252-621329","01442-700486"),
    new Item(itemDef3, "Dustin","Klingaman","Welders Supply","67 Micawber St","Brockley Ward","Greater London","SE14 6RQ","01712-135466","01523-775781"),
    new Item(itemDef3, "Lyndia","Moonshower","Bomarko Inc","43 Williamson St #7995","Meads Ward","East Sussex","BN20 7HB","01469-300335","01789-132579"),
    new Item(itemDef3, "Jules","Hiltner","Benitez, Brigida Esq","5 Howe St","Broxburn, Uphall and Winchburg","West Lothian","EH52 6NF","01428-343825","01814-878359"),
    new Item(itemDef3, "Dong","Kopczynski","Kennedy Scales Inc","7 Cheapside #9","St. Ive","Cornwall","PL14 5PA","01770-129032","01639-518104"),
    new Item(itemDef3, "Justine","Salta","Barajas & Bustamante Archl","85 Bridgewater St","Shard End Ward","West Midlands","B34 7BP","01689-253476","01376-851958"),
    new Item(itemDef3, "Chantay","Kamens","Brewster Wallcoverings Co","763 Parkfield Rd","Norton Canes","Staffordshire","WS11 9RH","01823-383806","01245-146126"),
    new Item(itemDef3, "Tequila","Chisum","Bohs Well Drilling Inc","662 Grove Park","Bulwell Ward","Nottinghamshire","NG6 8RG","01835-634521","01702-946496"),
    new Item(itemDef3, "Maybelle","Consolazio","Gavin, Lee W Esq","5410 Lawton St","Treorchy Community","Rhondda Cynon Taff","CF42 6PL","01383-647035","01351-200904"),
    new Item(itemDef3, "Margarett","Bairo","Reid, Carleton B Esq","3 August Rd","Maybury and Sheerwater Ward","Surrey","GU21 5QL","01670-813697","01903-424890"),
    new Item(itemDef3, "Janessa","Noonon","Canterbury, Christopher C","476 Starkie St","Westgate Ward","Gloucestershire","GL1 1QW","01472-324699","01841-979075"),
    new Item(itemDef3, "Sol","Cowser","Omni Mandalay","6448 Tillard St","Conisbrough and Denaby Ward","South Yorkshire","DN12 4JF","01412-528394","01580-134516"),
    new Item(itemDef3, "Louann","Smethers","Lba Savings Bank","3055 Creswick St","Newbold and Brownsover Ward","Warwickshire","CV21 1LN","01670-234959","01488-872531"),
    new Item(itemDef3, "Lindsay","Yadao","Lutz, Christopher T Esq","7 Jolliffe St","Middlewich","Cheshire","CW10 9GB","01947-566661","01481-295251"),
    new Item(itemDef3, "Malika","Hanton","Association Of Art Museum Dir","1175 Greig St","St. Marys Ward","Greater Manchester","M25 0ZN","01532-497454","01705-208145"),
    new Item(itemDef3, "Stefany","Ferenz","L & L Sales Co Inc","636 Portland Place","Gresham Ward","Middlesbrough","TS1 4RG","01743-977277","01704-986828"),
    new Item(itemDef3, "Abraham","Cratch","Cavuto, John A","41 Benedict St","Aldborough Ward","Greater London","IG2 7QG","01599-245408","01695-305111")
];


var itemRepo = new ItemRepository(items3);

var itemDef = itemRepo.getItemDefinition();

var sortOption = itemDef.defaultSort;

var itemTable = new ItemTable(jQuery, jQuery('div#table'), itemRepo, sortOption);

var resetButton = new SortResetButton(jQuery, jQuery('button#sortReset'));

itemTable.drawTable();



