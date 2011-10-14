(function() {
  describe("Example", function() {
    beforeEach(function() {
      return this.example = new window.Example;
    });
    return it("should be true", function() {
      var title;
      title = this.example.get('title');
      return expect(title).toEqual("Hello, World");
    });
  });
}).call(this);
