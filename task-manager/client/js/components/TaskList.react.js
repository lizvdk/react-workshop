var CategoryListItem = React.createClass({
  render: function() {
      var taskList = this.props.tasks.map((task, i) => {
          return (
              <TaskListItem task={task} />
          );
      });

      return (
          <li>{this.props.category.get('name')}
            <ul>
                {taskList}
            </ul>
          </li>
      );
  }
});

var TaskListItem = React.createClass({
  render: function() {
      return (
          <li>{this.props.task.get('name')}</li>
      );
  }
});

var TaskList = React.createClass({
    render: function() {
        var categoryList = this.props.categories.map((category, i) => {
            var tasks = this.props.tasks.where({category: category.get('id')});
            return (
                <CategoryListItem category={category} tasks={tasks} />
            );
        });

        return (
            <ul className="taskList">
                {categoryList}
            </ul>
        );
    }
});

export default TaskList;
