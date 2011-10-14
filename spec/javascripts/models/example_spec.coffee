describe "Example", ()->
  beforeEach ()->
    this.example = new window.Example
    
  it "should be true", ()->
    title = this.example.get('title')
    expect(true).toEqual(true)