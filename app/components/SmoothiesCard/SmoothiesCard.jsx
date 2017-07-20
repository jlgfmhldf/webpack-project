import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import noop from 'noop3'
import {
	Card,
	CardMedia,
	CardTitle,
	CardText,
	Button,
} from 'react-toolbox'
import './SmoothiesCard.css'

export default class SmoothiesCard extends PureComponent {
	static propTypes = {
		title: string,
		subtitle: string,
		image: string,
		description: string,
		onView: func,
	}

	static defaultProps = {
		onView: noop,
	}

	render() {
		const {
			title,
			subtitle,
			image,
			description,
			onView,
		} = this.props
		return (
			<Card>
				<CardTitle
					title={title}
					subtitle={subtitle}
				/>
				<CardMedia
					aspectRatio="wide"
					image={image}
				/>
				{description && <CardText>{description}</CardText>}
				<Button
					label="Выбрать"
					onClick={onView}
					raised
					accent
					styles={{
						width: '100%',
						height: 60,
					}}
				/>
			</Card>
		)
	}
}
