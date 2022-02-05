
interface getLikeResponse {
  totalCount: number,
}

interface postLikeResponse {
  totalCount: number,
  clientCount: number,
}

export const getLikes = async (slug: string): Promise<number> => {
  const resp = await fetch("https://api.gehhilfe.dev/dev/like?id=" + encodeURIComponent(slug))
  const decodedResponse = (await resp.json()) as getLikeResponse
  return decodedResponse.totalCount
}

export const postLike = async (slug: string, client: string): Promise<number> => {
  const resp = await fetch("https://api.gehhilfe.dev/dev/like", {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: slug,
      client: client
    })
  })
  const decodedResponse = (await resp.json()) as postLikeResponse
  return decodedResponse.totalCount
}