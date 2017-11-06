describe('The Chemical Brothers - Galvanize', function () {
    it('push the button', function () {
        browser.get('http://localhost:8081/index.html');
        element(by.css('button')).click();
        var p = element.all(by.css('p'));
        expect(p.get(0).getText()).toEqual('Hi, im demo-content');
    });
});