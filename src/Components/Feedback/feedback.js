import React from 'react'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from './Notification'

class Feedback extends React.Component {
	static defaultProps = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	static propTypes = {}

	state = {
		good: this.props.good,
		neutral: this.props.neutral,
		bad: this.props.bad,
	}

	// hendlerIncrementGood = () => {
	// 	this.setState((prevState) => {
	// 		return { good: prevState.good + 1 }
	// 	})
	// }

	// hendlerIncrementNeutral = () => {
	// 	this.setState((prevState) => {
	// 		return { neutral: prevState.neutral + 1 }
	// 	})
	// }

	// hendlerIncrementBad = () => {
	// 	this.setState((prevState) => {
	// 		return { bad: prevState.bad + 1 }
	// 	})
	// }

	// leaveFeedback = () => {
	// 	this.setState((prevState) => {
	// 		return { option: prevState.option + 1 }
	// 	})
	// }
	// deleteTodo = (todoId) => {
	// 	this.setState((prevState) => ({
	// 		todos: prevState.todos.filter((todo) => todo.id !== todoId),
	// 	}))
	// }

	countTotalFeedback() {
		return this.state.good + this.state.neutral + this.state.bad
	}

	countPositiveFeedbackPercentage() {
		return (this.state.good / this.countTotalFeedback()) * 100
	}

	render() {
		const positivePercentage = Math.trunc(
			this.countPositiveFeedbackPercentage()
		)
		const total = this.countTotalFeedback()
		const good = this.state.good
		const neutral = this.state.neutral
		const bad = this.state.bad
		const options = this.state
		return (
			<>
				<h1>Please leave feedback</h1>
				<FeedbackOptions
					options={options}
					// onLeaveFeedback={this.leaveFeedback()}
					// onIncrementGood={this.hendlerIncrementGood}
					// onIncrementNeutral={this.hendlerIncrementNeutral}
					// onIncrementBad={this.hendlerIncrementBad}
				/>

				<h2>Statistics</h2>

				{total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				)}
			</>
		)
	}
}

export default Feedback
