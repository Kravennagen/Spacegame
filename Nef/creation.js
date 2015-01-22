var $body = $('body');

$body.css({
    margin: 0,
    padding: 0,
    background : 'url(img/spaceback.jpg)  no-repeat fixed bottom left'
});

$body.append($('<div></div>')
	     .attr("id","header")
	     .css({
		 padding: '2%',
		 width: '100%',
		 height: '20%',
	     })
	     .append($('<div></div>')
		     .attr("id","login")
		     .append($('<input>')
			     .attr({id:"login", placeholder:"Login", name:"login"}))
		     .append($('<input>')
			     .attr({id:"mdp", placeholder:"Password", name:"mdp"}))
		     .append($('<button></button>')
			     .attr({id:"login"})
			     .append("Connection"))
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
				 'font-size': '46px',
				 'text-align': 'center',
				 color: 'white'
			     }))))
    .append($('<div></div>')
	    .attr("id","mine")
	    .css({
		width: '30%',
		height: '80%',
		display: 'block',
		float: 'left'
	    })
	    .append($('<button></button>')
		    .append("Ameliorer"))
	    .append($('<div></div>')
		    .attr("id","argent")
		    .append($('<img>').attr("src", "./img/argent_mine.jpg")
			    .css({
				width: '50%',
				height: '25%'
			    })))
	    .append($('<button></button>')
		    .append("Ameliorer"))
	    .append($('<div></div>')
		    .attr("id","cristal")
		    .append($('<img>').attr("src", "./img/crystal-cave-615.jpg")
			    .css({
				width: '50%',
				height: '25%'
			    })))
	    .append($('<button></button>')
		    .append("Ameliorer"))
	    .append($('<div></div>')
		    .attr("id","noire")
		    .append($('<img>').attr("src", "./img/trou_noir_1.jpg")
			    .css({
				width: '50%',
				height: '25%'
			    }))))
    .append($('<div></div>')
	    .attr("id","usine")
	    .css({
		width: '40%',
		height: '80%',
		float: 'left'
	    })
	    .append($('<button></button>')
		    .append("Ameliorer").css({'margin-left': '30%'}))
	    .append($('<button></button>')
		    .append("Creer"))
	    .append($('<div></div>')
		    .attr("id","droide")
		    .append($('<img>').attr("src", "./img/factory.jpg")
			    .css({
				width: '80%',
				height: '45%'
			    }))))
    .append($('<div></div>')
	    .attr("id","planete")
	    .css({
		width: '30%',
		height: '80%',
		display: 'block',
		float: 'left'
	    })
	    .append($('<button></button>')
		    .append("Attaquer"))
	    .append($('<div></div>')
		    .attr("id","or")	   
		    .append($('<img>').attr("src", "./img/golden-planet_p.jpg")
			    .css({
				width: '50%',
				height: '25%'
			    })))
	    .append($('<button></button>')
		    .append("Attaquer"))
	    .append($('<div></div>')
		    .attr("id","rubis")	   
		    .append($('<img>').attr("src", "./img/redp_planet.jpg")
			    .css({
				width: '50%',
				height: '25%'
			    })))
	    .append($('<button></button>')
		    .append("Attaquer"))
	    .append($('<div></div>')
		    .attr("id","jade")
		    .append($('<img>').attr("src", "./img/green-planet_p.jpg")
			    .css({
				width: '50%',
				height: '25%'
			    }))));
