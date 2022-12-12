import { useState } from 'react';
import Card from "./Card";
import CustomHook from './CustomHook';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Videos(){
    const [page,setPage]=useState(1);
    const {error,loading,videos,hasMore}=CustomHook(page);
    return(
        <div>
            {videos.length>0 && (
            <InfiniteScroll dataLength={videos.length} loader="Loading..." hasMore={hasMore} next={()=>setPage(page+7)}>
                {videos.map((video,index)=>(
                <div className="infinite-scroll-component" key={index}>
                    <Card title={video.title} id={video.youtubeID
                    } noq={video.noq} />
                </div>
                ))}
            </InfiniteScroll>)}
            {!loading && videos.length === 0 && (
            <div className=''>
                No Data Found
            </div>)}
            {error && <div>Error Occured</div>}
            {loading && <div>Loading ...</div>}
        </div>   
    );
}