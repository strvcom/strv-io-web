import React, { FC } from 'react'
import { Link } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

interface IEventArgs {
	to: string
  label?: string
}

interface Props extends IEventArgs {
	onPress?: () => void
}

const trackClick = ({ to, label }: IEventArgs) => () => {
	trackCustomEvent({
		category: 'Interaction',
		action: 'Click',
		label,
		value: to
	})
}

const Resource: FC<Props> = props => (
	<Link
		onClick={trackClick(props)}
		{...props}
	/>
)

export default Resource
