var $body = $('body');

function connect() {
    var $login = $('#username').val();
    var $psw = $('#mdp').val();
    $('#mdp').val("");
    $('#username').val("");
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/players/login',
	type: 'POST',
	xhrFields: {withCredentials: true},
	'Content-Type': "application/json",
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	data: {"username": "diagne_s@etna-alternance.net", "password": "4msRPSVZ"},
	error:function() {log_screen();},
	success:function() {create_co();}});
}

function deconnect() {
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/players/logout',
	type: 'POST',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	data: {},
	error:function() {},
	success:function() {log_screen();}});
}

function get_info() {
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/metalmines',
	type: 'GET',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {
	    $('#argent #level').empty();
	    $('#produarg').empty();
	    $('#nbarg').empty();
	    $('#nextarg').empty();
	    $('#argent #level').append("Niveau   :" + data.level);
	    $('#produarg').append(data.production + "  argent/min");
	    $('#nbarg').append(data.amount + "  argent");
	    $('#nextarg').append("Next Level  :" + data.costNext.metal + " metal  " + data.costNext.metal + " argent");
	}});
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/crystalmines',
	type: 'GET',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {
	    $('#cristal #level').empty();
	    $('#producrist').empty();
	    $('#nbcrist').empty();
	    $('#nextcrist').empty();
	    $('#cristal #level').append("Niveau   :" + data.level);
	    $('#producrist').append(data.production + "  cristaux/min");
	    $('#nbcrist').append(data.amount + "  cristaux");
	    $('#nextcrist').append("Next Level  :" + data.costNext.metal + " metal  " + data.costNext.metal + " argent");
	}});
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/factorys',
	type: 'GET',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {
	    $('#droide #level').empty();
	    $('#usine #droidelevel').empty();
	    $('#nextusin').empty();
	    $('#nextusin').append("Next Level  :" + data.costNext.metal + " metal  " + data.costNext.metal + " argent");
	    $('#droide #level').append("Niveau   :" + data.level);
	    for (i = 1; i <= data.level; i++) {
		$('#usine #droidelevel').append($('<option></option>').append(" " + i));
	    }
	}});
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/droids',
	type: 'GET',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {
	    troop = data.troops;
	    $('#droide #nombre').empty();
	    for (var key in troop){
		$('#droide #nombre').append(" Level " + key + " : " + troop[key]);
	    }
	    $('#droide #nombre').append("  droide");
	}});
}

function create_android() {
    var level = $('#usine #droidelevel').val();
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/factorys/add_droid',
	type: 'PUT',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	data:{"level": level},
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) { get_info();}});
}

function update_crystal() {
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/crystalmines/levelUp',
	type: 'PUT',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {get_info();}});
}

function update_argent() {
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/metalmines/levelUp',
	type: 'PUT',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {get_info();}});
}

function update_factory() {
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/factorys/levelUp',
	type: 'PUT',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {get_info();}});
}

function log_screen() {
    var $body = $('body');
    $body.empty();
    $body.append($('<div></div>')
		 .attr("id","headerlog")
		 .append($('<div></div>')
			 .css({
			     width: '100%',
			     height: '30%'
			 })
			 .append($('<h1></h1>')
				 .append("SPACE GAME")
				 .css({
				     margin: 0,
				     padding: 0,
				     'font-family': 'space, sans-serif',
				     'font-size': '900%',
				     'text-align': 'center',
				     color: '#7FC74B'
				 })))
		 .append($('<div></div>')
			 .attr("id","connection")
			 .append($('<div></div>').css({'text-align':'center'})
				 .append($('<input>')
					 .attr({id:"username", placeholder:"Login", name:"login"})))
			 .append($('<div></div>').css({'text-align':'center'})
				 .append($('<input>')
					 .attr({id:"mdp", placeholder:"Password", name:"mdp"})))
			 .append($('<div></div>').css({'text-align':'center'})
				 .append($('<button></button>')
					 .attr({id:"loginbut"})
					 .append("Connection")).click(connect))
			 .css({
			     width: '100%',
			     height: '70%',
			     float: 'left'
			 })));
}

function show_atack() {
    $('#atack').show();
}

function add_drone() {
    var clone = $('#form').clone();
    $(clone.find("button")[0]).click(add_drone);
    $(clone.find("button")[1]).click(del_drone);
    $('#allform').append(clone);
}

function del_drone() {
    console.log(this);
    $(this).parent().remove();
}

function atack() {
    var target = $('#target').val();
	    $.ajax({
		url: 'http://163.5.245.219:3000/api/1/droids/atack/:' + target,
		type: 'PUT',
		xhrFields: {withCredentials: true},
		username: "diagne_s@etna-alternance.net",
		password: "4msRPSVZ",
		data: {$($('#allform').find("input")[0]).val(), $($('#allform').find("input")[1]).val()}
		'Content-Type': "application/json",

		error:function(data) {alert("L'attaque a echouer l'ID n'existe pas ou bien vous n'avez pas assez de drone");},
		success:function(data) {alert("Votre attaque est lancée"); get_info();}});   
	} 
    }
}

function who_atack() {
    var id = target;
    $.ajax({
	url: 'http://163.5.245.219:3000/api/1/droids/atacks',
	type: 'GET',
	xhrFields: {withCredentials: true},
	username: "diagne_s@etna-alternance.net",
	password: "4msRPSVZ",
	'Content-Type': "application/json",
	error:function(data) {},
	success:function(data) {});    
}

function create_co(){
    var $body = $('body');
    $body.empty();
    $body.append($('<div></div>')
		 .attr("id","header")
		 .append($('<div></div>')
			 .attr("id","login")
			 .append($('<p></p>').append("Welcome").css({color: "white", 'text-align': 'center'}))
			 .append($('<button></button>')
				 .attr({id:"logout"}).append("Log Out").click(deconnect))
			 .css({
			     width: '30%',
			     height: '100%',
			     float: 'left'
			 }))
		 .append($('<div></div>')
			 .css({
			     width: '70%',
			     height: '100%'
			 })
			 .append($('<h1></h1>')
				 .append("SPACE GAME")
				 .css({
				     margin: 0,
				     padding: 0,
				     'font-family': 'space, sans-serif',
				     'font-size': '400%',
				     'text-align': 'center',
				     color: '#7FC74B'
				 }))))
	.append($('<div></div>')
		.attr("id","mine")
		.append($('<button></button>').click(update_argent)
			.append("Ameliorer"))
		.append($('<div></div>')
			.attr("id","argent")
			.append($('<div></div>').hide()
				.attr({id:"info"})
				.append($('<p></p>')
					.append("Mine d'argent"))
				.append($('<p></p>')
					.attr("id", "level"))
				.append($('<p></p>')
					.attr("id", "produarg"))
				.append($('<p></p>')
					.append("Actuellement vous possedez:"))
				.append($('<p></p>')
					.attr("id", "nbarg"))
				.append($('<p></p>')
					.attr("id", "nextarg"))))
		.append($('<button></button>')
			.append("Ameliorer").click(update_crystal))
		.append($('<div></div>')
			.attr("id","cristal")
			.append($('<div></div>').hide()
				.attr({id:"info"})
				.append($('<p></p>')
					.append("Mine de cristal"))
				.append($('<p></p>')
					.attr("id", "level"))
				.append($('<p></p>')
					.attr("id", "producrist"))
				.append($('<p></p>')
					.append("Actuellement vous possedez:"))
				.append($('<p></p>')
					.attr("id", "nbcrist"))
				.append($('<p></p>')
					.attr("id", "nextcrist")))))
	.append($('<div></div>')
		.attr("id","usine")
		.css({
		    width: '35%',
		    height: '80%',
		    float: 'left'
		})
		.append($('<button></button>')
			.append("Ameliorer").css({'margin-left': '30%'}).click(update_factory))
		.append($('<button></button>').click(create_android)
			.append("Creer"))
		.append($('<select></select>')
			.attr("id", "droidelevel"))
		.append($('<div></div>')
			.attr("id","droide")
			.append($('<div></div>').hide()
				.attr({id:"info"})
				.append($('<p></p>')
					.append("Usine"))
				.append($('<p></p>')
					.attr("id", "level")
					.append("Niveau :     "))
				.append($('<p></p>')
					.append("Creation de Droides"))
				.append($('<p></p>')
					.append("")
					.append("droide/min"))
				.append($('<p></p>')
					.append("Actuellement vous possedez:"))
				.append($('<p></p>')
					.attr("id", "nombre")
					.append("droide"))
				.append($('<p></p>')
					.attr("id", "nextusin")))))
	.append($('<div></div>')
		.attr("id","planete")
		.css({
		    width: '30%',
		    height: '80%',
		    display: 'block',
		    float: 'left'
		})
		.append($('<button></button>').click(show_atack)
			.append("Attaquer"))
		.append($('<div></div>').hide()
			.attr("id","atack")
			.append($('<div></div>')
                                .attr("id","allform")
				.append($('<div></div>')
					.attr("id","form")
					.append($('<button></button>').click(add_drone).append("+"))
					.append($('<button></button>').append("-"))
					.append($('<input>')
						.attr({id:"level", placeholder:"Level"}))
					.append($('<input>')
						.attr({id:"nb", placeholder:"Nombre de drone"}))))
			.append($('<input>')
				.attr({id:"target", placeholder:"Target"}))
			.append($('<button></button>')
				.attr("id","subatack").append("send").click(atack))
			.append($('<button></button>')
				.attr("id","subatack").append("viewattack").click(atack))));
    get_info();
    $('#noire').mouseover(function(){$('#noire #info').show();});
    $('#noire').mouseout(function(){$('#noire #info').hide();});
    $('#cristal').mouseover(function(){$('#cristal #info').show();});
    $('#cristal').mouseout(function(){$('#cristal #info').hide();});
    $('#argent').mouseover(function(){$('#argent #info').show();});
    $('#argent').mouseout(function(){$('#argent #info').hide();});
    $('#droide').mouseover(function(){$('#droide #info').show();});
    $('#droide').mouseout(function(){$('#droide #info').hide();});
}


log_screen();

