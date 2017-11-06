describe("Component: demoComponent", function () {

	let component;
	beforeEach(function () {
		module('angularModuleDevSkeleton')

		inject(function ($rootScope, $compile, $componentController) {
			let rootScope = $rootScope.$new();
			let componentMarkup = '<demo-btn hero="btnText" comment="Ich bin ein Kommentar">{{ btnText }}</demo-btn>'

			component = $compile(angular.element(componentMarkup))(rootScope);
			controller = component.controller('demoBtn');

			rootScope.btnText = 'HIHA HOT';
			rootScope.$apply();
		});
	});

	it('should shows a button with text', function () {
		expect(component.text().trim()).toBe('HIHA HOT');
	});
});