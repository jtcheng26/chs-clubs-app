import { OrgWithAll } from '../../../../pages'

/* Return orgs that include a tag in the `tags` set. */
export default function useTagFilter(orgs: OrgWithAll[], tags: Set<number>) {
    return orgs.filter((org) => {
        return org.categories.reduce((a, b) => {
            return a || tags.has(b.id)
        }, tags.size === 0)
    })
}
