import { Container, Layout, PizzaFilter } from 'components'
import { Header } from 'layout'
import { FC } from 'react'

export const Home: FC = (): JSX.Element => {
	return (
		<div>
			<Layout>
				<Container>
					<Header />
					<PizzaFilter />
				</Container>
			</Layout>
		</div>
	)
}
