import * as Headless from '@headlessui/react'
import { Link as ReactRouterLink, type LinkProps } from 'react-router-dom'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: { href: string } & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const { href, ...rest } = props;
  return (
    <Headless.DataInteractive>
      <ReactRouterLink {...rest} to={href} ref={ref} />
    </Headless.DataInteractive>
  )
})
