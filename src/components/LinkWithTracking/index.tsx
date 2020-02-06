import React, { FC } from 'react'
import { Link } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

interface IEventArgs {
	to: string
  label?: string
}

const trackClick = ({ to, label }: IEventArgs) => () => {
	trackCustomEvent({
		category: 'Interaction',
		action: 'Click',
		label,
		value: to
	})
}

const Resource: FC<IEventArgs> = props => (
	<Link
		onClick={trackClick(props)}
		{...props}
	/>
)

export default Resource
