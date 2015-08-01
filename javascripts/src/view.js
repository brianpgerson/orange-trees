
window.addEventListener('load', init);

function init(){
	var view = new View;
	view.bindEventListeners();
	console.log(view);
}

function View(){
}

View.prototype.bindEventListeners = function(){
	document.getElementById("plant").addEventListener("click", this.nameTree.bind(this), false);	
}

View.prototype.nameTree = function(){
    debugger;
    var tree = prompt("Please enter your name", "Enter Here");
    if (tree != null) {
        document.getElementById("treeName").innerHTML = tree;
    }
    this.plantTree();
}

View.prototype.plantTree = function(){
	document.getElementById("hide").setAttribute("id", "show");
	document.getElementById("plant").setAttribute("id", "hide");
}