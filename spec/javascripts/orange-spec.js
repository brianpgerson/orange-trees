describe ("plantTree", function(){
  it("should should be defined", function(){
    expect(plantTree()).toBeDefined();
  });

  it("should show a tree on screen", function(){
    var tree=createTree();
    expect(tree.age).toEqual(0);
  });