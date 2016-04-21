/*probar en consola*/
function ternasPitagoricas(){
	for ( var i = 1; i <= 500; i++ )
		for ( var j = 1; j <= 500; j++ )
			for ( var k = 1; k <= 500; k++ )
				if ( i*i == j*j + k*k )
					console.log("("+i+" , "+j+" , "+k+" ) ");
}

ternasPitagoricas();
