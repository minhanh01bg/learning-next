export default async function getUserPost(userId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
