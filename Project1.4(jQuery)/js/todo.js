function TodoCtrl($scope) {
// Interesting...this function seems to "control" the div assigned to...
	
	// MEET THE TODOS
	$scope.todos = [
		{text:'Play with Angular!!', done:true},
		{text:'Build an Angular app', done:true},
		{text:'Save the World!', done:false}
	];
	
	$scope.archivedTodos = [];
	
	// ADD A TODO
	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	}
	
	// DETERMINE REMAINING
	$scope.getNumberRemaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) { // calling 'angular' is definitely longer than the '$' for jQuery
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	
	// ARCHIVE
	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) {
				$scope.todos.push(todo)
			} else {
				$scope.archivedTodos.push(todo)
			};
		});
	};
	
	$scope.getNumberArchived = function() {
		return $scope.archivedTodos.length;
	}
	
	/*
	$scope.returnArchived = function() {
		
	}
	*/
	
}

function cssPlayer ($scope) {

	// TODO: Add in a way to set the number of items and change the box set dynamically

	$scope.items = [
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},
		{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"},{text:":)", css:"blue"}
	]
	
	$scope.changeCSS = function () {
		var squares = $scope.items;
		
		
		angular.forEach(squares, function(square) {
			if(square.css === "red") {
				square.css = "blue";
			} else if (square.css === "blue"){
				square.css = "yellow";
			} else {
				square.css = "red";
			}
		});
	};


}
