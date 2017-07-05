import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button'
import {
	Layout,
	Panel,
	AppBar,
	Checkbox,
	Card,
	CardMedia,
	CardTitle,
	CardText,
	CardActions,
} from 'react-toolbox'

/* eslint-disable no-unused-vars */
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {
	render() {
		return (
			<div>
				<Layout>
					<Panel>
						<AppBar leftIcon='menu' />

						<p>
							Выберите продукты, которые есть у вас в холодильнике:
						</p>
						<Checkbox label="Бананы"/>
						<Checkbox label="Малина"/>
						<Checkbox label="Клубника"/>
						<Checkbox label="Бананы"/>

						<Button label='Далее' raised primary/>
						<h2>
							Результаты поиска:
						</h2>
						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>

						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>

						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>

						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>

						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>
						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>
						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>
						<div style={{ width: '25%'}}>
							<Card>
								<CardTitle
									avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
									aspectRatio="wide"
									image="https://placeimg.com/800/450/nature"
								/>
								<CardTitle
									title="Title goes here"
									subtitle="Subtitle here"
								/>
								<CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
								<CardActions >
									<Button label="Action 1" />
									<Button label="Action 2" />
								</CardActions>
							</Card>
						</div>
					</Panel>
				</Layout>
			</div>
		)
	}
}
