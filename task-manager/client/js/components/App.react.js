// components
import Navbar from './Navbar.react';
import CategoryForm from './CategoryForm.react';
import TaskForm from './TaskForm.react';
import TaskList from './TaskList.react';
import RemoveCompletedTasksButton from './RemoveCompletedTasksButton.react';

// collections
import CategoryCollection from '../domain/CategoryCollection';
import TaskCollection from '../domain/TaskCollection';

var App = React.createClass({
    getInitialState: function() {
        return {
            categories: new CategoryCollection(),
            tasks: new TaskCollection()
        }
    },

    componentDidMount: function() {
        this.state.categories.fetch();
        this.state.tasks.fetch();

        this.state.categories.on('all', () => {
            this.setState({categories: this.state.categories});
        });

        this.state.tasks.on('all', () => {
            this.setState({tasks: this.state.tasks});
        });
    },

    componentWillUnmount: function() {
        this.state.categories.off('all');
        this.state.tasks.off('all');
    },

    render: function() {
        return (
            <section>
                <Navbar title="Task Manager" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <TaskList categories={this.state.categories} tasks={this.state.tasks} />
                        </div>
                        <div className="col-md-6">
                            <CategoryForm categories={this.state.categories} />
                            <TaskForm categories={this.state.categories} tasks={this.state.tasks} />

                            <hr/>

                            <RemoveCompletedTasksButton tasks={this.state.tasks} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default App;
