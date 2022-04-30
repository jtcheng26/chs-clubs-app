import prismaClient from '../lib/prisma'

export default function Home({ org }) {
    return <div className="text-3xl bg-red-400">{org.hook}</div>
}

export async function getServerSideProps() {
    const org = await prismaClient.org.findFirst({
        where: { name: 'org' },
    })
    return {
        props: { org },
    }
}
