(function ($) {

	module("My Functions");

	test("a basic test example", function() {
		ok(true, "this test is fine");
	    var value = "hello";
	    equal(value, "hello", "We expect value to be hello");
	});

	test("first test within module", function() {
	    ok(true, "all pass");
	});
	
	test("some other test", function() {
	  	expect(2);
	  	equal(true, false, "failing test");
	  	equal(true, true, "passing test");
	});

	test("sum should work", function() {
	  	var a = 3, b = 2;
	  	var res = sum(a, b);

	  	equal(res, 5, "sum result should be 5");
	});

	test("divide should work", function() {
	  	var a = 6, b = 2;
	  	var res = divide(a, b);

	  	equal(res, 3, "divide result should be 3");
	});

	module("My Functions w/markup");

	test("clickMeBtn clicked", function() {		
	  	$("#clickMeBtn").click();
	  	var res = $("#result").text();

	  	equal(res, "Button clicked!", "clickMeBtn did its job");
	});

})(jQuery);