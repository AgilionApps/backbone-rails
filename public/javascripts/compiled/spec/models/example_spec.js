(function() {
  describe("Example", function() {
    beforeEach(function() {
      return this.example = new window.Example;
    });
    return it("should have defaults", function() {
      var title;
      title = this.example.get('title');
      return expect(title).toEqual("Hello, World");
    });
  });
}).call(this);
