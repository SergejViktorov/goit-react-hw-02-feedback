import { Component } from 'react'

import Section from './Components/Section'
import FeedbackOptions from './Components/FeedbackOptions'
import Statistics from './Components/Statistics'
import { FEEDBACK_OPTIONS } from './data/options'

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	leaveFeedback = ({ target }) => {
		const { feedback } = target.dataset
		this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }))
	}

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state
		return good + neutral + bad
	}

	countPositive = () => {
		const { good } = this.state
		const total = this.countTotalFeedback()
		return Math.trunc((good / total) * 100) || 0
	}

	render() {
		const { good, neutral, bad } = this.state
		const total = this.countTotalFeedback()
		const positivePercentage = this.countPositive()
		return (
			<div>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={FEEDBACK_OPTIONS}
						onLeaveFeedback={this.leaveFeedback}
					/>
				</Section>

				<Section title="Statistics">
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				</Section>
			</div>
		)
	}
}

export default App
