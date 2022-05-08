import { Container, Layout, PizzaFilter, PizzaList } from 'components'
import { Header } from 'layout'
import { FC } from 'react'

export const Home: FC = (): JSX.Element => {
	return (
		<Layout>
			<Container>
				<Header />
				<PizzaFilter />
				<PizzaList />
			</Container>
		</Layout>
	)
}
