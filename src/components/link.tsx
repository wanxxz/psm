import { createLink } from '@tanstack/react-router'
import { Button as RSButton, Link as RSLink } from '@react-spectrum/s2'

export const Link = createLink(RSLink)
export const ButtonLink = createLink(RSButton)
