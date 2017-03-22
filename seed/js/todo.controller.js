var log = console.log
function TodoController() {
 this.newTodo = '';
 this.addTodo = function() {
  this.list = [{title: this.newTodo, complete: false}].concat(this.list)
  this.newTodo = '';
 };
 this.removeTodo = function(index) {
  log(index);
  this.list.splice(index, 1);
 }
 this.list = [
  {
    title: 'First',
    complete: true
  }, {
    title: 'Second',
    complete: false
  }, {
    title: 'Third',
    complete: false
  }]
};
TodoController.$inject = ['$scope'];
angular
  .module('app')
  .controller('TodoController', 
  TodoController);