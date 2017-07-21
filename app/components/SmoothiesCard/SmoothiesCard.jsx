import React, { PureComponent } from 'react'
import { number, string, func } from 'prop-types'
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
		calories: number,
		carbohydrates: number,
		proteins: number,
		fats: number,
		link: string,
		onView: func,
	}

	static defaultProps = {
		onView: noop,
	}

	render() {
		const {
			title,
			image,
			description,
			calories,
			carbohydrates,
			proteins,
			fats,
			link,
			onView,
		} = this.props

		const subtitle = []

		proteins && subtitle.push(`Белки: ${proteins}`)
		fats && subtitle.push(`Жиры: ${fats}`)
		carbohydrates && subtitle.push(`Углеводы: ${carbohydrates}`)

		return (
			<Card>
				<CardTitle
					title={title + ` (${calories})`}
					subtitle={subtitle.join(' / ')}
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
					href={link}
					target='_blank'
					styles={{
						width: '100%',
					}}
				/>
			</Card>
		)
	}
}
