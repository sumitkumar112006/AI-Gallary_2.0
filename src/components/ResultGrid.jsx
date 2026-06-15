import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, setActiveTab, setError, setLoading, setResults, clearResults } from '../redux/features/searchSlice'
import { getGif, getPhoto, getVideo } from '../api/mediaApi'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const dispatch = useDispatch()


    useEffect(() => {
        if(!query) return
        const getData = async () => {
            
            try {
                dispatch(setLoading(true))
                let data = null;

                if (activeTab == 'photos') {
                    const res = await getPhoto(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full

                    }))
                }
                if (activeTab == 'videos') {
                    const res = await getVideo(query)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || query,
                        thumbnail: item.image,
                        preview: item.url,
                        src: item.video_files[0].link
                    }))

                }
                if (activeTab == 'gif') {
                    const res = await getGif(query)
                    data = res.data.map((item) => ({
                        id: item.id,
                        title: item.title,
                        type: 'gif',
                        thumbnail: item.embed_url,
                        src: item.images.downsized.url
                    }))
                }
                
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
                
            }
        }
        getData(query)
    }, [query, activeTab, dispatch])

    // if (error) return <h1>Error</h1>
    if(loading) return <h1 className='p-0 m-0 text-center'>Loading...</h1>
    return (
        <div className='w-full flex flex-wrap justify-center min-h-screen gap-4 p-10 h-100vh'>
            {
                results.map((item, idx) => {
                    return <div key={idx}>
                        <ResultCard {...item} />
                    </div>
                })
            }
        </div>
    )
}

export default ResultGrid