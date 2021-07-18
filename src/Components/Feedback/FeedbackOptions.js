import React from 'react'

const FeedbackOptions = ({ options }, leaveFeedback) => {
	return (
		<div>
			{options.map((option) => (
				<button
					key={option}
					type="button"
					onClick={() => leaveFeedback({ option })}
				>
					{option}
				</button>
			))}
		</div>
	)
}

export default FeedbackOptions
