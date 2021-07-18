import React from 'react'
import PropTypes from 'prop-types'

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
	return (
		<button
			type="button"
			key={feedback}
			data-feedback={feedback}
			onClick={onLeaveFeedback}
		>
			{feedback}
		</button>
	)
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return options.map((option) => (
		<FeedbackButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
	))
}

FeedbackButton.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string),
	onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
