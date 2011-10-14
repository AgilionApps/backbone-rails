describe "Example", ()->
  beforeEach ()->
    this.example = new window.Example
    
  it "should have defaults", ()->
    title = this.example.get('title')
    expect(title).toEqual("Hello, World")