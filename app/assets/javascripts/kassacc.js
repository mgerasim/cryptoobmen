
function getCurrencyInput()
{
    $(document).find('[data-exchange-type="input"]').each(function(i, e) {
    
	if ($(e).hasClass('main_2nj'))
	{
	  console.log( e );
	  return e;
	}
    });
}

function UpdateInput(InputCurrency) {
    var level1 = InputCurrency.children().get(0) ;
    var level2 = $(level1).children().get(0);
    var img = $(level2).children().get(0);
    var icon = $(document).find('[data-exchange-icon="input"]');
    
    icon.children().remove();
    
    var copy = $(img).clone();
    copy.attr('src', InputCurrency.data('logo'));
    
    icon.append(copy);
    
    code = InputCurrency.data('currency-code');
    course = $(document).find('[data-exchange-currency="input"]');
    $(course).text(code);
    system = $(document).find('[data-exchange-name="input"]');
    $(system).text( InputCurrency.data('system-name') );
    
    var store = "Карта ";
    
    
    if ( typeof InputCurrency.data("cryptocurrency") !== 'undefined' ) 
    {
    	$("#instruction_field01").text("Кошелек")
    	$("#instruction_field02").hide();
    	$("#instruction_field03").hide();
    
	store = "Кошелек ";
    
       var cryptocurrency = InputCurrency.data("cryptocurrency");
       console.log(cryptocurrency);
       var isShowed = 0;
       $("#cashes_to").children().each(function(i, e) {
    	   $(e).removeClass('main_2nj');
    	   $(e).addClass('main_k0X');
    	   
           if ($(e).data("cryptocurrency") == cryptocurrency && typeof $(e).data("bank") !== 'undefined' ) 
           {
        	$(e).show();
        	if (isShowed == 0) {
        	    isShowed = 1;
        	    $(e).removeClass('main_k0X');
        	    $(e).addClass('main_2nj');
        	    
        	    UpdateOutput( $(e) );
        	}
           }
           else
           {
        	$(e).hide();
           }
       });
    }
    else
    {
//    if (InputCurrency.data("bank") !== 'undefined' )

    	$("#instruction_field01").text("Получатель");
    	$("#instruction_field02").show();
    	$("#instruction_field03").show();

	var currency = InputCurrency.data("currency");
	
        var isShowed = 0;
       $("#cashes_to").children().each(function(i, e) {
    	   $(e).removeClass('main_2nj');
    	   $(e).addClass('main_k0X');
    	   
           if ( $(e).data("currency") == currency && typeof $(e).data("bank") == 'undefined') 
           {
        	$(e).show();
        	if (isShowed == 0) {
        	    isShowed = 1;
        	    $(e).removeClass('main_k0X');
        	    $(e).addClass('main_2nj');
        	    
        	    UpdateOutput( $(e) );
        	}
           }
           else
           {
        	$(e).hide();
           }
       });
    }
    $("#mobiinput").text( InputCurrency.data('system-name') );
    
    console.log($("#input-account-store"));
    
    $("#input-account-store").text( store + InputCurrency.data('system-name')  );

    $(document).find('[data-exchange-personal="input"]').text( InputCurrency.data('personal') );
    $(document).find('[data-exchange-account="input"]').text( InputCurrency.data('account') );
}


function UpdateOutput(Currency) {
    var level1 = Currency.children().get(0) ;
    var level2 = $(level1).children().get(0);
    var img = $(level2).children().get(0);
    var icon = $(document).find('[data-exchange-icon="output"]');
    
    icon.children().remove();
    
    var copy = $(img).clone();
    copy.attr('src', Currency.data('logo'));
    
    icon.append(copy);
    
    code = Currency.data('currency-code');
    course = $(document).find('[data-exchange-currency="output"]');
    $(course).text(code);
    
    system = $(document).find('[data-exchange-name="output"]');
    $(system).text( Currency.data('system-name') );
    
    $('#value-input').val( parseFloat(Currency.data(  'course-input')).toFixed(2) );
    $('#value-output').val( parseFloat(Currency.data('course-output')).toFixed(2) );
    
    span_course_input = $(document).find('[data-course="input-value"]');
    g_course_input = parseFloat(Currency.data('course-input'));
    $(span_course_input).text( parseFloat(Currency.data('course-input')).toFixed(2) );
    $(document).find('[data-exchange-value="input"]').text( parseFloat(Currency.data('course-input')).toFixed(2) );
    
    span_course_output = $(document).find('[data-course="output-value"]');
    g_course_output = parseFloat(Currency.data('course-output'));
    $(span_course_output).text( parseFloat(Currency.data('course-output')).toFixed(2) );
    $(document).find('[data-exchange-value="output"]').text( parseFloat(Currency.data('course-output')).toFixed(2) );    
        
    $(document).find('[data-exchange-form-label="output-account"]').text( Currency.data('store') + Currency.data('system-name')  );
        
    $("#cashes_to").children().each(function(i, e) {
    	   $(e).removeClass('main_2nj');
    	   $(e).addClass('main_k0X');
    	});
    	
	$(Currency).removeClass('main_k0X');
	$(Currency).addClass('main_2nj');
    
    $("#mobioutput").text( Currency.data('system-name') );
    //$("#coeffburse").text( Currency.data('coeffburse' ) );
    $(document).find('[data-exchange-coeffburse="input"]').text( Currency.data('coeffburse') );


    if (Currency.data('minexchange') != null) 
    {
    	$('#value-output').attr("minexchange", Currency.data('minexchange'));
    }
    else
    {
    	$('#value-output').attr("minexchange", "");
    }
    

}

function InitOutput() {
    var column = $(document).find('[data-exchange-column="output"]');
    var block = column.children().get(0);
    var list = $(block).children().get(3);
    var level1 = $(list).children().get(0);
    var level2 = $(level1).children().get(2);
    var level3 = $(level2).children().get(0);
    var init = $(level3);
    
    UpdateOutput(init);

}

$(document).ready(function() {
    var column = $(document).find('[data-exchange-column="input"]');
    var block = column.children().get(0);
    var list = $(block).children().get(3);
    var level1 = $(list).children().get(0);
    var level2 = $(level1).children().get(2);
    var level3 = $(level2).children().get(0);
    var init = $(level3);
    UpdateInput(init);
    
    $(document).find('[data-exchange-type="input"]').click(function() {
	UpdateInput($(this));
	
	var button = $(".buttons_3i0")[0];
	
	button.click();
	
	
    });
    
    $(document).find('[data-exchange-type="output"]').click(function() {
	UpdateOutput($(this));
	
	$("#btn_close").click();
    });
    
    $(".exchange-output").click(function() {
	UpdateOutput($(this));
    });
    
    InitOutput();
    
    
    $('#headerSmallOpen').click(function() {
	       $('#smallMenu').show();
    });

    
    $('#headerSmallOpen1').click(function() {
         $('body').toggleClass("header-open");
    });    
    
    $('#grid1').show();
});
    




     function updateQuery(cash_a, cash_b) {
         var el = document.getElementById("form_cash_a_name");
         el.innerText = cash_a.data("system-name");
         
         var cash_a_icon = document.getElementById("form_cash_a_icon");
         cash_a_icon.className = '';
         cash_a_icon.className = cash_a.data("system-icon");
         
         var cash_a_icon2 = document.getElementById("form_cash_a_icon_2");
         cash_a_icon2.className = '';
         cash_a_icon2.className = cash_a.data("system-icon");
         
         var el2 = document.getElementById("form_cash_b_name");
         el2.innerText = cash_b.data("system-name");
         
         var cash_b_icon = document.getElementById("form_cash_b_icon");
         cash_b_icon.className = '';
         cash_b_icon.className = cash_b.data("system-icon");
         
         var cash_b_icon2 = document.getElementById("form_cash_b_icon_2");
         cash_b_icon2.className = '';
         cash_b_icon2.className = cash_b.data("system-icon");
         
         var cash_input_currency = document.getElementById("cash_input_currency");
         cash_input_currency.innerText = cash_a.data("input-currency");
         document.getElementById("input-currency").innerText = cash_a.data("input-currency");
         
         
         var cash_output_currency = document.getElementById("cash_output_currency");
         cash_output_currency.innerText = cash_b.data("output-currency");
         document.getElementById("output-currency").innerText = cash_b.data("output-currency");
         
         document.getElementById("currency_exhange").innerText = cash_b.data("course");
         console.log(cash_b.data("course"));
         
         
         
        $("#cash_input_value").text( document.getElementById("value-input").value );
	$("#value-output").val( (document.getElementById("value-input").value * cash_b.data("course") + (document.getElementById("value-input").value * cash_b.data("course")) * cash_b.data("coeff-procent")/100).toFixed(2) );
	
	
	$("#cash_output_value").text( document.getElementById("value-input").value * cash_b.data("course") );
//	$("#value-output").val( $("#cash_output_value").text() );
     }

    function handleClickCashATypeCy(elem) {
       var cash_a = elem.data("cash");
       var isShowed = 0;
       $("#cashes_to").children().each(function(i, e) {
    	   $(e).removeClass('main_2nj');
    	   $(e).addClass('main_k0X');
    	   
           if ($(e).data("cash_a") == cash_a) 
           {
        	$(e).show();
        	if (isShowed == 0) {
        	    isShowed = 1;
        	    $(e).removeClass('main_k0X');
        	    $(e).addClass('main_2nj');
        	    updateQuery(elem, $(e) );
        	    console.log("update");
        	}
           }
           else
           {
        	$(e).hide();
           }
       });

    
    }

function handlePressValueInput()
{

}

var g_course_input = 0.0;
var g_course_output = 0.0;


$(document).ready(function() {
    
//   $("#value-input").val(1);
   
//   handleClickCashATypeCy($($("#init_cash").children().get(0)));
   
   $("#value-input").change(function() {
//           handlePressValueInput();






    });

     $("#value-input").keyup(function(e) {
        $(document).find('[data-exchange-value="input"]').text( $(this).val() );
        $(document).find('[data-exchange-value="output"]').text( $(this).val() * parseFloat($("#currency_exchange").text()) );
        var course_input = parseFloat($('#course-input-value').text());
        $("#value-output").val( (parseFloat($(this).val()) / course_input *  g_course_output).toFixed(3)  );
        $(document).find('[data-exchange-value="output"]').text( $("#value-output").val() );


   		$("#tooltip_minexchange").hide();
     });
     
     $("#value-output").keyup(function(e) {
        $(document).find('[data-exchange-value="output"]').text( $(this).val() );
//        $(document).find('[data-exchange-value="input"]').text( $(this).val() * parseFloat($("#currency_exchange").text()) );
//          var course_output = parseFloat($('#currency-exchange').text());
          $("#value-input").val( (parseFloat($(this).val()) / g_course_output * g_course_input).toFixed(3) );
          $(document).find('[data-exchange-value="input"]').text( $("#value-input").val() );


   		$("#tooltip_minexchange").hide();
     });
   
   $("#order-email").change(function() {
	$("#tooltip_email").hide();
   });
   
   $("#order-fullname").change(function() {
	$("#tooltip_fullname").hide();
   });
   
   $("#order-input-account-store").change(function() {
	$("#tooltip_input_account_store").hide();
   });
   
   $("#order-output-account-store").change(function() {
	$("#tooltip_output_account_store").hide();
   });
   
   $("#order-alert").hide();
   
   // Orders
  
	function isEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}

   $("#modalInstructionBtn").click(function() {

		var status = 4;

   		$(this).addClass("loading");

		$.post("/api/v1/orders/status",
		    {
			id: ID,
			status: status
		    },
		    function(data, status) {
		    }
		)
		.done(function() {
		    $("#order-alert").show();
		    $("#modalInstructionBtn").removeClass("loading");

			$('#myModal').modal('hide');

			$('#id_order').text(ID);
			$('#myModalFinish').modal('show')


		});	

   });
   
   var ID = 0;

   $("#sendOrder").click(function() {

   	$("#tooltip_minexchange").hide();


   	if ($('#value-output').attr('minexchange') != null) 
   	{
   		if ($('#value-output').attr('minexchange') > $('#value-output').val())
   		{
   			$("#tooltip_minexchange_value").text($('#value-output').attr('minexchange'));
   			$("#tooltip_minexchange").show();
   			return
   		}
   	}


	var value_input = $("#value-input").val();
	var value_output = $("#value-output").val();
	var currency_input = $("#form_cash_a_name").text() + " " + $("#input-currency").text();
	var currency_output = $("#form_cash_b_name").text() + " " + $("#output-currency").text();
	var email = $("#order-email").val();
	var fullname = $("#order-fullname").val();
	var input_account_store = $("#order-input-account-store").val();
	var output_account_store = $("#order-output-account-store").val();
	var status = 1;
	if(email == "") {
	    $("#tooltip_email").show();
	    return ;
	}

	if (!isEmail(email))	 {
	    $("#tooltip_email").show();
	    return ;
	}
	
	if(fullname == "") {
	    $("#tooltip_fullname").show();
	    return ;
	}
	
	if(input_account_store == "") {
	    $("#tooltip_input_account_store").show();
	    return ;
	}
	
	if(output_account_store == "") {
	    $("#tooltip_output_account_store").show();
	    return ;
	}

	$.post("/api/v1/orders/create",
		    {
			value_input: value_input,
			value_output: value_output,
			currency_input: currency_input,
			currency_output: currency_output,
			email: email,
			fullname: fullname,
			input_account: input_account_store,
			output_account: output_account_store,
			status: status
		    },
		    function(data, status) {
		    }
		)
		.done(function(msg) {
			ID = msg;

			$.get("/api/v1/orders/duration",
				{
					id: ID

				},
				function(data, status) {

				}
			)
			.done(function(msg) {
				DURATION = msg * 60;

				tick();

			});

		    $("#modalInstructionBtn").removeClass("loading");
			$('#ticketdonetimer').removeClass('ticket_done_error');
			$('#myModal').modal('show');
			$("#modalInstructionBtn").show();
		});	
   });
});


var DURATION = 0;
function tick() {
	var min = Math.floor(DURATION / 60); 
	var sec = DURATION % 60;
	$('#ticketdonetimer').text('Оплатите заявку в течение ' + min + ' мин ' + sec + ' сек');
	DURATION--;
	if (DURATION > 0) {
		setTimeout(tick, 1000);
	}
	else
	{
		$('#ticketdonetimer').addClass('ticket_done_error');
		$('#ticketdonetimer').text('Время по оплате заказа истекло! Пожалуйста, создайте заявку повторно по-актульаному курсу!');
		$("#modalInstructionBtn").hide();	
	}
}


document.addEventListener("DOMContentLoadedee", function() {

    
   $(".cash_a").click(function() {
//       handleClickCashATypeCy($(this));
   });
   
   
   $(".Xcash_b").click(function() {
	$("#cashes_to").children().each(function(i, e) {
    	   $(e).removeClass('main_2nj');
    	   $(e).addClass('main_k0X');
    	});
    	
    	$(this).removeClass('main_k0X');
        $(this).addClass('main_2nj');
        
        var cash_b = $(this);
           
        var el2 = document.getElementById("form_cash_b_name");
         el2.innerText = cash_b.data("system-name");
         
         var cash_b_icon = document.getElementById("form_cash_b_icon");
         cash_b_icon.className = '';
         cash_b_icon.className = cash_b.data("system-icon");
         
         var cash_b_icon2 = document.getElementById("form_cash_b_icon_2");
         cash_b_icon2.className = '';
         cash_b_icon2.className = cash_b.data("system-icon");
         
         
         var cash_output_currency = document.getElementById("cash_output_currency");
         cash_output_currency.innerText = cash_b.data("output-currency");
         document.getElementById("output-currency").innerText = cash_b.data("output-currency");
         
         document.getElementById("currency_exhange").innerText = cash_b.data("course");
         console.log(cash_b.data("course"));
         
         document.getElementById("value-output").value = (document.getElementById("value-input").value * cash_b.data("course") + document.getElementById("value-input").value * cash_b.data("course") * cash_b.data("coeff-procent") / 100).toFixed(2);
         
         	$("#cash_input_value").text( document.getElementById("value-input").value );
	$("#cash_output_value").text( document.getElementById("value-input").value * cash_b.data("course") );
//	$("#value-output").val( $(this).val() * $("#currency_exchange").text() );
//	$("#value-output").val( $("#cash_output_value").text() );

    
   });
    
    classname = document.getElementsByClassName('main_Q66');
    console.log(classname);
    for (var i = 0; i < classname.length; i++) {
        console.log(classname[i]);
        var filterButtons = Array.from(classname[i].children);
        console.log(filterButtons);
        filterButtons.forEach(function(button) {
          console.log(button);
          button.addEventListener('click', function(evt) {
            var btn = evt.currentTarget;
            var isActive = btn.classList.contains('main_jgK');
            if (!isActive) {
                console.log(btn.parentNode.children.length);
                for(var k = 0; k < btn.parentNode.children.length; k++) {
                    btn.parentNode.children[k].classList.remove('main_jgK');
                    btn.parentNode.children[k].classList.add('main_3DC');
                }
                btn.classList.remove('main_3DC');
                btn.classList.add('main_jgK');
            }
          });
        });
        
        /*
        filterButtons.forEach(function (button) {
        
          button.addEventListener('click', function(evt) {
	     var btn = evt.currentTarget;
               
          }, false)
        }*/
    }
});

'use strict';

var Shuffle = window.Shuffle;

var Demo = function (element) {
  this.element = element;
  
  this.shuffle = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: element.querySelector('.my-sizer-element'),
});
              
                // Log events.
this.addShuffleEventListeners();
                  
this._activeFilters = [];
                    
this.addFilterButtons();

this.mode = 'exclusive';
    };

Demo.prototype.addShuffleEventListeners = function () {
  this.shuffle.on(Shuffle.EventType.LAYOUT, function (data) {
      console.log('layout. data:', data);
        });
        
          this.shuffle.on(Shuffle.EventType.REMOVED, function (data) {
              console.log('removed. data:', data);
                });
                };
                
    
Demo.prototype.addFilterButtons = function () {
  var options = document.querySelector('.main_Q66');
  
    if (!options) {
       console.log("DD");
        return;
          }
          
            var filterButtons = Array.from(options.children);
            
              filterButtons.forEach(function (button) {
                  button.addEventListener('click', this._handleFilterClick.bind(this), false);
                    }, this);
};                    

Demo.prototype._handleFilterClick = function (evt) {
  var btn = evt.currentTarget;
    var isActive = btn.classList.contains('active');
    console.log(isActive)
};      

/*
document.addEventListener('DOMContentLoaded', function () {
  window.demo = new Demo(document.getElementById('grid'));
  });
  */
  