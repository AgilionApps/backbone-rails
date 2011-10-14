(function() {
  describe("Example", function() {
    beforeEach(function() {
      return this.example = new window.Example;
    });
    return it("should be true", function() {
      var title;
      title = this.example.get('title');
      return expect(true).toEqual(true);
    });
  });
}).call(this);
