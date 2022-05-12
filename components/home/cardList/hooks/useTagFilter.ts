import { Org } from '@prisma/client'

/* Return orgs that include a tag in the `tags` set. */
export default function useTagFilter(orgs: Org[], tags: Set<number>) {
    return orgs.filter((org) => {
        return org.categories.reduce((a, b) => {
            return a || tags.has(b.id)
        }, false)
    })
}
