import { Container, Layout } from 'components'
import { Header } from 'layout'
import { FC } from 'react'

export const NotFound404: FC = (): JSX.Element => {
	return (
		<Layout>
			<Container>
				<Header />
				<h1>Ничего не найдено (</h1>
			</Container>
		</Layout>
	)
}
